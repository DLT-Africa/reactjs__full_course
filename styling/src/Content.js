import React from "react";
import './content.css'

const Content = () => {
  const handleNameChange = () => {
    const names = ["Zainabuuuuu", "Hoyee", "Eef"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log("You clicked")
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }

  const me = () => {
      
  }

 

  return (
    <main className="student">
      <h1>{handleNameChange()}</h1>
      <button onClick={handleClick}>Click me</button>
      <button onDoubleClick={() =>  handleClick2('hayzed')}>Click me</button>
    </main>
  );
};

export default Content;
