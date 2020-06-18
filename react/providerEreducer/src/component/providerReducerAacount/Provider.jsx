import React, { useReducer } from "react";
import Context from "./Context";
import reducer from "./reducer";

export default function Provider({ children }) {
  const [count, dispatchCount] = useReducer(reducer, 0);
  const state = {
    count,
    dispatchCount
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
}
