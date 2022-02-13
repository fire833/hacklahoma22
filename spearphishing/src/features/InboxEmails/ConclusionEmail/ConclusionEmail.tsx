import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { GetRandomUser } from "../../../containers/targets/targets";
import { acceptInitEmail } from "../../../player/playerSlice";
import { sendPhishingEmail } from "../../../player/submitEmail";
import { InboxEmailKind } from "../../inbox/ActiveEmail";
import { IncomingEmail, pushEmail } from "../../inbox/inboxSlice";
import { InboxEmailProps } from "../InboxEmailProps";
import { EmailSkeleton } from "../SharedComponents/EmailSkeleton";

type ConclusionEmailProps = {
    children?: any,
    activeEmail: IncomingEmail | null
}

export function ConclusionEmail(props: ConclusionEmailProps) {

    const ThisType: InboxEmailKind = InboxEmailKind.ConclusionEmail;

    let dispatch = useAppDispatch();

    let player = useAppSelector(state => state.player);

    if (props.activeEmail === null || props.activeEmail.kind !== ThisType) return <></>


    return (
        <EmailSkeleton email={props.activeEmail}>
            <p>Your week is up. You had 7 days to collect us 500mb of data.</p>

            {(player.data >= 500) && <div className="successMessage">
                <h4>Congratulations!</h4>
                <p>You've proven basic competence. With tepid optimisim, we will allow you to keep your position.</p>

                <p>We cautiously look forward to your future as a scammer.</p>

                <p><i>-The Bossman</i></p>
            </div>}

            {(player.data < 500) && <div className="failureMessage">
                <h4>You Failed.</h4>
                <p>You are fired immediately.</p>

                <p><i>-The Bossman</i></p>
            </div>}
        </EmailSkeleton>
    )


}