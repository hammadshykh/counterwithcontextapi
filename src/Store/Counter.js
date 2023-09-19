import { createContext, useEffect, useState } from "react";

export const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increamentHandler = () => {
    setCounter(counter + 1);
  };

  const decreamentHandler = () => {
    setCounter(counter - 1);
  };

  const reset =()=>{
    setCounter(counter = 0)
  }

  return (
    <CounterContext.Provider
      value={{counter:counter, increament: increamentHandler, decreament: decreamentHandler,reset:reset }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
