"use client";
const { useState } = require("react");
import custom from "./custom.module.css";

const CSS = () => {
  const [changeColor, setChangeColor] = useState({ color: "green" });
  return (
    <div>
      <h1>CSS in Next.js</h1>
      <h2 style={changeColor}>I can change anytime</h2>
      <button onClick={() => setChangeColor({ color: "blue" })}>
        Click here
      </button>

      {/* 
      Modular CSS is used when there are elements with same classname and we dont want any styles to get overrided
      So we use seperate css and import them , this is Modular CSS */}

      {/* If the css file is made outside the working folder, then use import
      filename from "@/foldername/css filename" */}
      <h1 className={custom.main}>Playing with Modular CSS</h1>
    </div>
  );
};

export default CSS;
