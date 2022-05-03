import React from "react";
import useInput from "./hooks/useInput";

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submithandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={submithandler}>
        <fieldset>
          <label>First name</label>
          <input {...bindFirstName} type="text" />
        </fieldset>
        <fieldset>
          <label>last name</label>
          <input {...bindLastName} type="text" />
        </fieldset>
        <fieldset>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default UserForm;
