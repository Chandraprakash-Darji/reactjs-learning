import { PersonProps } from "./PersonProps.types";

const Person = ({ personName }: PersonProps) => {
  return (
    <div>
      {personName.first} {personName.last}
    </div>
  );
};

export default Person;
