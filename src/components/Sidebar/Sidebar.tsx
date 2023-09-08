import previewIcon from '../../assets/icons/eye.svg';
import AddIcon from '../../assets/icons/add.svg';
import * as S from './SidebarStyle';
import { useAppDispatch } from '../../redux/rtk-hooks/useAppDispatch';
import { formActions } from '../../redux/slice/formSlice';
import { Link } from 'react-router-dom';
import { questionActions } from '../../redux/slice/questionSlice';
import shortid from 'shortid';
import { QUESTION_OPTION } from '../../constant/Const';
import { SidebarPropsType } from './SidebarType';

const newQuestion = (newId: string) => ({
  id: newId,
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

const Sidebar = ({ info }: SidebarPropsType) => {
  const dispatch = useAppDispatch();

  const handleOpenPreview = () => {
    dispatch(formActions.addForm(info));
  };

  const handleAddNewQuestion = () => {
    const newId = shortid();
    dispatch(questionActions.addQuestion(newQuestion(newId)));
  };

  return (
    <S.Wrapper>
      <div className="images">
        <Link to="/preview">
          <img src={previewIcon} alt="미리보기 아이콘" onClick={handleOpenPreview} />
        </Link>
        <img src={AddIcon} alt="질문추가 아이콘" onClick={handleAddNewQuestion} />
      </div>
    </S.Wrapper>
  );
};

export default Sidebar;
