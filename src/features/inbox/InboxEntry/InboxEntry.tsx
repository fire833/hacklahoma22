import { useAppDispatch } from '../../../app/hooks'
import { EmailAvatar } from '../../InboxEmails/SharedComponents/EmailAvatar';
import { IncomingEmail, selectEmail } from '../inboxSlice'
import './InboxEntry.css'

interface InboxEntryProps {
    email: IncomingEmail,
    index: number,
    isActive: Boolean
}

export function InboxEntry(props: InboxEntryProps) {

    const dispatch = useAppDispatch();

    function activateEmail(){
        dispatch(
            selectEmail(
                props.index
            )
        )
    }

    return (
        <div className={"InboxEntry " + (props.isActive ? " active " : " ")} onClick={activateEmail} >
            <div className='iconWrapper'>
                <EmailAvatar email={props.email}></EmailAvatar>
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