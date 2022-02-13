import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Target } from "../../../containers/targets/TargetContainer";
import { GetRandomUser } from "../../../containers/targets/targets";
import { InboxEmailKind } from "../../inbox/ActiveEmail";
import { IncomingEmail, pushEmail } from "../../inbox/inboxSlice";
import { InboxEmailProps } from "../InboxEmailProps";
import { EmailSkeleton } from "../SharedComponents/EmailSkeleton";
import { AttackTypes, Modifier, ModifierMap, ModifierMapKey } from "../../../containers/targets/AttackTypes";
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

type DraftEmailProps = {
    children?: any,
    activeEmail: IncomingEmail | null
};

type DraftEmailData = {
    target: Target
}

function serveTemplate(attack: string) {

    switch (attack) {
        case AttackTypes.BankResetPassword:
            return (
                <BankResetPasswordEmail></BankResetPasswordEmail>
            )
        case AttackTypes.BossWantsFileCheck:
            return (
                <BossWantsFileCheckEmail></BossWantsFileCheckEmail>
            )
        case AttackTypes.NigerianPrince:
            return (
                <NigerianPrinceEmail></NigerianPrinceEmail>
            )
        case AttackTypes.RelativeInPrison:
            return (
                <RelativeInPrisonEmail></RelativeInPrisonEmail>
            )
        case AttackTypes.RequestChildSupportPregnancy:
            return (
                <RequestChildSupportPregnancyEmail></RequestChildSupportPregnancyEmail>
            )
        case AttackTypes.ThreatenPictureLeak:
            return (
                <ThreatenPictureLeakEmail></ThreatenPictureLeakEmail>
            )
        case AttackTypes.TikTokVerifyAddress:
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
    let [templateType, setTemplate] = useState("");

    let initialModsActive: string[] = [];
    let [modifiersActive, setModifiersActive] = useState(initialModsActive);

    let userOwnedMods = useAppSelector(state => state.player.modifierNamesOwned);
    console.log(userOwnedMods);


    function activateMod(modifierName: string) {
        console.log("activating");

        if (!modifiersActive.includes(modifierName)) {
            setModifiersActive([...modifiersActive, modifierName]);
        }
        console.log("activcated", modifiersActive);

    }

    function toggleMod(modifierName: string) {
        console.log("toggling", modifierName);

        let isActive = modifiersActive.includes(modifierName);
        if (!isActive) activateMod(modifierName);
        else {
            setModifiersActive(modifiersActive.filter(e => e !== modifierName))
        }
        console.log("adter", modifiersActive);

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
            <div className="draftConfigure">
                <div className="attackTypeWrapper">
                    <h4 className="draftConfigureHeader">Choose your template:</h4>
                    <select value={templateType} onChange={(evt: ChangeEvent<HTMLSelectElement>) => setTemplate(evt.target.value)}>
                        <option value={AttackTypes.BankResetPassword}>{AttackTypes.BankResetPassword.toString()}</option>
                        <option value={AttackTypes.BossWantsFileCheck}>{AttackTypes.BossWantsFileCheck.toString()}</option>
                        <option value={AttackTypes.NigerianPrince}>{AttackTypes.NigerianPrince.toString()}</option>
                        <option value={AttackTypes.RelativeInPrison}>{AttackTypes.RelativeInPrison.toString()}</option>
                        <option value={AttackTypes.RequestChildSupportPregnancy}>{AttackTypes.RequestChildSupportPregnancy.toString()}</option>
                        <option value={AttackTypes.ThreatenPictureLeak}>{AttackTypes.ThreatenPictureLeak.toString()}</option>
                        <option value={AttackTypes.TikTokVerifyAddress}>{AttackTypes.TikTokVerifyAddress.toString()}</option>
                    </select>
                </div>
                <div className="modifierWrapper">
                    <h4 className="draftConfigureHeader">Add modifiers:</h4>
                    <hr />
                    <div className="modifiers">
                        {userOwnedMods.map(modName => {
                            let modObject = ModifierMap[modName as ModifierMapKey];
                            return (
                                <div className="activationRow" key={modObject.name}>
                                    <ModifierActivation key={modObject.name} modifier={modObject} onclick={() => toggleMod(modName)} isActive={modifiersActive.includes(modName)}></ModifierActivation>
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
        </EmailSkeleton >
    )
}