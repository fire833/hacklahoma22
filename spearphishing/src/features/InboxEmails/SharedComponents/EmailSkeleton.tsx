import { IncomingEmail } from "../../inbox/inboxSlice";
import { EmailBody } from "./EmailBody";
import { EmailHeader } from "./EmailHeader";

interface EmailSkeletonProps {
    email: IncomingEmail,
    children: any
}

export function EmailSkeleton(props: EmailSkeletonProps){

    return (
        <div className="EmailSkeleton">
            <EmailHeader email={props.email}></EmailHeader>
            <EmailBody data={props.email.data}>
                {props.children}
            </EmailBody>
        </div>
    )
}