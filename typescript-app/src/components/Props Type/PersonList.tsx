import { Name } from "./PersonProps.types";
type PersonListProps = {
  nameList: Name[];
};

const PersonList = ({ nameList }: PersonListProps) => {
  return (
    <div>
      {nameList.map((name, i) => (
        <h2 key={`${name.first}${i}`}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
