import "./App.css";
import logoFranjaMorada from "./assets/franjaMorada.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            {" "}
            <Image src={logoFranjaMorada} className="logo" alt="Vite logo" />
            <h1>Franja Morada</h1>
            <p className="read-the-docs">Instituto Carlos Pellegrini</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
