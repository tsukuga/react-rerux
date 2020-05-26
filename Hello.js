import React, { useState, useEffect } from "react";
import { rowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { PythonShell } from "python-shell";

function Hello(props) {
  const [name, setName] = useState("React");

  useEffect(() => {

    // PythonShell.runString("x=1+1;print(x)", null, function(err) {
    //   if (err) throw err;
    //   console.log("finished");
    // });

    console.log("Hello react");
  });

  return (
    <>
      <h1>Hello {name}!</h1>
      <input
        type="text"
        onChange={e => {
          setName(e.target.value);
        }}
      />
    </>
  );
}

export default Hello;
