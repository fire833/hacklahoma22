
import "./EmailBody.css";

interface EmailBodyProps{
    data: any
    children: any
}

export function EmailBody(props: EmailBodyProps){
    return (
        <div className="EmailBody">
            {props.children}
        </div>
    )
}