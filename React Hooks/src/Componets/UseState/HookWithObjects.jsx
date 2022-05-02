import React, { useState } from "react";

const HookCounterTwo = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <fieldset>
        <input
          type="text"
          placeholder="First name"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
      </fieldset>
      <fieldset>
        <input
          type="text"
          placeholder="Last name"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </fieldset>
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
};

export default HookCounterTwo;
