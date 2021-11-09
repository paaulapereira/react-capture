import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//funcion para que cuando se cambie de pagina siembre este arriba
const ScrollTop = () => {
  //guardamos la ubicacion de donde estamos con el pathname
  const { pathname } = useLocation();
  //cada vez que el nombre del pathname se cambia el scroll se va arriba
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;
