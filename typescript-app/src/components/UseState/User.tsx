import { useEffect, useState } from "react";

type Authuser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<Authuser>({} as Authuser);
  const handleLogin = () => {
    setUser({
      name: "MoonLight",
      email: "moonlight@aa.com",
    });
  };
  useEffect(() => handleLogin(), []);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <h2>
        {user ? (
          <>
            User Name is {user.name} <br />
            User email is {user.email}
          </>
        ) : (
          "Guest"
        )}
      </h2>
    </div>
  );
};

export default User;
