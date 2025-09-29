import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { residentBanner } from "../data/residentBanner";

const ResidenciesSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
<div className="mb-10">
        <Slider {...settings}>
      {residentBanner.map(({ id, image }) => {
return(
            <div key={id}>
          <img src={image} alt="" loading="lazy" className="rounded-xl"/>
        </div>
);
      })}
    </Slider>
</div>
  );
};

export default ResidenciesSlider;
