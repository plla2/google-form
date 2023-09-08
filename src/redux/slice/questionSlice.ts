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
  checkAnswers: Array<number>;
  textAnswers: string;
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
    textAnswers: '',
    checkAnswers: [],
  },
];

const addNewQuestion = (newQuestionId: string) => ({
  id: newQuestionId,
  type: QUESTION_OPTION.ONE_SELECT,
  questionContent: '',
  isEssential: false,
  options: [
    {
      id: 1,
      option: '옵션 1',
    },
  ],
  textAnswers: '',
  checkAnswers: [],
});

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
      question && (question.checkAnswers = []);
    },
    setEssential: (state, action) => {
      const id = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.isEssential = !question.isEssential);
    },
    setQuestionContent: (state, action) => {
      const { id, questionContent } = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.questionContent = questionContent);
    },
    addQuestion: (state, action) => {
      const newQuestionId = action.payload;
      state.push(addNewQuestion(newQuestionId));
    },
    deleteQuestion: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
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
    chooseRadioAnswer: (state, action) => {
      const { id, optionId, isAnswer } = action.payload;
      const question = state.find((item) => item.id === id);
      if (!question) return;
      question.checkAnswers.length > 0 && question.checkAnswers.splice(-1, 1);
      if (!isAnswer) {
        question.checkAnswers.push(optionId);
      }
    },
    chooseCheckAnswer: (state, action) => {
      const { id, optionId, isAnswer } = action.payload;
      const question = state.find((item) => item.id === id);
      if (!question) return;
      const answerIdx = question.checkAnswers.findIndex((item) => item === optionId);
      if (!isAnswer) {
        question.checkAnswers.push(optionId);
      } else {
        if (answerIdx === 0) question.checkAnswers.shift();
        else question.checkAnswers.splice(answerIdx, 1);
      }
    },
  },
});

export { questionActions };
export default questionReducer;
