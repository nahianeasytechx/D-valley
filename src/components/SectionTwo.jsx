import React, { useEffect, useRef } from 'react';
import room1 from "../assets/room1.png";
import room2 from "../assets/room2.avif";

const SectionTwo = () => {
  const fromColor = "#183f35";
  const toColor = "#183f35";
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.2 } // Adjust this value to control when animation triggers
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className={`bg-[#80bf1e]`}>
      <div className="container mx-auto px-10 lg:px-5">
        {/* Flex wrapper */}
        <div className="flex flex-wrap gap-x-10 py-12 md:py-16 lg:py-[120px]">
          
          {/* h1 for mobile (above images) */}
          <div className="w-full order-1 lg:hidden">
            <h1 className='text-[#0c0f3b] text-2xl md:text-3xl text-center font-bold'>
              Step into a room that has <br />
              from <span className='text-white'>room for everything</span>
            </h1>
          </div>

          {/* IMAGE BLOCK */}
          <div className="relative py-10 lg:py-0 w-full lg:w-[45%] flex justify-center items-center gap-x-2 order-2">
            <div className="w-1/2">
              <img src={room2} alt="bestlife1.png" />
            </div>
            <div className="w-1/2 absolute left-[50%] top-[30%]">
              <img src={room1} alt="" />
            </div>
          </div>

          {/* p for mobile (below images) */}
          <div className="w-full order-3 lg:hidden">
            <p className="text-center text-white md:text-lg mt-5">
              Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. 
              Everything else - furniture, appliances, food - has already been taken care of.
            </p>
          </div>

          {/* TEXT BLOCK for lg (h1 + p stacked) */}
<div
  ref={textRef}
  className="hidden lg:flex w-[45%] py-5 flex-col justify-center items-start order-2 fade-in-element"
>
  <h1 className="text-[#0c0f3b] text-2xl md:text-3xl font-bold">
      Step into a room that has  <span className="text-white"> room for everything</span><br />
  
  </h1>
  <p className="text-start text-white text-lg mt-5">
    Nope, we don't try to pass off a few plastic chairs and a TV as a
    common area. We've replaced them with sofas, bean bags and
    large-screen TVs. And we've also added gaming zones, fitness
    centres and chillout corners as a bonus.
  </p>
</div>

        </div>
      </div>
      

    </div>
  );
};

export default SectionTwo;