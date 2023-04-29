import React, { useState } from "react";

function App() {
  const [square1Color, setSquare1Color] = useState("red");
  const [square2Color, setSquare2Color] = useState("blue");

  function handleSquare1Click() {
    setSquare1Color(square2Color);
    setSquare2Color(square1Color);
  }

  function handleSquare2Click() {
    setSquare2Color(square1Color);
    setSquare1Color(square2Color);
  }

  return (
    <div>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: square1Color }}
        onClick={handleSquare1Click}
      />
      <div
        style={{ width: "100px", height: "100px", backgroundColor: square2Color }}
        onClick={handleSquare2Click}
      />
    </div>
  );
}

export default App;


