import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {DataLayer} from "./Context/DataLayer";
import reducer, { initialState } from "./Context/Reducer";

ReactDOM.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <App />
  </DataLayer>,

  document.getElementById("root")
);
