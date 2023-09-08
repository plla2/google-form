import { styled } from 'styled-components';
import TitleCard from '../components/TitleCard/TitleCard';
import Sidebar from '../components/Sidebar/Sidebar';
import { useState } from 'react';
import QuestionWrapper from '../components/Wrapper/QuestionWrapper/QuestionWrapper';
import { useAppSelector } from '../redux/rtk-hooks/useAppSelector';
import { useAppDispatch } from '../redux/rtk-hooks/useAppDispatch';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { questionActions } from '../redux/slice';

export const S_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  position: relative;
  margin-bottom: 60px;
  .page-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    width: 150px;
    height: 60px;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.grey_verylight};
    background-color: ${({ theme }) => theme.color.purple_dark};
  }
`;

const Formpage = () => {
  const dispatch = useAppDispatch();
  const { form, questions } = useAppSelector((state) => state.form);
  const [info, setInfo] = useState({
    title: form.title,
    desc: '',
  });
  const handleInfo = (name: string, value: string) => {
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const getQuestionList = () => {
    return questions.map((question, idx) => (
      <Draggable key={question.id} draggableId={question.id} index={idx}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.draggableProps}>
            <QuestionWrapper key={question.id} questionId={question.id} provided={provided} />
          </div>
        )}
      </Draggable>
    ));
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    dispatch(questionActions.replaceQuestion({ initialIdx: result.source.index, afterIdx: result.destination.index }));
  };

  return (
    <S_Container>
      <div>
        <TitleCard info={info} handleChange={handleInfo} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div ref={provided.innerRef}>
                {getQuestionList()}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <Sidebar info={info} />
    </S_Container>
  );
};

export default Formpage;
