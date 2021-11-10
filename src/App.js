import React from "react";
//import estilos
import GlobalStyle from "./styles/GlobalStyle";
//import pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//import components
import Nav from "./components/Nav";
//router
import { Switch, Route, useLocation } from "react-router-dom";
//animations
import { AnimatePresence } from "framer-motion";

function App() {
  //obtenemos el key y la ubicacion de donde estamos- en verdad esta el objeto entero en esa variable
  const location = useLocation();
  //hay que envolver toda la pagina que quiere animar con AnimatePresence, que detecta cuando hay un cambio en la pagina
  //despues hay que pasar el key para el switch, porque ahi el AnimatePresence será avisado cuando hay un cambio de pagina y pondrá las animaciones
  //el exitBeforeEnter es para que espere que el otro componente se vaya antes de empezar animando el nuevo
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/react-capture/" exact>
            <AboutUs />
          </Route>
          <Route path="/react-capture/work" exact>
            <OurWork />
          </Route>
          <Route path="/react-capture/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/react-capture/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}
//el rout detecta el camino y busca lo que haya en el path, el exact es para que sea exactamente igual a la ruta
//el switch busca en la ruta la primera solucion posible y va cambiando
//El componente route: el path en route es para escoger la ruta que va a renderizar cada componente
export default App;
