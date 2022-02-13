import { createSlice, PayloadAction } from "@reduxjs/toolkit";





interface PlayerState {
    hasAcceptedInitEmail: boolean
}


let initialState: PlayerState = {
    hasAcceptedInitEmail: false
}


export const playerSlice = createSlice({
    name: 'player',
    initialState: initialState,
    reducers: {
        acceptInitEmail(currState){
            currState.hasAcceptedInitEmail = true;
        }
    }
})

export const { acceptInitEmail } = playerSlice.actions;
export default playerSlice.reducer;