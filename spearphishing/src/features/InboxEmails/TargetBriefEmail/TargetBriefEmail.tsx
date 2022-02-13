import { InboxEmailKind } from "../../inbox/ActiveEmail";
import { InboxEmailProps } from "../InboxEmailProps";
import { EmailSkeleton } from "../SharedComponents/EmailSkeleton";


export function TargetBriefEmail(props: InboxEmailProps) {

    const ThisType: InboxEmailKind = InboxEmailKind.TargetBrief;

    if (props.activeEmail === null || props.activeEmail.kind !== ThisType) return <></>


    return (
        <EmailSkeleton email={props.activeEmail}>
           
           <h1>Target Brief</h1>
        </EmailSkeleton>
    )


}