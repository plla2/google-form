import { SelectQuestionPropsType } from './Type';
import useInput from '../../../hooks/useInput';
import { Checkbox, Radio } from '@mui/material';
import * as S from './SelectQuestionStyle';

const SelectQuestion = ({ type }: SelectQuestionPropsType) => {
  const selectOption = useInput('옵션 1');

  const handleSelectOption = () => {
    switch (type) {
      case 'radio':
        return <Radio className="option" disabled />;
      case 'check':
        return <Checkbox className="option" disabled />;
      case 'dropdown':
        return <div className="option-dropdown">1</div>;
      default:
        return;
    }
  };
  return (
    <S.Wrapper>
      {handleSelectOption()}
      <input type="text" value={selectOption.value} onChange={selectOption.onChange} />
    </S.Wrapper>
  );
};

export default SelectQuestion;
