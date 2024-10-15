import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
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
    <div
      className="home"
      id="smoke-effect"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div id="home" className="home-content">
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
        <Footer />
      </div>
    </div>
  );
};

export default Home;
