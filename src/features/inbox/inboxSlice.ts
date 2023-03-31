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
    ],

    activeEmailIndex: null
}

export const inboxSlice = createSlice({
    name: 'inbox',
    initialState: initialState,
    reducers: {
        pushEmail: (currState, action: PayloadAction<IncomingEmail>) => {
            currState.emails.push(action.payload);
        },
        removeEmail: (currState, action: PayloadAction<number>) => { 
            currState.emails.splice(action.payload, 1)
            if(action.payload == currState.activeEmailIndex){
                currState.activeEmailIndex = null;
            }
        },
        removeActiveEmail: (currState => {
            if(currState.activeEmailIndex != null){
                currState.emails.splice(currState.activeEmailIndex, 1);
                currState.activeEmailIndex = null;
            }

        }),
        selectEmail: (currState, action: PayloadAction<number>) => {
            currState.activeEmailIndex = action.payload
        }
    }
})

export const { pushEmail, selectEmail, removeActiveEmail, removeEmail } = inboxSlice.actions;
export default inboxSlice.reducer;