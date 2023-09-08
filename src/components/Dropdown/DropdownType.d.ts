export interface MenusPropsType {
  id: number;
  option: string;
  icon?: string;
}

export interface DropdownPropsType {
  questionId: string;
  menus: MenusPropsType[];
  isAnswer?: boolean;
}
