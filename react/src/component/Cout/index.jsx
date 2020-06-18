import React, { useContext } from "react";

import context from "../providerReducerAacount/Context";
import * as action from "../providerReducerAacount/actions";

export default function Count() {
  const { count, dispatchCount } = useContext(context);

  return (
    <div>
      <h1>Count : {count} </h1>

      <button
        onClick={() => {
          dispatchCount(action.INCREMENT);
        }}
      >
        {" "}
        INCREMENT
      </button>
    </div>
  );
}
