type GreetProps = {
  name: string;
};

const Greet = ({ name }: GreetProps) => {
  return <div>Welcome {name}! You have 10 unread messages</div>;
};

export default Greet;
