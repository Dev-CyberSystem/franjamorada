import { Route, Routes as Ruta } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Propuestas from "../pages/Propuestas";


const Routes = () => {
  return (
    <>
      <Ruta>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/propuestas" element={<Propuestas />} />
      </Ruta>
    </>
  );
};

export default Routes;
