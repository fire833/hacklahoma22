import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Target } from "../../../containers/targets/TargetContainer";
import { GetRandomUser } from "../../../containers/targets/targets";
import { InboxEmailKind } from "../../inbox/ActiveEmail";
import { IncomingEmail, pushEmail, removeActiveEmail } from "../../inbox/inboxSlice";
import { InboxEmailProps } from "../InboxEmailProps";
import { EmailSkeleton } from "../SharedComponents/EmailSkeleton";
import { Modifier, ModifierMap, ModifierMapKey, RefactoredAttackTypeKey, RefactoredAttackTypeList, RefactoredAttackTypeMap } from "../../../containers/targets/AttackTypes";
import React, { useState, ChangeEvent } from 'react';
import { BankResetPasswordEmail } from "./EmailAttackStrategies/BankResetPasswordEmail";
import { BossWantsFileCheckEmail } from "./EmailAttackStrategies/BossWantsFileCheckEmail";
import { NigerianPrinceEmail } from "./EmailAttackStrategies/NigerianPrinceEmail";
import { RelativeInPrisonEmail } from "./EmailAttackStrategies/RelativeInPrisonEmail";
import { RequestChildSupportPregnancyEmail } from "./EmailAttackStrategies/RequestChildSupportPregnancyEmail";
import { TikTokVerifyAddressEmail } from "./EmailAttackStrategies/TikTokVerifyAddressEmail";
import { ThreatenPictureLeakEmail } from "./EmailAttackStrategies/ThreatenPictureLeakEmail";

import "./DraftEmail.css";
import { ModifierActivation } from "./Components/ModifierActivation";
import { sendPhishingEmail } from "../../../player/submitEmail";

type DraftEmailProps = {
    children?: any,
    activeEmail: IncomingEmail | null
};

type DraftEmailData = {
    target: Target
}

function serveTemplate(attack: string) {

    switch (attack) {
        case RefactoredAttackTypeList.BankResetPassword:
            return (
                <BankResetPasswordEmail></BankResetPasswordEmail>
            )
        case RefactoredAttackTypeList.BossWantsFileCheck:
            return (
                <BossWantsFileCheckEmail></BossWantsFileCheckEmail>
            )
        case RefactoredAttackTypeList.NigerianPrince:
            return (
                <NigerianPrinceEmail></NigerianPrinceEmail>
            )
        case RefactoredAttackTypeList.RelativeInPrison:
            return (
                <RelativeInPrisonEmail></RelativeInPrisonEmail>
            )
        case RefactoredAttackTypeList.RequestChildSupportPregnancy:
            return (
                <RequestChildSupportPregnancyEmail></RequestChildSupportPregnancyEmail>
            )
        case RefactoredAttackTypeList.ThreatenPictureLeak:
            return (
                <ThreatenPictureLeakEmail></ThreatenPictureLeakEmail>
            )
        case RefactoredAttackTypeList.TikTokVerifyAddress:
            return (
                <TikTokVerifyAddressEmail></TikTokVerifyAddressEmail>
            )
        default:
            return (
                <div />
            )

    }

}

export function DraftEmail(props: DraftEmailProps) {

    const ThisType: InboxEmailKind = InboxEmailKind.OutgoingDraft;
    let dispatch = useAppDispatch();
    
    let initialModsActive: string[] = [];
    let [modifierNamesActive, setModifiersActive] = useState(initialModsActive);
    
    let userOwnedMods = useAppSelector(state => state.player.modifierNamesOwned);
    console.log(userOwnedMods);
    
    let userOwnedAtks = useAppSelector(state => state.player.attackTypeNamesOwned);
    console.log(userOwnedAtks);
    
    let [templateType, setTemplate] = useState(userOwnedAtks[0]);


    function activateMod(modifierName: string) {
        console.log("activating");

        if (!modifierNamesActive.includes(modifierName)) {
            setModifiersActive([...modifierNamesActive, modifierName]);
        }
        console.log("activcated", modifierNamesActive);

    }

    function toggleMod(modifierName: string) {
        console.log("toggling", modifierName);

        let isActive = modifierNamesActive.includes(modifierName);
        if (!isActive) activateMod(modifierName);
        else {
            setModifiersActive(modifierNamesActive.filter(e => e !== modifierName))
        }
        console.log("adter", modifierNamesActive);

    }


    function submitDraft() {
        sendPhishingEmail(
            target,
            {
                attackType: templateType as RefactoredAttackTypeKey,
                modifiersApplied: modifierNamesActive.map(e => ModifierMap[e as ModifierMapKey])
            }
        );

        dispatch(
            removeActiveEmail()
        )
    }

    if (props.activeEmail === null || props.activeEmail.kind !== ThisType) return <></>


    let target = (props.activeEmail.data as DraftEmailData).target;

    return (
        <EmailSkeleton email={props.activeEmail}>
            <div className="targetPreview">
                <h4 style={{ fontWeight: "normal", color: 'rgba(0, 0, 0, 0.8)', textDecoration: 'underline', display: 'inline-block' }}>Preparing Scam Against: </h4> <span className="draftConfigureHeader" style={{ textDecoration: "none" }}>{target.Name}</span>

                <p className="draftConfigureHeader">Target Profile: </p>
                <p>The target is a {target.Age} year old {target.Gender.toLowerCase()}. Occupation: {target.Occupation}</p>
            </div>
            <hr></hr>
            <div className="draftConfigure">
                <div className="attackTypeWrapper">
                    <h4 className="draftConfigureHeader">Choose your scam type:</h4>
                    <select value={templateType} onChange={(evt: ChangeEvent<HTMLSelectElement>) => setTemplate(evt.target.value as RefactoredAttackTypeKey)}>
                        <option selected disabled>-- Select Attack Type--</option>

                        {userOwnedAtks.map((atkName, ind) => {
                            let atkObj = RefactoredAttackTypeMap[atkName as RefactoredAttackTypeKey];
                            console.log("name", atkName, "found", atkObj);
                            
                            return (
                                <option value={atkName} key={ind}>{atkObj.displayName}</option>
                            )
                        })}

                        {/* <option value={RefactoredAttackTypeList.BankResetPassword}>{RefactoredAttackTypeList.BankResetPassword.toString()}</option>
                        <option value={RefactoredAttackTypeList.BossWantsFileCheck}>{RefactoredAttackTypeList.BossWantsFileCheck.toString()}</option>
                        <option value={RefactoredAttackTypeList.NigerianPrince}>{RefactoredAttackTypeList.NigerianPrince.toString()}</option>
                        <option value={RefactoredAttackTypeList.RelativeInPrison}>{RefactoredAttackTypeList.RelativeInPrison.toString()}</option>
                        <option value={RefactoredAttackTypeList.RequestChildSupportPregnancy}>{RefactoredAttackTypeList.RequestChildSupportPregnancy.toString()}</option>
                        <option value={RefactoredAttackTypeList.ThreatenPictureLeak}>{RefactoredAttackTypeList.ThreatenPictureLeak.toString()}</option>
                        <option value={RefactoredAttackTypeList.TikTokVerifyAddress}>{RefactoredAttackTypeList.TikTokVerifyAddress.toString()}</option> */}
                    </select>
                    <p style={{ color: 'rgba(0, 0, 0, 1)', fontWeight: '300' }}>
                        Different kinds of people will be more or less susceptible to each type of attack.
                        Select the one that you think they would most likely fall for.
                    </p>
                    <p style={{ color: 'rgba(0, 0, 0, 1)', fontWeight: '300' }}>
                        Your target may or may not fall for your scam.
                        If they do, you'll get a payout in data and money!
                    </p>
                </div>
                <div className="modifierWrapper">
                    <h4 className="draftConfigureHeader">Add modifiers:</h4>
                    <hr />
                    <div className="modifiers">
                        {userOwnedMods.map(modName => {
                            let modObject = ModifierMap[modName as ModifierMapKey];
                            return (
                                <div className="activationRow" key={modObject.name}>
                                    <ModifierActivation key={modObject.name} modifier={modObject} onclick={() => toggleMod(modName)} isActive={modifierNamesActive.includes(modName)}></ModifierActivation>
                                    <hr></hr>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <hr />
            <h4 className="draftConfigureHeader">Preview E-Mail</h4>

            {serveTemplate(templateType)}

            <hr />

            <div className="submitRow">
                <button onClick={() => submitDraft()} className="sendBtn">Send E-Mail</button>
            </div>
        </EmailSkeleton >
    )
}