import { Route, Routes as Ruta } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";


const Routes = () => {
  return (
    <>
      <Ruta>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Ruta>
    </>
  );
};

export default Routes;
