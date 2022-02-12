import { IncomingEmail } from '../inboxSlice'
import './InboxEntry.css'

type InboxEntryProps = {
    email: IncomingEmail
}

export function InboxEntry(props: InboxEntryProps) {
    return (
        <div className="InboxEntry">
            <div className='iconWrapper'>
                <div className='fakeIcon'></div>
            </div>
            <div className='summaryWrapper'>
                <div className='senderRow summaryRow'>
                    <p className='sender summaryText'>{props.email.senderName}</p>
                </div>
                <div className='subjectRow summaryRow'>
                    <p className='subject summaryText'>{props.email.subject}</p>
                </div>
                <div className='blurbRow summaryRow'>
                    <p className='blurb summaryText'> {props.email.blurb}</p>
                </div>
            </div>
        </div>
    )
}