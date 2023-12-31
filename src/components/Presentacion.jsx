import { Col, Container, Row, Image, Button } from "react-bootstrap";
import "../style/stylePresentacion.css";
import logo from "../assets/franjaMorada.jpg";

const Presentacion = () => {
  return (
    <Container className="mt-5 justify-content-center ">
      <Row>
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Image src={logo} rounded className="logoPresentacion" />
        </Col>
        <Col xs={12} md={6} className="textPresentacion mt-5 text-center">
          <h2> ¿Quiénes somos? </h2>
          <h5>
            Somos un grupo de estudiantes de 5to año del Instituto Dr. Carlos
            Pellegrini y nos gustaría representar a los alumnos del colegio a
            través del centro de estudiantes, nuestro objetivo principal es
            defender el interés y la comodidad de dicho público. A continuación,
            se presentarán las secretarías que nosotros proponemos junto a sus
            encargados y luego daremos a conocer nuestras propuestas.
          </h5>
          <h4>¿Querés conocer nuestras propuestas?</h4>
          <Button href="/propuestas" type="button" className="colorButton m-2">
            Propuestas
          </Button>
          <Button href="/about" type="button" className="colorButton m-2">
            Secretarías
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Presentacion;
