import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../slice/questionSlice';

export const store = configureStore({
  reducer: { questionReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
