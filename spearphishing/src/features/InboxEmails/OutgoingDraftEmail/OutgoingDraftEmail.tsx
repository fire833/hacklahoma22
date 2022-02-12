import { InboxEmailKind } from "../../inbox/ActiveEmail"
import { InboxEmailProps } from "../InboxEmailProps"

export function OutgoingDraftEmail(props: InboxEmailProps){

    if(props.activeEmail === null || props.activeEmail.kind !== InboxEmailKind.OutgoingDraft) return <></>

    
    return <p>
        {JSON.stringify(props)}
    </p>


}