import { createSlice, PayloadAction } from "@reduxjs/toolkit";





interface PlayerState {
    dummy: number
}


let initialState: PlayerState = {
    dummy: 0
}


export const playerSlice = createSlice({
    name: 'player',
    initialState: initialState,
    reducers: {
        nothingReducer(currState, action: PayloadAction<number>){
            currState.dummy += action.payload;
        }
    }
})

export const { nothingReducer } = playerSlice.actions;
export default playerSlice.reducer;