import React, { useState } from "react";

//pasamos de prop todo lo que hay dentro del componente toggle
const Toggle = ({ children }) => {
  //states
  const [toggle, setToggle] = useState(true);
  return <div onClick={() => setToggle(!toggle)}>{toggle ? children : ""}</div>;
};
//ese componente tiene una funcion que cuando se le hace clcik, cambia el state de toggle al contrario de lo que estaba, si no estaba enseñando se enseña y vice versa

export default Toggle;
