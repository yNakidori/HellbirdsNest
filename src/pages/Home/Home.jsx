import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import Navbar from "../../components/NavBar/Navbar";
import hero_video from "../../assets/r6bg.mp4";
import SystemCarousel from "../../components/Carousel/SystemCarousel";
import "react-multi-carousel/lib/styles.css";
import { collection, getDocs } from "firebase/firestore";
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
    <div>
      <div className="home">
        <Navbar />
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
      <div className="section-2">
        <SystemCarousel projects={webProjects} title="Web Projects" />
        <SystemCarousel projects={systemProjects} title="System Projects" />
        <SystemCarousel projects={gameProjects} title="Game Projects" />
      </div>
    </div>
  );
};

export default Home;
