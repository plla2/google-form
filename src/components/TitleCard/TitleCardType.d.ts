export interface InfoPropsType {
  title: string;
  desc: string;
}

export interface TitleCardPropsType {
  info: InfoPropsType;
  handleChange?: (name: string, value: string) => void;
}
