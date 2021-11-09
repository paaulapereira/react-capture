//reusable hook
//importar
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion"; //para controlar cuando empieza la animacion

export const useScroll = () => {
  //creamos el control para la animacion
  const controls = useAnimation();
  //creamos las variables para ver cuando la vista esta en verdadero
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
