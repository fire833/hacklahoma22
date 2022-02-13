import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Target } from "../../../containers/targets/TargetContainer";
import { GetRandomUser } from "../../../containers/targets/targets";
import { acceptInitEmail } from "../../../player/playerSlice";
import { InboxEmailKind } from "../../inbox/ActiveEmail";
import { IncomingEmail, pushEmail } from "../../inbox/inboxSlice";
import { InboxEmailProps } from "../InboxEmailProps";
import { EmailSkeleton } from "../SharedComponents/EmailSkeleton";


type DraftEmailProps = {
    children?: any,
    activeEmail: IncomingEmail
};

export function DraftEmail(props: InboxEmailProps) {

    const ThisType: InboxEmailKind = InboxEmailKind.OutgoingDraft;
    let dispatch = useAppDispatch();
    
    if (props.activeEmail === null || props.activeEmail.kind !== ThisType) return <></>

    return (
        <EmailSkeleton email={props.activeEmail}>
            <h1>jcontrol box</h1>
            <select>
                <option>Somethinf</option>
            </select>

            <hr></hr>

            <p>Hello, i am ur br0ter</p>
        </EmailSkeleton>
    )
}