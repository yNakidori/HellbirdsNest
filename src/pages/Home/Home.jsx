import React from "react";
import "../Home/Home.css";
import Navbar from "../../components/NavBar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import Slider from "react-slick";

const Home = () => {
  const webProjects = [
    { title: "Projeto web 1", image: "image1" },
    { title: "Projeto web 2", image: "image2" },
  ];

  const systemProjects = [
    { title: "Projeto sistema 1", image: "image3" },
    { title: "Projeto sistema 2", image: "image4" },
  ];

  const gameProjects = [
    { title: "Projeto jogo 1", image: "image5" },
    { title: "Projeto jogo 2", image: "image6" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
      </div>
      <div className="carousel-section">
        <h2>Páginas Web</h2>
        <Slider {...settings}>
          {webProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
