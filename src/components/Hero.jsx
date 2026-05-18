import Carousel from 'react-bootstrap/Carousel';
import '../css/Hero.css';

const Hero = () => {
  return (
    <Carousel fade interval={3000} className="hero-container">
      <Carousel.Item>
        <img
          className="d-block w-100 hero-img"
          src="/img/herocalendario.png" 
          alt="Plantas temporada"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 hero-img"
          src="/img/herocalendario1.png"
          alt="Cuidados de otoño"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 hero-img"
          src="/img/herocalendario2.png" 
          alt="Nuevos ingresos"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;