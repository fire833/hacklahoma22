import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { InboxEmailKind } from '../features/inbox/ActiveEmail';
import inboxReducer, { pushEmail } from '../features/inbox/inboxSlice';
import playerReducer, { advanceDay, clearDailyEmails, win } from '../player/playerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    inbox: inboxReducer,
    player: playerReducer
  },
});


store.subscribe(() => {
  localStorage.setItem("redux_root", JSON.stringify(store.getState()))

  if (store.getState().player.emails_sent_today >= 3) {


    if (store.getState().player.day_num >= 6 && !store.getState().player.hasWon) {
      // end game
      store.dispatch(win());

      store.dispatch(pushEmail({
        blurb: "Your week is over!",
        subject: "End of Week Report",
        senderName: "The Bossman",
        data: {},
        kind: InboxEmailKind.ConclusionEmail
      }))
      return;
    }

    store.dispatch(
      clearDailyEmails()
    )

    store.dispatch(
      advanceDay()
    )

    if (!store.getState().player.hasWon) {
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
