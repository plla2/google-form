import previewIcon from '../../assets/icons/eye.svg';
import AddIcon from '../../assets/icons/add.svg';
import * as S from './SidebarStyle';

const Sidebar = () => {
  return (
    <S.Wrapper>
      <div className="images">
        <img src={previewIcon} alt="미리보기 아이콘" />
        <img src={AddIcon} alt="질문추가 아이콘" />
      </div>
    </S.Wrapper>
  );
};

export default Sidebar;
