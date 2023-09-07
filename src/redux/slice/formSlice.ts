import { combineReducers, createSlice } from '@reduxjs/toolkit';
import questionReducer from './questionSlice';

interface initialStateType {
  title: string;
  desc: string;
}

const initialState: initialStateType = {
  title: '',
  desc: '',
};

const { actions: formActions, reducer: formReducer } = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm: (state, action) => {
      const { formTitle, formDesc } = action.payload;
      state.title = formTitle;
      state.desc = formDesc;
    },
  },
});
export { formActions };

export default combineReducers({
  form: formReducer,
  questions: questionReducer,
});
