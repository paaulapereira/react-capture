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
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}
//el rout detecta el camino y busca lo que haya en el path, el exact es para que sea exactamente igual a la ruta
//el switch busca en la ruta la primera solucion posible y va cambiando
//El componente route: el path en route es para escoger la ruta que va a renderizar cada componente
export default App;
