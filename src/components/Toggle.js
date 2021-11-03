import { motion } from "framer-motion";
import React, { useState } from "react";

//pasamos de prop todo lo que hay dentro del componente toggle
const Toggle = ({ children, title }) => {
  //states
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};
//ese componente tiene una funcion que cuando se le hace clcik, cambia el state de toggle al contrario de lo que estaba, si no estaba enseñando se enseña y vice versa

export default Toggle;
