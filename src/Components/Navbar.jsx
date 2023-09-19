import React from "react";

import { useContext } from "react";
import { ThemeContext } from "../Store/Context";

const Navbar = () => {
  const res = useContext(ThemeContext);
  const { dark, isLightTheme, light } = res;
  console.log(dark);
  const theme = isLightTheme ? light : dark;
  return (
    theme && (
      <>
        <div style={{ textAlign: "center" }}>
          <nav style={{ background: theme.ui, color: theme.syntax,padding:"20px" }}>
            <h1>Context App</h1>
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px 0",
              }}
            >
              <li>Home</li>
              <li style={{ margin: "0 10px" }}>About</li>
              <li>Context</li>
            </ul>
          </nav>
        </div>
      </>
    )
  );
};

export default Navbar;
