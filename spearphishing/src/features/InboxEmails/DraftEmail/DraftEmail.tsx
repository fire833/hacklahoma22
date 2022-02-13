import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Target } from "../../../containers/targets/TargetContainer";
import { GetRandomUser } from "../../../containers/targets/targets";
import { InboxEmailKind } from "../../inbox/ActiveEmail";
import { IncomingEmail, pushEmail } from "../../inbox/inboxSlice";
import { InboxEmailProps } from "../InboxEmailProps";
import { EmailSkeleton } from "../SharedComponents/EmailSkeleton";
import { AttackTypes } from "../../../containers/targets/AttackTypes";
import React, { useState, ChangeEvent } from 'react';

type DraftEmailProps = {
    children?: any,
    activeEmail: IncomingEmail
};

function serveTemplate(props: AttackTypes) {
}

export function DraftEmail(props: InboxEmailProps) {

    const ThisType: InboxEmailKind = InboxEmailKind.OutgoingDraft;
    let dispatch = useAppDispatch();
    const [templateType, setTemplate] = useState("");

    if (props.activeEmail === null || props.activeEmail.kind !== ThisType) return <></>

    return (
        <EmailSkeleton email={props.activeEmail}>
            <h1>Control Box</h1>
            <p>Choose your attack type:</p>
            <select value={templateType} onChange={(evt: ChangeEvent<HTMLSelectElement>) => setTemplate(evt.target.value)}>
                <option value={AttackTypes.BankResetPassword}>{AttackTypes.BankResetPassword.toString()}</option>
                <option value={AttackTypes.BossWantsFileCheck}>{AttackTypes.BossWantsFileCheck.toString()}</option>
                {console.log(templateType)} {/* Stretch goal: Make this represent internally as  */}
            </select>

            <p>Select email modifiers:</p>

            <hr></hr>

            <p>Hello, i am ur br0ter</p>
        </EmailSkeleton >
    )
}