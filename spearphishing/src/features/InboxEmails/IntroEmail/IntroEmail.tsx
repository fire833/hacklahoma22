import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { GetRandomUser } from "../../../containers/targets/TargetContainer";
import { acceptInitEmail } from "../../../player/playerSlice";
import { InboxEmailKind } from "../../inbox/ActiveEmail";
import { pushEmail } from "../../inbox/inboxSlice";
import { InboxEmailProps } from "../InboxEmailProps";
import { EmailSkeleton } from "../SharedComponents/EmailSkeleton";


export function IntroEmail(props: InboxEmailProps) {

    const ThisType: InboxEmailKind = InboxEmailKind.IntroEmail;

    let dispatch = useAppDispatch();
    let hasAcceptedInit = useAppSelector(state => state.player.hasAcceptedInitEmail);

    
    if (props.activeEmail === null || props.activeEmail.kind !== ThisType) return <></>

    

    function sendInitialTargetBrief(){

        if(hasAcceptedInit) return;
        dispatch(
            acceptInitEmail()
        )

        dispatch(
            pushEmail(
                {
                    blurb: "Your daily target brief",
                    kind: InboxEmailKind.TargetBrief,
                    senderName: "The Bossman",
                    subject: "Daily Brief",
                    data: {
                        targets: [
                            GetRandomUser(),
                            GetRandomUser(),
                            GetRandomUser(),
                            GetRandomUser(),
                            GetRandomUser(),
                        ]
                    }
                }
            )
        )
    }


    return (
        <EmailSkeleton email={props.activeEmail}>
            <p>Here's your last chance.</p>

            <p> You have consistently been in our bottom 10% of scammers.
                If you can't sharpen your phishing skills, it's over for you.
            </p>

            <p>
                You have a week to get 500mb of data.
                What kind of data? We don't even care. 
                Just prove that you can do something.
            </p>

            <button onClick={sendInitialTargetBrief}>
                Gotcha, Boss
            </button>
        </EmailSkeleton>
    )


}