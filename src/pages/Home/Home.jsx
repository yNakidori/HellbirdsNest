import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import Navbar from "../../components/NavBar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import Slider from "react-slick";
import { db } from "../../services/firebase";

const Home = () => {
  const [webProjects, setWebProjects] = useState([]);
  const [systemProjects, setSystemProjects] = useState([]);
  const [gameProjects, setGameProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const webSnapshot = await db
        .collection("projects")
        .where("category", "==", "web")
        .get();
      const systemSnapshot = await db
        .collection("projects")
        .where("category", "==", "system")
        .get();
      const gameSnapshot = await db
        .collection("projects")
        .where("category", "==", "game")
        .get();

      setWebProjects(webSnapshot.docs.map((doc) => doc.data()));
      setSystemProjects(systemSnapshot.docs.map((doc) => doc.data()));
      setGameProjects(gameSnapshot.docs.map((doc) => doc.data()));
    };

    fetchProjects();
  }, []);

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
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
      <div className="carousel-section">
        <h2>Sistemas</h2>
        <Slider {...settings}>
          {systemProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
      <div className="carousel-section">
        <h2>Jogos</h2>
        <Slider {...settings}>
          {gameProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
