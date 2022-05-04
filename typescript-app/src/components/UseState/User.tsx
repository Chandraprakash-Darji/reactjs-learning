import { useState } from "react";

type Authuser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<Authuser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "MoonLight",
      email: "moonlight@aa.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
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
