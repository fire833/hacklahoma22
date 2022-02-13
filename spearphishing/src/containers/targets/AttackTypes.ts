

// Enum for all available attack types.
export enum AttackTypes {
    NigerianPrince = "Nigerian Prince",
    RelativeInPrison = "Relative in Prison",
    BankResetPassword = "Bank Reset Password",
    BossWantsFileCheck = "Boss Wants a File Check",
    RequestChildSupportPregnancy = "Request Child Support (Pregnancy)",
    ThreatenPictureLeak = "Threaten Picture Leak",
    TikTokVerifyAddress = "TikTok Verify Address",
}

export type Modifier = {
    //k things that all modifiers should have
    name: string,
    description: string,
    modifyCredibility: (credibility: number) => number,
    modifyPayout: (moneyPaid: number, dataPaid: number) => {
        modifiedMoneyPaid: number,
        modifiedDataPaid: number
    }
}

/*

    How to write a modifier:

    Emails are scored (called credibility) by taking the target's trust value,
    changed in some way in relation to the attack type.

    After that, modifiers kick in.

    A modifier can either change the credibility value of an email, or
    can change the payout after a successful phishing attempt.

    Before rolling against the credibility value,
    pass the credibility through the modifyCredibility method of all modifiers.
    A modifer that does not change credibilit should just return whatever
    is passed to it, but it must still implement the function.
    
    Then, roll against credibility (maybe a scale of 0-100, where negative is impossible and >100 is certain, so values outside of 0-100 are okay)

    After rolling, it will get some base payout. Pass that base payout through all
    modifyPayout methods, which take the money and data and return an object
    with two properties, modifiedMoneyPaid and modifiedDataPaid.
    Take those values out of the object and pass them to the next 
    modifier's modifyPayout. The order of the modifiers doesn't matter.
    (Adding before multiplying will result in less money for the player, we let that happen.)

    A modifier which doesn't modify payout should just return its arguments, correctly
    placed into the object

    Take care that you are correctly putting moneyPaid into modifiedMoneyPaid
    and dataPaid into modifiedDataPaid. It's easy to get them mixed up or duplicate one
    and you wouldn't notice.

*/


export type ModifierMapType = {[Property in keyof typeof ModifierList]: Modifier};
export type ModifierMapKey = keyof typeof ModifierList;
export const ModifierMap: ModifierMapType = {
    "BannerAd": {
        name: "Banner Ad",
        description: "Your phishing attempt pays out more money, but is less credible",
        modifyCredibility: (credibility: number) =>{
            return Math.max(credibility - 5, 0) // cred - 5, but don't go negative,
        },
        modifyPayout: (moneyPaid: number, dataPaid: number) => {
            return {
                modifiedMoneyPaid: moneyPaid * 1.1,
                modifiedDataPaid: dataPaid,
            }
        }
    },
    "EmbedCryptoMiner": {
        name: "Embed Crypto Miner",
        description: "Greatly increases the monetary payout of an attempt, but greatly reduces credibility",
        modifyCredibility: (credibility: number) => {
            return credibility /= 4;
        },
        modifyPayout: (moneyPaid: number, dataPaid: number) => {
            return {
                modifiedMoneyPaid: moneyPaid * 4,
                modifiedDataPaid: dataPaid
            }
        }
        
    }
}

export const ModifierList = {
    BannerAd: "BannerAd",
    EmbedCryptoMiner: "EmbedCryptoMiner"
}