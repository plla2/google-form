import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../slice/questionSlice';
import formReducer from '../slice/formSlice';

export const store = configureStore({
  reducer: {
    questions: questionReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
