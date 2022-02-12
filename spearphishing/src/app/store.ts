import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import inboxReducer from '../features/inbox/inboxSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    inbox: inboxReducer,
  },
});


store.subscribe( () => {
  
  localStorage.setItem("redux_root", JSON.stringify(store.getState()))
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
