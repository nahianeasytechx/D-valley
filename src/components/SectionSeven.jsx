import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { customerExperience } from '../data/customerExperience';
const SectionSeven = () => {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay:true,         // ✅ enable autoplay
  autoplaySpeed: 1500,     // ✅ time between slides (ms)
  pauseOnHover: true,

  };
  return (
<div className="container mx-auto py-10">
  <div className="py-20">
      <h1 className="text-4xl text-center font-bold leading-10">
        <span className='text-[#60C3AD]'>Never</span> a dull moment
    </h1>
<p className='leading-10 text-center lg:text-2xl text-[#4e5253]'>In your story, your stay with us will be the most memorable chapter</p>
  </div>
      <Slider {...settings}>
      {customerExperience.map((item) => (
        <div key={item.id} className="relative h-[327px]">
          {/* Background image */}
          <img
            src={item.img}
            alt=""
            className="w-full  lg:w-[95%] h-[127px] md:h-[337px]  object-cover lg:rounded-xl"
          />

    <div className="opacity-0 hover:opacity-100 transition-all duration-300 group">
              {/* Black overlay */}
          <div className=" lg:w-[95%] lg:h-[337px] absolute inset-0 bg-black/80 ">
          </div>
          <p className=' text-center ps-3 text-white text-sm xl:text-  absolute top-[50%] '>{item.overlay_text}</p>
    </div>

        </div>
      ))}
    </Slider>
</div>
  )
}

export default SectionSeven




