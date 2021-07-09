import React from "react";
import Board from "./components/Board";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Board></Board>
    </div>
  );
}

export default App;
