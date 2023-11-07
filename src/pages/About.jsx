import { Row, Col, Container, Card } from "react-bootstrap";
import "../style/styleAbout.css";
import presidente from "../assets/presidente.jpeg";
import vice from "../assets/vice.jpeg";
import tesorero from "../assets/tesorero.jpeg";
import prensa from "../assets/prensa.jpeg";
import relacionesInternas from "../assets/internas.jpeg";
import relacionesExternas from "../assets/externas.jpeg";
import deportes from "../assets/deportes.jpeg";
import cultura from "../assets/cultura.jpeg";
import accionSocial from "../assets/accionSocial.jpeg";
import bienestar from "../assets/bienestar.jpeg";


const About = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="text-center mt-4">
            <h1>Conocenos un poquito más</h1>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card>
              <Card.Img variant="top" src={presidente} />
              <Card.Body>
                <Card.Title>Presidente</Card.Title>
                <Card.Text>Federico Robledo</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col xs={12} md={4} className="text-center mt-4">
            <Card>
              <Card.Img variant="top" src={vice} />
              <Card.Body>
                <Card.Title>Vicepresidente</Card.Title>
                <Card.Text>Agustina Zamorano</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card>
              <Card.Img variant="top" src={tesorero} />
              <Card.Body>
                <Card.Title>Tesorería</Card.Title>
                <Card.Text>Guadalupe Pavón y Hernán López</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card>
              <Card.Img variant="top" src={bienestar} />
              <Card.Body>
                <Card.Title>Secretaría de bienestar estudiantil</Card.Title>
                <Card.Text>
                  Pedro Hernández, Ángeles Amaya, Delfina Medina
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card>
              <Card.Img variant="top" src={prensa} />
              <Card.Body>
                <Card.Title>í de prensa y difusión</Card.Title>
                <Card.Text>
                  Milagros Robledo, Máximo Chalup y Emiliano Di Risio
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card>
              <Card.Img variant="top" src={relacionesInternas} />
              <Card.Body>
                <Card.Title>í de relaciones internas</Card.Title>
                <Card.Text>
                  Martina Taddey, Ana Paula Acosta y Ulises Mercado
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card>
              <Card.Img variant="top" src={relacionesExternas} />
              <Card.Body>
                <Card.Title>í relaciones externas</Card.Title>
                <Card.Text>Jonhas Guzmán y Victoria Terraf</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card>
              <Card.Img variant="top" src={deportes} />
              <Card.Body>
                <Card.Title>í de deportes</Card.Title>
                <Card.Text>
                  Aylin Galván, Alejo Nuñez y Benjamín Albornoz
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card>
              <Card.Img variant="top" src={cultura} />
              <Card.Body>
                <Card.Title>í de cultura</Card.Title>
                <Card.Text>Agustín Carrizo y Benjamín Ruiz</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card>
              <Card.Img variant="top" src={accionSocial} />
              <Card.Body>
                <Card.Title>í de acción social</Card.Title>
                <Card.Text>
                  Valentina Vallejo, Martina Sosa y Ana Antezana.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
