import logoIcp from "../assets/logoIcp.png";
import { Image } from "react-bootstrap";
const Propuestas = () => {
  return (
    <>
      <div className="text-center" style={{ color: "white" }}>
        <h1>Pronto podrás ver todas nuestras propuestas</h1>
        <h2>Preparate!!!</h2>

        <Image src={logoIcp} fluid />
      </div>
    </>
  );
};

export default Propuestas;
