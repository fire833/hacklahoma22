import { Target } from "./TargetContainer";


// Enum for all available attack types.
enum AttackTypes {
    NigerianPrince = "Nigerian Prince",
    RelativeInPrison = "Relative in Prison",
    BankResetPassword = "Bank Reset Password",
    BossWantsFileCheck = "Boss Wants a File Check",
    RequestChildSupportPregnancy = "Request Child Support (Pregnancy)",
    ThreatenPictureLeak = "Threaten Picture Leak",
    TikTokVerifyAddress = "TikTok Verify Address",
}

export type RefactoredAttackType = {
    displayName: string,
    description: string,
    cost: number,
    modifyCredibility:(credibility: number, target: Target) => number
}

export type Modifier = {
    //k things that all modifiers should have
    name: string,
    description: string,
    cost: number,
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


export type RefactoredAttackTypeMapType = {[Property in keyof typeof RefactoredAttackTypeList]: RefactoredAttackType};
export type RefactoredAttackTypeKey = keyof typeof RefactoredAttackTypeList;
export const RefactoredAttackTypeMap: RefactoredAttackTypeMapType = {
    RelativeInPrison: {
        cost: 1000,
        description: "Your target will think a long lost relative needs bail money",
        displayName: "Relative In Prison",
        modifyCredibility: (cred, target) => {
            return cred;
        }
    },
    BankResetPassword: {
        cost: 1000,
        description: "Your target will think their bank needs a new password, giving it to you",
        displayName: "Bank Reset Password",
        modifyCredibility: (cred, target) => {
            return cred;
        }
    },
    BossWantsFileCheck: {
        cost: 1000,
        description: "Your target will think their boss needs them to check out a file, which they'll download and run",
        displayName: "Boss Wants File Check",
        modifyCredibility: (cred, target) => {
            return cred;
        }
    },
    NigerianPrince: {
        cost: 1000,
        description: "Your target will fall victim to a classic scheme",
        displayName: "Nigerian Prince",
        modifyCredibility: (cred, target) => {
            return cred;
        }
    },
    RequestChildSupportPregnancy: {
        cost: 1000,
        description: "Your target will request child support payments",
        displayName: "Request Child Support",
        modifyCredibility: (cred, target) => {
            return cred;
        }
    },
    ThreatenPictureLeak: {
        cost: 1000,
        description: "Your target will pay a ransom for compromising pictures that you claim to have of them",
        displayName: "Threaten Picture Leak",
        modifyCredibility: (cred, target) => {
            return cred;
        }
    },
    TikTokVerifyAddress: {
        cost: 1000,
        description: "Your target will think 'TikTok' needs their address",
        displayName: "TikTok Verify Address",
        modifyCredibility: (cred, target) => {
            return cred;
        }
    },

}

export const RefactoredAttackTypeList = {
    "NigerianPrince": "NigerianPrince",
    "RelativeInPrison": "RelativeInPrison",
    "BankResetPassword": "BankResetPassword",
    "BossWantsFileCheck": "BossWantsFileCheck",
    "RequestChildSupportPregnancy": "RequestChildSupportPregnancy",
    "ThreatenPictureLeak": "ThreatenPictureLeak",
    "TikTokVerifyAddress": "TikTokVerifyAddress",
}

export type ModifierMapType = { [Property in keyof typeof ModifierList]: Modifier };
export type ModifierMapKey = keyof typeof ModifierList;
export const ModifierMap: ModifierMapType = {
    "BannerAd": {
        name: "Banner Ad",
        description: "Your phishing attempt pays out more money, but is less credible",
        cost: 50,
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
        cost: 750,
        modifyCredibility: (credibility: number) => {
            return credibility /= 4;
        },
        modifyPayout: (moneyPaid: number, dataPaid: number) => {
            return {
                modifiedMoneyPaid: moneyPaid * 4,
                modifiedDataPaid: dataPaid
            }
        }

    },
    "Keylogger": {
        name: "Keylogger",
        description: "Adds a flat 50 MB of data to every successful hack by infecting your target with a keylogger to pull more data.",
        cost: 750,
        modifyCredibility: (cred: number) => { return cred; },
        modifyPayout: (money: number, data: number) => {
            return {
                modifiedMoneyPaid: money,
                modifiedDataPaid: data + 50
            }
        }
    },
    "Ransomware": {
        name: "Ransomware",
        description: "Adds a flat $200 and to every successful hack by infecting your target with a ransomware virus.",
        cost: 3000,
        modifyCredibility: (cred: number) => { return cred; },
        modifyPayout: (money: number, data: number) => {
            return {
                modifiedMoneyPaid: money + 200,
                modifiedDataPaid: data,
            }
        }
    },
    "RAT": {
        name: "RAT",
        description: "Adds a flat 50 MB of data on every successful hack by allowing a Remote Access Terminal backdoor to be installed as a backdoor on your victim's machine.",
        cost: 2500,
        modifyCredibility: (cred: number) => { return cred; },
        modifyPayout: (money: number, data: number) => {
            return {
                modifiedMoneyPaid: money,
                modifiedDataPaid: data + 50,
            }
        }
    },
    "Worm": {
        name: "Worm",
        description: "Adds a flat 150 MB of data on every successful hack by allowing a worm to install on your targets machine and infiltrate the surrounding network.",
        cost: 3000,
        modifyCredibility: (cred: number) => { return cred; },
        modifyPayout: (money: number, data: number) => {
            return {
                modifiedMoneyPaid: money,
                modifiedDataPaid: data + 150,
            }
        }
    },
    "AdvancedProofRead": {
        name: "Advanced Proof Read",
        description: "Increases your credibility by 10% by allowing you to hire a proofreader.",
        cost: 1000,
        modifyCredibility: (cred: number) => { 
            let currCred = cred * 0.10;    
            return cred + currCred; 
        },
        modifyPayout: (money: number, data: number) => {
            return {
                modifiedMoneyPaid: money,
                modifiedDataPaid: data,
            }
        }
    },
    "AddPersonalInformation": {
        name: "Add Personal Information",
        description: "Increases your credibility by 15% by allowing you to find/insert personal information into your emails to make them more convincing.",
        cost: 1250,
        modifyCredibility: (cred: number) => { 
            let currCred = cred * 0.15;    
            return cred + currCred; 
        },
        modifyPayout: (money: number, data: number) => {
            return {
                modifiedMoneyPaid: money,
                modifiedDataPaid: data,
            }
        }
    },
    "IncreaseDomainCredibility": {
        name: "Increase Domain Credibility",
        description: "Increases your credibility by 5% by allowing you to use a more realistic domain for your phishing link.",
        cost: 1000,
        modifyCredibility: (cred: number) => { 
            let currCred = cred * 0.05;    
            return cred + currCred; 
        },
        modifyPayout: (money: number, data: number) => {
            return {
                modifiedMoneyPaid: money,
                modifiedDataPaid: data,
            }
        }
    },
    "IncreaseSourceEmailCredibility": {
        name: "Increase Source Email Credibility",
        description: "Increases your credibility by 5% by allowing you to use a more realistic spoofed source email address.",
        cost: 1000,
        modifyCredibility: (cred: number) => { 
            let currCred = cred * 0.05;    
            return cred + currCred; 
        },
        modifyPayout: (money: number, data: number) => {
            return {
                modifiedMoneyPaid: money,
                modifiedDataPaid: data,
            }
        }
    },
}

export const ModifierList = {
    BannerAd: "BannerAd",
    EmbedCryptoMiner: "EmbedCryptoMiner",
    Keylogger: "Keylogger",
    Ransomware: "Ransomware", 
    RAT: "RAT",
    Worm: "Worm",
    AdvancedProofRead: "AdvancedProofRead",
    AddPersonalInformation: "AddPersonalInformation",
    IncreaseDomainCredibility: "IncreaseDomainCredibility",
    IncreaseSourceEmailCredibility: "IncreaseSourceEmailCredibility",
}