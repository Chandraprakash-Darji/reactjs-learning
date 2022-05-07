type ListProps<T> = {
  items: T[];
  onClick: (value:T) => void;
};
const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item, index) => (
        <div key={`${item}${index}`} onClick={() => onClick(item)}>
          {index}
        </div>
      ))}
    </div>
  );
};

export default List;
