import { Target } from "../../../containers/targets/TargetContainer";
import { InboxEmailKind } from "../../inbox/ActiveEmail";
import { IncomingEmail } from "../../inbox/inboxSlice";
import { InboxEmailProps } from "../InboxEmailProps";
import { EmailSkeleton } from "../SharedComponents/EmailSkeleton";


export type TargetBriefData = {
    targets: Target[],
}

export type TargetBriefProps = {
    children?: any,
    activeEmail: IncomingEmail | null,
}

export function TargetBriefEmail(props: TargetBriefProps) {

    const ThisType: InboxEmailKind = InboxEmailKind.TargetBrief;

    if (props.activeEmail === null || props.activeEmail.kind !== ThisType) return <></>

    let targetBriefData = props.activeEmail.data as TargetBriefData;

    return (
        <EmailSkeleton email={props.activeEmail}>
           
           <h1>Target Brief</h1>
           <p>Here are your options for the day. As always, <b>you'll only have time to scam 3 of them.</b></p>

           {targetBriefData.targets.map(target => {
               <p>{JSON.stringify(target)}</p>
           })}

        </EmailSkeleton>
    )


}