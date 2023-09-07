import { createSlice } from '@reduxjs/toolkit';
import { QUESTION_OPTION } from '../../constant/Const';
import shortid from 'shortid';

interface Option {
  id: number;
  option: string;
}

export interface intialStateType {
  id: string;
  type: number;
  questionContent: string;
  isEssential: boolean;
  options: Option[];
}

const initialState: intialStateType[] = [
  {
    id: shortid(),
    type: QUESTION_OPTION.ONE_SELECT,
    questionContent: '제목없는 질문',
    isEssential: false,
    options: [
      {
        id: 1,
        option: '옵션 1',
      },
    ],
  },
];

// const addNewQuestion = (newQuestionId: string) => ({
//   id: newQuestionId,
//   type: QUESTION_OPTION.DROPDOWN,
//   questionContent: '',
//   isEssential: false,
//   options: [
//     {
//       id: 1,
//       optionContent: '',
//     },
//     {
//       id: 2,
//       optionContent: '',
//     },
//   ],
// });

const addNewOption = (newId: number) => ({
  id: newId,
  option: `옵션 ${newId}`,
});

const { actions: questionActions, reducer: questionReducer } = createSlice({
  name: 'question',
  initialState,
  reducers: {
    changeType: (state, action) => {
      const { id, type } = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.type = type);
    },
    setEssential: (state, action) => {
      const { id } = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.isEssential = !question.isEssential);
    },
    setQuestionContent: (state, action) => {
      const { id, questionContent } = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.questionContent = questionContent);
    },
    addQuestion: (state, action) => {
      const newQuestion = action.payload;
      state.push(newQuestion);
    },
    deleteQuestion: (state, action) => {
      const id = action.payload;
      state.filter((item) => item.id !== id);
    },
    addOption: (state, action) => {
      const { id, optionId } = action.payload;
      const questionId = state.findIndex((item) => item.id === String(id));
      state[questionId].options.push(addNewOption(optionId));
    },
    setOptionContent: (state, action) => {
      const { id, optionId, optionContent } = action.payload;
      const questionId = state.findIndex((item) => item.id === String(id));
      const optionIdx = state[questionId].options.findIndex((item) => item.id === Number(optionId));
      state[questionId].options[optionIdx].option = optionContent;
    },
  },
});

export { questionActions };
export default questionReducer;
