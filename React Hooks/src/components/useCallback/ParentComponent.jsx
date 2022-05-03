import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  // Without use Callback hook it reRender the component there this function is passed as prop
  const incrementAge = useCallback(() => setAge(age + 1),[age]);
  const incrementSalary = useCallback(() => setSalary(salary + 1000), [salary]);

  return (
    <>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>
  );
};

export default ParentComponent;
