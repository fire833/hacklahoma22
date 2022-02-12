import './InboxEntry.css'

export function InboxEntry() {
    return (
        <div className="InboxEntry">
            <div className='iconWrapper'>
                <div className='fakeIcon'></div>
            </div>
            <div className='summaryWrapper'>
                <div className='senderRow summaryRow'>
                    <p className='sender summaryText'>Sender Line</p>
                </div>
                <div className='subjectRow summaryRow'>
                    <p className='subject summaryText'>Subject Line</p>
                </div>
                <div className='blurbRow summaryRow'>
                    <p className='blurb summaryText'>Blurb Line</p>
                </div>
            </div>
        </div>
    )
}