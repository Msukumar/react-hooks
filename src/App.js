import React from "react";
import "./App.css";
// import HttpCalls from './HttpCalls';
// import UseStateCounter from './UseStateCounter';
import ReducerCount from "./ReducerCount";
import DataFetching from "./DataFetching";

function App() {
  return (
    <div className="App">
      {/* <UseStateCounter /> */}
      {/* <HttpCalls /> */}
      <ReducerCount />
      <DataFetching />
    </div>
  );
}

export default App;
