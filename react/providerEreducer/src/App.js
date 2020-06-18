import React from "react";
import Provider from "./component/providerReducerAacount/Provider";
import Count from "./component/Cout";
import Mirror from "./component/Mirror";
import "./styles.css";

export default function App() {
  return (
    <Provider>
      <Count />
      <Mirror />
    </Provider>
  );
}
