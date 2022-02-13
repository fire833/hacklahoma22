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
    emails: IncomingEmail[],
    activeEmailIndex: number | null
}

const initialState: InboxState = {
    emails: [
        {
            blurb: "You're our lowest performer...",
            kind: InboxEmailKind.IntroEmail,
            senderName: "The Bossman",
            subject: "Your last chance",
            data: {}
        },
        {
            blurb: "Your daily target brief",
            kind: InboxEmailKind.TargetBrief,
            senderName: "The Bossman",
            subject: "Target Brief",
            data: {}
        }
    ],

    activeEmailIndex: null
}

export const inboxSlice = createSlice({
    name: 'inbox',
    initialState: initialState,
    reducers: {
        pushEmail: (currState, action: PayloadAction<IncomingEmail>) => {
            currState.emails.unshift(action.payload);
        },
        selectEmail: (currState, action: PayloadAction<number>) => {
            currState.activeEmailIndex = action.payload
        }
    }
})

export const { pushEmail, selectEmail } = inboxSlice.actions;
export default inboxSlice.reducer;