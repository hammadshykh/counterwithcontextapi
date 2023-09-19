import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProviders = ({ children }) => {

  const [themeState,setThemeState] = useState({
    isLightTheme: true,
    dark:{syntax:"#ddd",ui:"#333",bg:"#555"},
    light:{syntax:"#555",ui:"#ddd",bg:"#eee"}
  })
  
  const themeToggle = ()=> {
    console.log("change")
    setThemeState((prevState) => {
      return {
        ...prevState,
        isLightTheme:!themeState.isLightTheme
      }
    })

    
    console.log(themeState)
  }

  return <ThemeContext.Provider value={{...themeState,themeToggle:themeToggle}}>{children}</ThemeContext.Provider>;
};
export default ThemeContextProviders