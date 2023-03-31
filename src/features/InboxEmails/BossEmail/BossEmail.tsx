import { InboxEmailKind } from "../../inbox/ActiveEmail";
import { InboxEmailProps } from "../InboxEmailProps";


export function BossStatusEmail(props: InboxEmailProps){

    if(props.activeEmail === null || props.activeEmail.kind !== InboxEmailKind.BossEmail) return <></>


    return <p>
        {JSON.stringify(props)}
    </p>


}