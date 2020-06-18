import React, { useContext } from "react";
import context from "../providerReducerAacount/Context";
import * as action from "../providerReducerAacount/actions";
export default function Count() {
  const { count, dispatchCount } = useContext(context);
  return (
    <div>
      <h1>Mirror:{count} </h1>

      <button
        onClick={() => {
          dispatchCount(action.CLEAN);
        }}
      >
        {" "}
        CLEAN
      </button>
    </div>
  );
}
