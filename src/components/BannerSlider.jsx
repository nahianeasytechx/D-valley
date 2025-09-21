import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerslider } from "../data/bannerData";

export default function BannerSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {bannerslider.map((item) => (
        <div key={item.id} className="relative">
          {/* Background image */}
          <img
            src={item.img}
            alt={item.title}
            className=" md:h-[600px] w-full  object-cover rounded-b-2xl lg:rounded-xl"
          />

          {/* Black overlay */}
          <div className="  absolute inset-0 bg-black/50  lg:rounded-xl"></div>

          {/* Text on top */}
          <div className="absolute px-10 inset-0 flex flex-col justify-center ">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              {item.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white max-w-2xl">
              {item.subtext}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
