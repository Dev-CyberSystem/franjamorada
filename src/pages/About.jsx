import { Row, Col, Container, Card } from "react-bootstrap";
import "../style/styleAbout.css";
import presidente from "../assets/presidente.png";
import vice from "../assets/11.png";
import tesorero from "../assets/8.png";
import prensa from "../assets/13.png";
import relacionesInternas from "../assets/10.png";
import relacionesExternas from "../assets/externas.jpeg";
import deportes from "../assets/14.png";
import cultura from "../assets/12.png";
import accionSocial from "../assets/9.png";
import bienestar from "../assets/7.png";


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
                <Card.Title>Secretaría de prensa y difusión</Card.Title>
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
                <Card.Title>Secretaría de relaciones internas</Card.Title>
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
                <Card.Title>Secretaría relaciones externas</Card.Title>
                <Card.Text>Jonhas Guzmán y Victoria Terraf</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card>
              <Card.Img variant="top" src={deportes} />
              <Card.Body>
                <Card.Title>Secretaría de deportes</Card.Title>
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
                <Card.Title>Secretaría de cultura</Card.Title>
                <Card.Text>Agustín Carrizo y Benjamín Ruiz</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card>
              <Card.Img variant="top" src={accionSocial} />
              <Card.Body>
                <Card.Title>Secretaría de acción social</Card.Title>
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
