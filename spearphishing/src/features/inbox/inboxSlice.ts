import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InboxEmailKind } from "./ActiveEmail";


export type IncomingEmail = {
    senderName: string,
    subject: string,
    blurb: string,
    kind: InboxEmailKind,
    data: any
}


export interface InboxState {
    emails: IncomingEmail[]
}

const initialState: InboxState = {
    emails: [
        {
            blurb: "An inbox email blurb",
            kind: InboxEmailKind.BossEmail,
            senderName: "Bossman",
            subject: "Some subject line",
            data: {a: 1}
        }
    ]
}

export const inboxSlice = createSlice({
    name: 'inbox',
    initialState: initialState,
    reducers: {
        pushEmail: (currState, action: PayloadAction<IncomingEmail>) => {
            currState.emails.push(action.payload);
        }
    }
})


export const {pushEmail} = inboxSlice.actions;
export default inboxSlice.reducer;