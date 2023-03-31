import { send } from "process";
import { IncomingEmail } from "../../inbox/inboxSlice";
import { EmailAvatar } from "./EmailAvatar";

import "./EmailHeader.css";

interface EmailHeaderProps {
    email: IncomingEmail
}



export function EmailHeader(props: EmailHeaderProps) {

    return (
        <div className="EmailHeader">
            <h2>{props.email.subject}</h2>
            <hr></hr>
            <div className="lowerRow">
                <div className="senderIconWrapper">

                    <EmailAvatar email={props.email}>
                    </EmailAvatar>
                </div>


                <div className="lowerEmailData">
                    <p> <span className="deemph"> Sender: </span> {props.email.senderName}</p>
                    <p><span className="deemph"> Subject: </span>  <b>{props.email.subject}</b></p>
                </div>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}