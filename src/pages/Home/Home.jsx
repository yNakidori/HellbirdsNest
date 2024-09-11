import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import hero_video from "../../assets/r6bg.mp4";
import SystemCarousel from "../../components/Carousel/SystemCarousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";

const slidesData = [
  {
    imageUrl: "https://via.placeholder.com/1200x600",
    text: "React Image Slider",
  },
  {
    imageUrl: "https://via.placeholder.com/1200x600",
    text: "Another Slide",
  },
];

const Home = () => {
  return (
    <div>
      <div id="home" className="home">
        <div className="hero">
          <video
            src={hero_video}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          />
        </div>
      </div>
      <Navbar />
      <div id="web-pages" className="section">
        <h2>Web Pages</h2>
        <SystemCarousel slides={slidesData} />
      </div>
      <div id="systems" className="section">
        <h2>Systems</h2>
        <SystemCarousel slides={slidesData} />
      </div>
      <div id="side-projects" className="section">
        <h2>Side Projects</h2>
        <SystemCarousel slides={slidesData} />
      </div>
      <div id="games" className="section">
        <h2>Games</h2>
        <SystemCarousel slides={slidesData} />
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
      </div>
    </div>
  );
};

export default Home;
