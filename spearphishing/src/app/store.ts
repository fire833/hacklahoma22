import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { InboxEmailKind } from '../features/inbox/ActiveEmail';
import inboxReducer, { pushEmail } from '../features/inbox/inboxSlice';
import playerReducer, { advanceDay, clearDailyEmails } from '../player/playerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    inbox: inboxReducer,
    player: playerReducer
  },
});


store.subscribe(() => {
  localStorage.setItem("redux_root", JSON.stringify(store.getState()))

  if(store.getState().player.emails_sent_today >= 3){
    store.dispatch(
      clearDailyEmails()
    )

    store.dispatch(
      advanceDay()
    )

    store.dispatch(
      pushEmail(
        {
          blurb: "Discover new techniques and modifiers",
          data: {},
          kind: InboxEmailKind.Market,
          senderName: "Merchant Man",
          subject: "The Night Market"
        }
      )
    )
  }

})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
