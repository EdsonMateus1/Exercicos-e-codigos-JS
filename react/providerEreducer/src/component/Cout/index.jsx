import React, { useContext, useState } from "react";

import context from "../providerReducerAacount/Context";
import * as action from "../providerReducerAacount/actions";

export default function Count() {
  const { count, dispatchCount } = useContext(context);

  const [valueIncrement, setvalueIncrement] = useState(1);

  return (
    <div>
      <input
        type="number"
        value={valueIncrement}
        onChange={e => {
          setvalueIncrement(e.target.value);
        }}
      />
      <h1>Count : {count} </h1>
      <button
        onClick={() => {
          dispatchCount(action.INCREMENT(valueIncrement));
        }}
      >
        {" "}
        INCREMENT
      </button>
    </div>
  );
}
