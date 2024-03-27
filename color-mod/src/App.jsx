import { useState } from "react";

import "./App.css";
import Square from "./Square";
import Input from "./Input";

function App() {

  const [colorValue, setColorValue] = useState(""); 
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <>
      <div className="rainbow">
        <Square 
          colorValue={colorValue}
          hexValue={hexValue}
          isDarkText={isDarkText}
        />
        <Input 
          colorValue={colorValue}
          setColorValue={setColorValue}
          setHexValue={setHexValue}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}
        />
      </div>
    </>
  );
}

export default App;
