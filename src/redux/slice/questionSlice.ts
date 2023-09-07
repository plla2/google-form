import { createSlice } from '@reduxjs/toolkit';
import { QUESTION_OPTION } from '../../constant/Const';

const initialState = {
  id: 1,
  type: QUESTION_OPTION.ONE_SELECT,
};

const { actions: questionActions, reducer: questionReducer } = createSlice({
  name: 'question',
  initialState,
  reducers: {
    changeType: (state, action) => {
      return { ...state, type: action.payload };
    },
  },
});

export { questionActions };
export default questionReducer;
