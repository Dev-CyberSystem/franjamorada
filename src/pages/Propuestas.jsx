import logoIcp from "../assets/logoIcp.png";
import { Container, Image, Row, Col, Card } from "react-bootstrap";
const Propuestas = () => {
  return (
    <>
      <Container className="text-center mt-4">
      <h1>Aquí podrás ver todas nuestras propuestas</h1>

        <Row>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>1</Card.Header>
              <Card.Body>
                <Card.Title>Bautismo y Bienvenida</Card.Title>
                <Card.Text>
                  Para seguir la tradición los alumnos de 6to año del instituto
                  recibirán a los alumnos de 1er año con un desayuno y distintas
                  actividades de recreación, durante esta mañana los chicos del
                  ciclo básico serán apadrinados con los del ciclo orientado con
                  el fin de crear un vínculo en el que haya confianza para
                  facilitar el cambio de primaria a secundaria.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>2</Card.Header>
              <Card.Body>
                <Card.Title>Matineé</Card.Title>
                <Card.Text>
                  Es una fiesta que se realizará de noche para los alumnos del
                  ciclo básico del Instituto Pellegrini y de otros colegios,
                  dentro del patio se van a vender jugos/gaseosas y comida; esta
                  actividad se propone con el fin de recaudar dinero
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>3</Card.Header>
              <Card.Body>
                <Card.Title>Kermes (una por trimestre).</Card.Title>
                <Card.Text>
                  Es una fiesta familiar que se realizará de día en el patio de
                  Las Heras, durante esta jornada recreativa los chicos que
                  vayan van a poder participar de juegos como: la casa del
                  terror, toro mecánico, peloteros, salón de belleza, etc.
                  También se venderá comida y bebida para las familias que nos
                  quieran acompañar ese día y se traerá a un artista/grupo
                  musical o de comedia para dar un show.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>4</Card.Header>
              <Card.Body>
                <Card.Title>Expo estudiantil</Card.Title>
                <Card.Text>
                  Esta actividad busca darles un espacio a aquellos alumnos (o
                  familia de los alumnos) que son emprendedores o que buscan
                  emprender para que lo puedan hacer, durante esta jornada
                  también se realizará una feria de libros en donde los alumnos
                  van a poder vender sus libros al precio que ellos elijan y
                  también se realizará una venta de uniformes al igual que en la
                  feria de libros los alumnos pondrán el precio de las prendas
                  que decidan vender y las ganancias serán suyas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>5</Card.Header>
              <Card.Body>
                <Card.Title>Sorteos/rifas</Card.Title>
                <Card.Text>
                  Proponemos realizar sorteos y rifas entre los alumnos con el
                  fin de recaudar dinero para poder financiar los proyectos de
                  las actividades que proponemos precedentemente.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>6</Card.Header>
              <Card.Body>
                <Card.Title>
                  Arreglar las canchas de fútbol y básquet del complejo.
                </Card.Title>
                <Card.Text>
                  Proponemos arreglar y pintar dichas canchas para comodidad de
                  los alumnos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>7</Card.Header>
              <Card.Body>
                <Card.Title>Dispensers de agua</Card.Title>
                <Card.Text>
                  Nos parece necesario tener dispensers de agua mineral a
                  disposición de todo el alumnado dado que es primordial
                  disponer de agua segura potable y de libre disposición, ya sea
                  fría y caliente, proponemos uno o dos por patio.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>8</Card.Header>
              <Card.Body>
                <Card.Title>Basureros de reciclaje</Card.Title>
                <Card.Text>
                  Nuestra idea es poner los basureros de reciclaje con los
                  colores representativos, esto es primordial e importantísimo
                  para un mejor orden de la basura y porque de ésta manera se
                  ayuda a fomentar al reciclaje y cuidado del medio ambiente.
                  Todo esto irá acompañado de charlas previas e instructivas del
                  uso y modalidad de los mismos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>9</Card.Header>
              <Card.Body>
                <Card.Title>
                  Charlas y Cursos de RCP/primeros auxilios y salud mental.
                </Card.Title>
                <Card.Text>
                  Dichas charlas y cursos tendrán lugar a lo largo del año y en
                  la semana del colegio.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>10</Card.Header>
              <Card.Body>
                <Card.Title>Copa Pellegrini.</Card.Title>
                <Card.Text>
                  Proponemos que la secretaria de deportes junto con la
                  secretaria de relaciones externas se encargue de invitar a
                  otros colegios a participar de nuestra jornada deportiva y de
                  organizar los equipos y los partidos que se jueguen.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>11</Card.Header>
              <Card.Body>
                <Card.Title>Competencias deportivas internas.</Card.Title>
                <Card.Text>
                  Desde la secretaria de deportes proponemos una jornada
                  deportiva interna, esta competencia estaría dividida entre el
                  ciclo básico y el ciclo orientado con un curso ganador (en
                  cada ciclo) que recibirá un trofeo y una hamburgueseada.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>12</Card.Header>
              <Card.Body>
                <Card.Title>Mantenimiento de los baños</Card.Title>
                <Card.Text>
                  Proponemos el arreglo de los baños, principalmente los que se
                  encuentran en el patio de calle Las Heras, pintarlos, que
                  tengan jabón, alcohol en gel, papel y desodorante de ambiente.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>13</Card.Header>
              <Card.Body>
                <Card.Title>Opinión estudiantil.</Card.Title>
                <Card.Text>
                  Desde la secretaria de bienestar estudiantil proponemos
                  mejorar la relación que existe entre el centro de estudiantes
                  y los estudiantes, para esto, los encargados de la secretaria
                  se van a encargar personalmente de hablar con los alumnos de
                  todos los cursos para que los mismos puedan plantear sus
                  dudas, propuestas o quejas, esto se hará una o dos veces al
                  mes dependiendo de la necesidad, también se van a poner
                  buzones para que los alumnos que no se animan a hablar puedan
                  escribir lo que necesiten/piensan.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>14</Card.Header>
              <Card.Body>
                <Card.Title>Pellegrini Music Festival</Card.Title>
                <Card.Text>
                  Desde la secretaria de cultura proponemos un festival musical
                  en el que participen artistas individuales o grupos que
                  interpreten distintos géneros musicales. Éste será también
                  extensivo a invitados de otros colegios, familiares de la gran
                  familia Pellegrini, e invitados en general. Dentro del
                  festival el centro venderá bebidas y comidas. Esta actividad
                  se propone con la finalidad de recaudar dinero.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>15</Card.Header>
              <Card.Body>
                <Card.Title>Materiales necesarios.</Card.Title>
                <Card.Text>
                  Proponemos comprar calculadoras, cintas y tijeras para que los
                  alumnos las puedan usar cuando la necesiten, estos materiales
                  estarán en biblioteca y cuando un alumno las necesite tendrá
                  que firmar una ficha aclarando su nombre y curso. También nos
                  gustaría tener una cajita con toallas femeninas por si alguna
                  alumna necesita, las mismas se podrán retirar de biblioteca y
                  si alguna alumna las utiliza luego tendrá que reponer la
                  cantidad que uso.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>16</Card.Header>
              <Card.Body>
                <Card.Title>Competencia de tapitas.</Card.Title>
                <Card.Text>
                  Desde la secretaria de acción social proponemos realizar una
                  competencia entre todos los cursos para juntar la mayor
                  cantidad de tapitas que se puedan, para donar al Hospital
                  Garrahan. Para motivar a los alumnos, el curso que junte la
                  mayor cantidad de tapitas, será premiado
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>17</Card.Header>
              <Card.Body>
                <Card.Title>
                  Campamento o visita al Cedar de despedida.
                </Card.Title>
                <Card.Text>
                  Queremos proponer la idea de realizar campamentos o visitas al
                  Cedar, las mismas estarán divididas por curso y se realizarán
                  en el último trimestre. Durante esta jornada se realizarán
                  actividades recreativas y deportivas usando las instalaciones
                  de dicho centro.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>18</Card.Header>
              <Card.Body>
                <Card.Title>Revista estudiantil.</Card.Title>
                <Card.Text>
                  Para finalizar el año nos gustaría armar una revista
                  estudiantil en donde se recopile todo lo sucedido durante el
                  año educativo, por ej.: intercoles, día del estudiante, copa
                  Pellegrini, resultados de las competencias y los concursos
                  internos, semana del colegio, el bautismo, etc., Para que el
                  alumno tenga la revista como recuerdo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>19</Card.Header>
              <Card.Body>
                <Card.Title>Locro.</Card.Title>
                <Card.Text>
                  Esta actividad tenemos la intención de realizarla para, p.
                  ej.: el 25 de Mayo o el 9 de Julio. Esté será un día de
                  convivencia donde se preparará locro que se venderá y se podrá
                  comer dentro del colegio o comprar para llevar.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>20</Card.Header>
              <Card.Body>
                <Card.Title>Bingo Familiar.</Card.Title>
                <Card.Text>
                  Esto será una actividad destinada a la convivencia y diversión
                  entre los alumnos, familia y amigos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="text-center mt-4">
            <Card border="danger">
              <Card.Header>21</Card.Header>
              <Card.Body>
                <Card.Title>Liga Deportiva Anual.</Card.Title>
                <Card.Text>
                  Ésta iniciativa busca que se organicen distintas ligas de
                  deportes (fútbol, básquet, vóley, handball y hockey), con
                  equipos creados por parte de los alumnos, las cuales
                  competirán de manera interna a lo largo del año.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="text-center mt-3" style={{ color: "white" }}>
        <Image src={logoIcp} fluid />
      </div>
    </>
  );
};

export default Propuestas;
