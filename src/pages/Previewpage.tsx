import { S_Container } from './Formpage';
import { useAppSelector } from '../redux/rtk-hooks/useAppSelector';
import PreviewWrapper from '../components/Wrapper/PreviewWrapper/PreviewWrapper';
import TitleCard from '../components/TitleCard/TitleCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/rtk-hooks/useAppDispatch';
import { questionActions } from '../redux/slice';

const Previewpage = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.form);
  const { questions } = form;

  const handleReset = () => {
    dispatch(questionActions.resetAnswers());
  };

  return (
    <S_Container>
      <TitleCard info={form.form} />
      {questions.map((question) => (
        <PreviewWrapper key={question.id} questionId={question.id} />
      ))}
      <S_Button>
        <Link to={'/result'}>
          <div className="submit__button">제출</div>
        </Link>
        <div className="reset__button" onClick={handleReset}>
          양식 지우기
        </div>
      </S_Button>
    </S_Container>
  );
};

const S_Button = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 25px;
  width: 700px;
  .submit__button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    width: 100px;
    background-color: ${({ theme }) => theme.color.purple_dark};
    border-radius: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
    &:hover {
      background-color: rebeccapurple;
    }
  }
  .reset__button {
    text-align: center;
    font-size: 15px;
    margin-top: 10px;
    padding-bottom: 10px;
    width: 85px;
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.color.grey__dark};
    &:hover {
      transition: 0.4s ease;
      border-bottom: 1px solid red;
      color: red;
    }
  }
`;

export default Previewpage;
