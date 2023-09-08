import { useAppSelector } from '../../../redux/rtk-hooks/useAppSelector';
import { useAppDispatch } from '../../../redux/rtk-hooks/useAppDispatch';
import { questionActions } from '../../../redux/slice/questionSlice';
import { QUESTION_OPTION, menus } from '../../../constant/Const';
import SelectQuestion from '../../QuestionOptions/SelectQuestion/SelectQuestion';
import TextQuestion from '../../QuestionOptions/TextQuestion/TextQuestion';
import Card from '../../Card/Card';
import * as S from './QuestionWrapperStyle';
import Dropdown from '../../Dropdown/Dropdown';
import copyIcon from '../../../assets/icons/copy.svg';
import deleteIcon from '../../../assets/icons/trash.svg';
import dragIcon from '../../../assets/icons/drag.svg';
import { Switch } from '@mui/material';
import shortid from 'shortid';
import { DraggableProvided } from 'react-beautiful-dnd';

interface QuestionCardPropsType {
  questionId: string;
  provided: DraggableProvided;
}

const QuestionWrapper = ({ questionId, provided }: QuestionCardPropsType) => {
  const dispatch = useAppDispatch();
  const { questions } = useAppSelector((state) => state.form);
  const pickedQuestion = questions.find((item) => item.id === questionId);
  if (!pickedQuestion) return null;
  const { type: questionType, options, questionContent, isEssential } = pickedQuestion;
  const lastOptionIndex = options.length + 1;

  const newCopyQuestion = (newId: string) => {
    return {
      ...pickedQuestion,
      id: newId,
    };
  };

  const handleSwitch = () => {
    dispatch(questionActions.setEssential(questionId));
  };

  const handleQuestionContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(questionActions.setQuestionContent({ id: questionId, questionContent: e.target.value }));
  };

  const handleDeleteQuestion = () => {
    dispatch(questionActions.deleteQuestion(questionId));
  };

  const handleCopyQuestion = () => {
    const newId = shortid();
    dispatch(questionActions.addQuestion(newCopyQuestion(newId)));
  };

  const getOptionList = (type: number) => {
    const optionList = options
      ?.map((option) => (
        <SelectQuestion
          key={option.id}
          questionId={questionId}
          optionContent={option.option}
          optionId={option.id}
          type={type}
          isLast={false}
        />
      ))
      .concat(
        <SelectQuestion
          key={lastOptionIndex}
          questionId={questionId}
          optionId={lastOptionIndex}
          optionContent="옵션 추가"
          type={type}
          isLast={true}
        />,
      );
    return optionList;
  };

  const selectOption = () => {
    switch (questionType) {
      case QUESTION_OPTION.ONE_SELECT:
      case QUESTION_OPTION.MULTIPLE_SELECT:
      case QUESTION_OPTION.DROPDOWN:
        return getOptionList(questionType);
      case QUESTION_OPTION.SHORT_ANSWER:
        return <TextQuestion type="short" questionId={questionId} />;
      case QUESTION_OPTION.LONG_ANSWER:
        return <TextQuestion type="long" questionId={questionId} />;
      default:
        return;
    }
  };

  return (
    <Card isTitle={false}>
      <S.Container>
        <div className="dragHandler" {...provided.dragHandleProps}>
          <img src={dragIcon} alt="드래그 아이콘" />
        </div>
        <div className="question">
          <input
            type="text"
            className="question-input"
            placeholder="제목없는 질문"
            value={questionContent}
            onChange={handleQuestionContentChange}
          />
          <Dropdown questionId={questionId} menus={menus} />
        </div>
        {selectOption()}
        <hr />
        <div className="settings">
          <img src={copyIcon} alt="복사 아이콘" onClick={handleCopyQuestion} />
          <img src={deleteIcon} alt="삭제 아이콘" onClick={handleDeleteQuestion} />
          <div className="switch-name">필수</div>
          <Switch className="essentialSwitch" checked={isEssential} onChange={handleSwitch} />
        </div>
      </S.Container>
    </Card>
  );
};

export default QuestionWrapper;
