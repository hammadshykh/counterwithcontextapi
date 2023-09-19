import React, { useContext, useState } from "react";
import { ThemeContext } from "../Store/Context";

const ThemeToggle = () => {
  const { themeToggle } = useContext(ThemeContext);
  const [bgcolor, setbgColor] = useState("green");
  return (
    <>
      <button
        onMouseEnter={() => setbgColor("blue")}
        onMouseLeave={() => setbgColor("green")}
        style={{
          position:"absolute",
          top:"65%",
          cursor:"pointer",
          left:"45%",
          border: "none",
          backgroundColor: bgcolor,
          color: "white",
          padding: "10px",
        }}
        type="button"
        onClick={themeToggle}
      >
        Toggle Theme
      </button>
    </>
  );
};

export default ThemeToggle;
