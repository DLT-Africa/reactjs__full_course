import { useState } from "react";
import {FaRegTrashCan} from 'react-icons/fa6'
import "./content.css";

const Content = () => {
  // const [name, setName] = useState('Basirah')
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "A bag of Garri",
    },
    {
      id: 2,
      checked: false,
      item: "Rice",
    },
    {
      id: 3,
      checked: false,
      item: "Semo",
    },
    {
      id: 4,
      checked: false,
      item: "ponmo",
    },
  ]);

  // // const name = 'basirah'

  // const handleNameChange = () => {
  //   const names = ["Zainabuuuuu", "Hoyee", "Eef"];
  //   const int = Math.floor(Math.random() * 3);
  //   setName(names[int])
  // };

  // const handleClick2 = (name) => {
  //   console.log(`${name} was clicked`)
  // }

  return (
    <main className="student">
      {/* <h1>{name}</h1>
      <button onClick={handleNameChange}>Change Name</button>
      <button onDoubleClick={() =>  handleClick2('hayzed')}>Click me</button> */}

      <ul>
        {items.map((item) => {
          return (
            <li className="item" key={item.id}>
              <input type="checkbox" checked={item.checked} />

              <label>{item.item}</label>
              <FaRegTrashCan/>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Content;
