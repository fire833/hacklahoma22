import { InboxEmailKind } from "../../inbox/ActiveEmail"
import { InboxEmailProps } from "../InboxEmailProps"
import { EmailSkeleton } from "../SharedComponents/EmailSkeleton"

export function MarketBriefEmail(props: InboxEmailProps){

    if(props.activeEmail === null || props.activeEmail.kind !== InboxEmailKind.OutgoingDraft) return <></>

    
    return (
        <EmailSkeleton email={props.activeEmail}>
            <p> Good evening, the dark web markets have once again.
                Use the market to increase the capabilities of your
                payload as well as increase the uality of your scam domain.
            </p>

            <p>
                Use both to increase the average payout of each fishing attempt.

                Best of luck to you,

                H4cker 69
            </p>
        </EmailSkeleton>
    )


}