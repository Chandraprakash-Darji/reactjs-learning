type InputProps = {
  value: string;
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleClick }: InputProps) => {
  return <input type="text" value={value} onChange={handleClick} />;
};

export default Input;
