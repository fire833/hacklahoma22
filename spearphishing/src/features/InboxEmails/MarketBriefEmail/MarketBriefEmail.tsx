import { InboxEmailKind } from "../../inbox/ActiveEmail"
import { InboxEmailProps } from "../InboxEmailProps"

export function MarketBriefEmail(props: InboxEmailProps){

    if(props.activeEmail === null || props.activeEmail.kind !== InboxEmailKind.OutgoingDraft) return <></>

    
    return <p>
        
    </p>


}