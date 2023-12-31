import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { questionReducer } from '.';

interface initialStateType {
  title: string;
  desc: string;
}

const initialState: initialStateType = {
  title: '구글 설문폼 - 클라썸 과제 1',
  desc: '',
};

const { actions: formActions, reducer: formReducer } = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm: (state, action) => {
      const { title, desc } = action.payload;
      state.title = title;
      state.desc = desc;
    },
  },
});

export { formActions };

export default combineReducers({
  form: formReducer,
  questions: questionReducer,
});
