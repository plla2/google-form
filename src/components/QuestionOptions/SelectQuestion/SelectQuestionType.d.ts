export interface SelectQuestionPropsType {
  type: number;
  questionId: string;
  optionId: number;
  optionContent: string;
  isLast: boolean;
  isAnswer?: boolean;
}
