import { createSlice } from '@reduxjs/toolkit';
import { QUESTION_OPTION } from '../../constant/Const';

interface Option {
  id: number;
  optionContent: string;
}

export interface intialStateType {
  id: number;
  type: number;
  questionContent: string;
  isEssential: boolean;
  options: Option[];
}

const initialState: intialStateType[] = [
  {
    id: 0,
    type: QUESTION_OPTION.ONE_SELECT,
    questionContent: '',
    isEssential: false,
    options: [
      {
        id: 1,
        optionContent: '',
      },
      {
        id: 2,
        optionContent: '',
      },
    ],
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
    setEssential: (state, action) => {
      const { id, isEssential } = action.payload;
      state[id].isEssential = isEssential;
    },
    setQuestionContent: (state, action) => {
      const { id, questionContent } = action.payload;
      state[id].questionContent = questionContent;
    },
  },
});

export { questionActions };
export default questionReducer;
