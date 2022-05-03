type PersonProps = {
  personName: {
    first: string;
    last: string;
  };
};

const Person = ({ personName }: PersonProps) => {
  return (
    <div>
      {personName.first} {personName.last}
    </div>
  );
};

export default Person;
