import React from 'react';
import room1 from "../assets/room1.png"
import room2 from "../assets/room2.avif"

const SectionTwo = () => {
  return (
    <div className="bg-[#60C3AD]">
      <div className="container mx-auto ">
        {/* Flex wrapper */}
        <div className="flex flex-wrap gap-x-10 py-12 md:py-16 lg:py-[120px]">
          
          {/* h1 for mobile (above images) */}
          <div className="w-full order-1 lg:hidden">
            <h1 className='text-2xl md:text-3xl text-center font-bold'>
             Step into a room that has <br />
              from <span className='text-[#60C3AD]'>room for everything</span>
            </h1>
          </div>

          {/* IMAGE BLOCK */}
          <div className="relative py-10 lg:py-0 w-full lg:w-[45%] flex justify-center items-center gap-x-2 order-2 ">
            <div className="w-1/2">
              <img src={room2} alt="bestlife1.png" />
            </div>
<div className="w-1/2 absolute left-[50%] top-[30%]">

<img src={room1} alt="" />
</div>
          </div>

          {/* p for mobile (below images) */}
          <div className="w-full order-3 lg:hidden">
            <p className="text-center text-[#4E5253] md:text-lg mt-5">
              Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. 
              Everything else - furniture, appliances, food - has already been taken care of.
            </p>
          </div>

          {/* TEXT BLOCK for lg (h1 + p stacked) */}
          <div className="hidden lg:flex w-[45%] py-5 flex-col justify-center items-start order-1">
            <h1 className='text-4xl pr-32 lg:pr-2 text-start font-bold'>
             Step into a room that has <br />
              from <span className='text-[#60C3AD]'>room for everything</span>
            </h1>
            <p className="text-start text-[#4E5253] text-lg mt-5">
            Your clothes and bag will not be fighting for space on the same chair. At Stanza Living, there's ample room for all your possessions. Even a framed photo of your family, for the rare occasions you miss home.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SectionTwo
