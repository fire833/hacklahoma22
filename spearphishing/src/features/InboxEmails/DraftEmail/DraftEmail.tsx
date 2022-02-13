import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Target } from "../../../containers/targets/TargetContainer";
import { GetRandomUser } from "../../../containers/targets/targets";
import { InboxEmailKind } from "../../inbox/ActiveEmail";
import { IncomingEmail, pushEmail } from "../../inbox/inboxSlice";
import { InboxEmailProps } from "../InboxEmailProps";
import { EmailSkeleton } from "../SharedComponents/EmailSkeleton";
import { AttackTypes } from "../../../containers/targets/AttackTypes";
import React, { useState, ChangeEvent } from 'react';
import { BankResetPasswordEmail } from "./EmailAttackStrategies/BankResetPasswordEmail";
import { BossWantsFileCheckEmail } from "./EmailAttackStrategies/BossWantsFileCheckEmail";
import { NigerianPrinceEmail } from "./EmailAttackStrategies/NigerianPrinceEmail";
import { RelativeInPrisonEmail } from "./EmailAttackStrategies/RelativeInPrisonEmail";
import { RequestChildSupportPregnancyEmail } from "./EmailAttackStrategies/RequestChildSupportPregnancyEmail";
import { TikTokVerifyAddressEmail } from "./EmailAttackStrategies/TikTokVerifyAddressEmail";
import { ThreatenPictureLeakEmail } from "./EmailAttackStrategies/ThreatenPictureLeakEmail";

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
                <p></p>
            )

    }

}

export function DraftEmail(props: DraftEmailProps) {

    const ThisType: InboxEmailKind = InboxEmailKind.OutgoingDraft;
    let dispatch = useAppDispatch();
    const [templateType, setTemplate] = useState("");
    if (props.activeEmail === null || props.activeEmail.kind !== ThisType) return <></>

    
    let target = (props.activeEmail.data as DraftEmailData).target;

    return (
        <EmailSkeleton email={props.activeEmail}>
            <h1>Control Box</h1>
            <p>Choose your attack type:</p>
            <select value={templateType} onChange={(evt: ChangeEvent<HTMLSelectElement>) => setTemplate(evt.target.value)}>
                <option value={AttackTypes.BankResetPassword}>{AttackTypes.BankResetPassword.toString()}</option>
                <option value={AttackTypes.BossWantsFileCheck}>{AttackTypes.BossWantsFileCheck.toString()}</option>
                <option value={AttackTypes.NigerianPrince}>{AttackTypes.NigerianPrince.toString()}</option>
                <option value={AttackTypes.RelativeInPrison}>{AttackTypes.RelativeInPrison.toString()}</option>
                <option value={AttackTypes.RequestChildSupportPregnancy}>{AttackTypes.RequestChildSupportPregnancy.toString()}</option>
                <option value={AttackTypes.ThreatenPictureLeak}>{AttackTypes.ThreatenPictureLeak.toString()}</option>
                <option value={AttackTypes.TikTokVerifyAddress}>{AttackTypes.TikTokVerifyAddress.toString()}</option>
            </select>

            {serveTemplate(templateType)}

            <p>Hello, i am ur br0ter</p>
        </EmailSkeleton >
    )
}