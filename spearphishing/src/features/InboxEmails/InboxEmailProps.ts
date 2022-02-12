import { IncomingEmail } from "../inbox/inboxSlice";

export type InboxEmailProps = {
    activeEmail: IncomingEmail | null,
    children?: string
}