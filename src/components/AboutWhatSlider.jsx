import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { aboutWhatData } from "../data/aboutWhatData";

const AboutWhatSlider = () => {
 const labels = ["Product", "Amenities", "Community", "Technology"];
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:true,
    
  };
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     appendDots: dots => (
//       <div
//         style={{
          
//           position: "absolute",
//           top: "50%",
//           left: "20px",
//           transform: "translateY(-50%)",
//           display: "flex",
//           flexDirection: "column",
//           gap: "12px",
//         }}
//       >
//         <ul
//           style={{
//             margin: 0,
//             padding: 0,
//             listStyle: "none",
//             display: "flex",
//             flexDirection: "column",
//             gap: "12px",
//           }}
//         >
//           {dots}
//         </ul>
//       </div>
//     ),
//     customPaging: i => (
//       <button
//         style={{
//           padding: "8px 16px",
//           borderRadius: "20px",
//           border: "1px solid #0d6efd",
//           background: "white",
//           color: "#0d6efd",
//           fontSize: "14px",
//           fontWeight: "500",
//           cursor: "pointer",
//           transition: "all 0.3s ease",
//         }}
//       >
//         {labels[i]}
//       </button>
//     ),
//   };
// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     appendDots: dots => (
//       <div
//         style={{
//           backgroundColor: "#ddd",
//           borderRadius: "10px",
//           padding: "10px"
//         }}
//       >
//         <ul style={{ margin: "0px" }}> {dots} </ul>
//       </div>
//     ),
//     customPaging: i => (
//       <div
//         style={{
//           width: "30px",
//           color: "blue",
//           border: "1px blue solid"
//         }}
//       >
//         {i + 1}
//       </div>
//     )
//   };

  return (
    <>
<div className="max-w-4xl  mx-auto shadow-2xl rounded-3xl">
    <p className="hidden md:block text-[18px] text-center px-20 py-10">A place that feels like 'home' as soon as you enter it. A place where we steal away your chores and replace them with care. A place where you'll have technology in your pocket and your tribe by your side. A place that's all about you. And that is no wishful thinking, but our unwavering PACT with you.</p>
          <div className="slider-container relative  " >
      <Slider {...settings}>
        {aboutWhatData.map(({iconimg,title,img1,img2,img3,subtext}) => {
          return (
            <div className="mx-4">
                <div className="flex flex-col justify-center items-center">
                    <img src={iconimg} alt="svg.png" />
                    <h1 className="text-2xl text-[#80bf1e] py-3">{title}</h1>
                </div>
             <div className="flex flex-wrap justify-center space-x-8 mt-5">
          <img src={img1} alt="" className="h-[194px] max-h-[334px]  "/>
          <img src={img2} alt="" className="h-[194px] max-h-[334px] mt-4 md:mt-0 "/>
             </div>
             <div className="flex justify-center items-center mt-8">
                          <img src={img3} alt="" className="h-[194px] max-h-[334px] "/>
             </div>
             <p className="text-[18px] text-center px-20 py-10">{subtext}</p>
            </div>
          );
        })}
      </Slider>
    </div>
</div>

    </>
  );
};

export default AboutWhatSlider;
