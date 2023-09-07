import { createSlice } from '@reduxjs/toolkit';
import { QUESTION_OPTION } from '../../constant/Const';

interface intialStateType {
  id: number;
  type: number;
}

const initialState: intialStateType[] = [
  {
    id: 0,
    type: QUESTION_OPTION.ONE_SELECT,
  },
];

const { actions: questionActions, reducer: questionReducer } = createSlice({
  name: 'question',
  initialState,
  reducers: {
    changeType: (state, action) => {
      const { id, type } = action.payload;
      state[id].type = type;
    },
  },
});

export { questionActions };
export default questionReducer;
