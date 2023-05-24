
import React from "react";
import "./styles.css";

export default function SetMatriz(Matriz) {
  function setNumberLines(array) {
    return (
      <div className="row1">
        {array.map((item, index) => (
          <div className="index" key={item}> {index} </div>
        ))}
      </div>
    );
  }
  function setLine(array, index) {
    return (
      <div className="row">
        {array.map((item, index) => (
          <div className={item.name} key={index} />
        ))}
        <div className="index" key={index}>
          {index}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="column">
        {setNumberLines(Matriz[0])}
        {Matriz.map((items, index) => setLine(items, index))}
      </div>
    </div>
  );
}
