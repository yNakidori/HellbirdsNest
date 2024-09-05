import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SystemCarousel = () => {
  const placeholderImages = [
    "https://via.placeholder.com/300x200?text=Project+1",
    "https://via.placeholder.com/300x200?text=Project+2",
    "https://via.placeholder.com/300x200?text=Project+3",
    "https://via.placeholder.com/300x200?text=Project+4",
    "https://via.placeholder.com/300x200?text=Project+5",
  ];

  const responsive = {
    superLargeDesktop: {
      // Acima de 3000px
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      // Acima de 1024px
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      // Acima de 464px
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      // Abaixo de 464px
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="project-carousel-container">
      <h2>My project</h2>
      <Carousel
        responsive={responsive}
        swipeable={true}
        showDots={true}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 0.5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {placeholderImages.map((src, index) => (
          <div key={index} className="project-item">
            <img src={src} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SystemCarousel;
