import previewIcon from '../../assets/icons/eye.svg';
import AddIcon from '../../assets/icons/add.svg';
import * as S from './SidebarStyle';
import { InfoPropsType } from '../TitleCard/TitleCard';
import { useAppDispatch } from '../../redux/rtk-hooks/useAppDispatch';
import { formActions } from '../../redux/slice/formSlice';
import { Link } from 'react-router-dom';
import { questionActions } from '../../redux/slice/questionSlice';
import shortid from 'shortid';

interface SidebarPropsType {
  info: InfoPropsType;
}

const Sidebar = ({ info }: SidebarPropsType) => {
  const dispatch = useAppDispatch();

  const handleOpenPreview = () => {
    dispatch(formActions.addForm(info));
  };

  const handleAddNewQuestion = () => {
    const newQuestionId = shortid();
    dispatch(questionActions.addQuestion(newQuestionId));
  };

  return (
    <S.Wrapper>
      <div className="images">
        <Link to="/preview" target="_blank">
          <img src={previewIcon} alt="미리보기 아이콘" onClick={handleOpenPreview} />
        </Link>
        <img src={AddIcon} alt="질문추가 아이콘" onClick={handleAddNewQuestion} />
      </div>
    </S.Wrapper>
  );
};

export default Sidebar;
