import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VerticalSlider = () => {
  const settings = {
    dots: true,
    vertical: true, // make slider vertical
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-60px", // half hidden
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <ul style={{ margin: 0, padding: 0 }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "60px",
          height: "40px",
          backgroundColor: i % 2 === 0 ? "#80bf1e" : "#ff5722", // colors per button
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
          transform: "translateX(50%)", // half hidden
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
      >
        Step {i + 1}
      </div>
    ),
  };

  return (
    <div style={{ position: "relative", width: "400px", height: "300px", margin: "50px auto" }}>
      <Slider {...settings}>
        <div style={{ background: "#f1f1f1", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h3>Slide 1</h3>
        </div>
        <div style={{ background: "#e2e2e2", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h3>Slide 2</h3>
        </div>
        <div style={{ background: "#d3d3d3", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h3>Slide 3</h3>
        </div>
        <div style={{ background: "#c4c4c4", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h3>Slide 4</h3>
        </div>
      </Slider>
    </div>
  );
};

export default VerticalSlider;
