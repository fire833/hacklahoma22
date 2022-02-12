import { IncomingEmail } from "../../inbox/inboxSlice";

interface EmailHeaderProps {
    email: IncomingEmail
}

export function EmailHeader(props: EmailHeaderProps){
    
    return (
        <div className="EmailHeader">
            <p>Sender: {props.email.senderName}</p>
            <p>Subject: <b>{props.email.subject}</b></p>
        </div>
    )
}