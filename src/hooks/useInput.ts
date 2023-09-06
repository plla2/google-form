import { useState } from 'react';

interface inputType {
  value: string;
  onChange: ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const useInput = (initialValue: string): inputType => {
  const [value, setValue] = useState(initialValue);

  const onChange = ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => {
    const { value } = target;
    setValue(value);
  };
  return { value, onChange, setValue };
};
export default useInput;
