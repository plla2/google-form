import { QUESTION_OPTION } from '../../../constant/Const';
import { useAppSelector } from '../../../redux/rtk-hooks/useAppSelector';
import Dropdown from '../../Dropdown/Dropdown';
import SelectQuestion from '../../QuestionOptions/SelectQuestion/SelectQuestion';
import TextQuestion from '../../QuestionOptions/TextQuestion/TextQuestion';
import * as S from './PreviewWrapperStyle';
import { PreviewWrapperPropsType } from './PreviewWrapperType';

const PreviewWrapper = ({ questionId }: PreviewWrapperPropsType) => {
  const { questions } = useAppSelector((state) => state.form);

  const pickedQuestion = questions.find((question) => question.id === questionId);
  if (!pickedQuestion) return null;
  const { type: questionType, options, questionContent, isEssential } = pickedQuestion;
  const isAnswer = (value: number) => pickedQuestion.checkAnswers.findIndex((answer) => answer === value) >= 0;

  const getOptionList = (type: number) => {
    const optionList = options?.map((option) => (
      <SelectQuestion
        isAnswer={isAnswer(option.id)}
        key={option.id}
        questionId={questionId}
        optionId={option.id}
        type={type}
        optionContent={option.option}
        isLast={false}
      />
    ));

    return optionList;
  };

  const selectOption = () => {
    switch (questionType) {
      case QUESTION_OPTION.ONE_SELECT:
      case QUESTION_OPTION.MULTIPLE_SELECT:
        return getOptionList(questionType);
      case QUESTION_OPTION.DROPDOWN:
        return <Dropdown questionId={questionId} menus={options} />;
      case QUESTION_OPTION.SHORT_ANSWER:
        return <TextQuestion type="short" questionId={questionId} />;
      case QUESTION_OPTION.LONG_ANSWER:
        return <TextQuestion type="long" questionId={questionId} />;
      default:
        return;
    }
  };

  return (
    <S.Container $isEssential={true}>
      <span className="questionTitle">{questionContent}</span>
      {isEssential && <span className="questionTitle__essential">*</span>}
      {selectOption()}
    </S.Container>
  );
};

export default PreviewWrapper;
