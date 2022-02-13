import { InboxEmailKind } from "../../inbox/ActiveEmail";
import { InboxEmailProps } from "../InboxEmailProps";
import { EmailSkeleton } from "../SharedComponents/EmailSkeleton";


export function IntroEmail(props: InboxEmailProps) {

    const ThisType: InboxEmailKind = InboxEmailKind.IntroEmail;

    if (props.activeEmail === null || props.activeEmail.kind !== ThisType) return <></>


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

            <button>
                Gotcha, Boss
            </button>
        </EmailSkeleton>
    )


}