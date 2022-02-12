import { InboxEmailKind } from "../../inbox/ActiveEmail";
import { InboxEmailProps } from "../InboxEmailProps";
import { EmailSkeleton } from "../SharedComponents/EmailSkeleton";


export function IntroEmail(props: InboxEmailProps) {

    const ThisType: InboxEmailKind = InboxEmailKind.IntroEmail;

    if (props.activeEmail === null || props.activeEmail.kind !== ThisType) return <></>


    return (
        <EmailSkeleton email={props.activeEmail}>

        </EmailSkeleton>
    )


}