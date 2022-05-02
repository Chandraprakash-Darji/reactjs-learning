import React from "react";

const NameList = () => {
  const persons = [
    {
      id: 0,
      name: "Bruce",
      age: 32,
      skill: "React",
    },
    {
      id: 1,
      name: "Clark",
      age: 32,
      skill: "Angular",
    },
    {
      id: 2,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];
  const personsList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <>{personsList}</>;
};

export default NameList;

function Person({ person }) {
  const { name, age, skill } = person;
  return (
    <h2>
      I am {name}. My age is {age}. I Know {skill}
    </h2>
  );
}
