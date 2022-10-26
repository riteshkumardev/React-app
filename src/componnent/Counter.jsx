import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDec, handleInc } from "../redux/action";
function Counter() {
  const data = useSelector((el) => el?.count.count);
  const dispatch = useDispatch();
  const handleIncr = () => {
    dispatch(handleInc());
  };
  const handleDecr = () => {
    dispatch(handleDec());
  };
  return (
    <div>
      <h1>Counter</h1>
      <h3>Count= {data}</h3>
      <button onClick={handleIncr}>Increment</button>
      <button onClick={handleDecr}>Decrement</button>
    </div>
  );
}

export default Counter;
