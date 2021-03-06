type GreetProps = {
  name: string;
  msgCount?: number;
  isLoggedIn: boolean;
};

const Greet = ({ name, msgCount = 0, isLoggedIn }: GreetProps) => {
  return (
    <div>
      {isLoggedIn
        ? `Welcome ${name}! You have ${msgCount} unread messages`
        : "Welcome Guest"}
    </div>
  );
};

export default Greet;
