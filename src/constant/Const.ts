import textIcon from '../assets/icons/text.svg';
import textareaIcon from '../assets/icons/text-long.svg';
import radioIcon from '../assets/icons/radio.svg';
import checkboxIcon from '../assets/icons/checkbox.svg';
import dropdownIcon from '../assets/icons/dropdown.svg';

export const QUESTION_OPTION = {
  SHORT_ANSWER: 0,
  LONG_ANSWER: 1,
  ONE_SELECT: 2,
  MULTIPLE_SELECT: 3,
  DROPDOWN: 4,
};

export const menus = [
  {
    id: QUESTION_OPTION.SHORT_ANSWER,
    option: '단답형',
    icon: textIcon,
  },
  {
    id: QUESTION_OPTION.LONG_ANSWER,
    option: '장문형',
    icon: textareaIcon,
  },
  {
    id: QUESTION_OPTION.ONE_SELECT,
    option: '객관식 질문',
    icon: radioIcon,
  },
  {
    id: QUESTION_OPTION.MULTIPLE_SELECT,
    option: '체크박스',
    icon: checkboxIcon,
  },
  {
    id: QUESTION_OPTION.DROPDOWN,
    option: '드롭다운',
    icon: dropdownIcon,
  },
];
