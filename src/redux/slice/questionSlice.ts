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
      const question = state.find((question) => question.id === id);
      question && (question.type = type);
      question && (question.checkAnswers = []);
    },
    setEssential: (state, action) => {
      const id = action.payload;
      const question = state.find((question) => question.id === id);
      question && (question.isEssential = !question.isEssential);
    },
    setQuestionContent: (state, action) => {
      const { id, questionContent } = action.payload;
      const question = state.find((question) => question.id === id);
      question && (question.questionContent = questionContent);
    },
    addQuestion: (state, action) => {
      const newQuestion = action.payload;
      state.push(newQuestion);
    },
    deleteQuestion: (state, action) => {
      const id = action.payload;
      return state.filter((question) => question.id !== id);
    },
    addOption: (state, action) => {
      const { id, optionId } = action.payload;
      const questionId = state.findIndex((question) => question.id === String(id));
      state[questionId].options.push(addNewOption(optionId));
    },
    setOptionContent: (state, action) => {
      const { id, optionId, optionContent } = action.payload;
      const questionId = state.findIndex((question) => question.id === String(id));
      const optionIdx = state[questionId].options.findIndex((option) => option.id === Number(optionId));
      state[questionId].options[optionIdx].option = optionContent;
    },
    chooseRadioAnswer: (state, action) => {
      const { id, optionId, isAnswer } = action.payload;
      const question = state.find((question) => question.id === id);
      if (!question) return;
      question.checkAnswers.length > 0 && question.checkAnswers.splice(-1, 1);
      if (!isAnswer) {
        question.checkAnswers.push(optionId);
      }
    },
    chooseCheckAnswer: (state, action) => {
      const { id, optionId, isAnswer } = action.payload;
      const question = state.find((question) => question.id === id);
      if (!question) return;
      const answerIdx = question.checkAnswers.findIndex((answer) => answer === optionId);
      if (!isAnswer) {
        question.checkAnswers.push(optionId);
      } else {
        if (answerIdx === 0) question.checkAnswers.shift();
        else question.checkAnswers.splice(answerIdx, 1);
      }
    },
    writeTextAnswer: (state, action) => {
      const { id, textContent } = action.payload;
      const questionId = state.findIndex((question) => question.id === String(id));
      state[questionId].textAnswers = textContent;
    },
    resetAnswers: (state) => {
      state.map((question) => {
        question.checkAnswers = [];
        question.textAnswers = '';
      });
    },
    replaceQuestion: (state, action) => {
      const { initialIdx, afterIdx } = action.payload;
      const [removed] = state.splice(initialIdx, 1);
      state.splice(afterIdx, 0, removed);
    },
  },
});

export { questionActions };
export default questionReducer;
