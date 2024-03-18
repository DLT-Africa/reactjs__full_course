import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Zainabuuuuu", "Hoyee", "Eef"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <div>
      <h1>{handleNameChange()}</h1>
    </div>
  );
};

export default Content;
