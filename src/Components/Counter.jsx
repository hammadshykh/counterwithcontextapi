import { useContext } from "react";
import { CounterContext } from "../Store/Counter";

const Counter = () => {
    const btn = {
        color:"white",
        backgroundColor:"black",
        border:"none",
        margin:"10px",
        cursor:"pointer",
        borderRadius:"10px",
        padding:"5px 10px"
    }
  const { counter, increament, decreament,reset } = useContext(CounterContext);
  const color = counter < 0 ? "red" : "green";
  
  return (
    <>
      <div
        style={{ marginTop: "60px", display: "flex", justifyContent: "center" }}
      >
        <div>
          <h1 style={{ color: color, textAlign: "center" }}>{counter}</h1>
          <button style={btn} onClick={decreament}>Decreament</button>
          <button style={btn} onClick={reset}>Reset</button>
          <button style={btn} onClick={increament}>Increament</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
