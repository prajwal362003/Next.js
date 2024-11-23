"use client";
const { useState } = require("react");

const CSS = () => {
  const [changeColor, setChangeColor] = useState({ color: "green" });
  return (
    <div>
      <h1>CSS in Next.js</h1>
      <h2 style={changeColor}>I can change anytime</h2>
      <button onClick={() => setChangeColor({ color: "blue" })}>
        Click here
      </button>
    </div>
  );
};

export default CSS;
