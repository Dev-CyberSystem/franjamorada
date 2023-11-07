import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Img1 from "../assets/1.png";
import Img2 from "../assets/2.png";

const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item >
        <Image src={Img1} fluid />
        {/* <Carousel.Caption>
          <h3>Primera Imagen</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item >
        <Image src={Img2} fluid />
        {/* <Carousel.Caption>
          <h3>Segunda Imagen</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item >
       <Image src={Img2} fluid />
        {/* <Carousel.Caption>
          <h3>Tercera Imagen</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
