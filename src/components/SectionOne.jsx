import React from 'react'
import bestlife1 from "../assets/bestlife1.png";
import bestlife2 from "../assets/bestlife2.png";
import bestlife3 from "../assets/bestlife3.png";

const SectionOne = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="container mx-auto pt-[129px]">
        
        {/* Top section heading */}
        <h1 className='leading-[50px] lg:leading-[86px] text-[30px] lg:text-[42px] font-bold text-center'>
          <span className='text-[#2a308c]'>Not just</span> four walls and a roof
        </h1>
        <p className='leading-5 text-center md:text-xl text-[#4E5253]'>
          Come over and experience how a place to stay can be so much more
        </p>
        {/* Flex wrapper */}
        <div className="flex flex-wrap gap-x-10 py-12 md:py-16 lg:py-[120px]">
          
          {/* h1 for mobile (above images) */}
          <div className="w-full order-1 lg:hidden">
            <h1 className='text-2xl md:text-3xl text-center font-bold'>
              Start living your best life <br />
              from <span className='text-[#2a308c]'>Day One</span>
            </h1>
          </div>

          {/* IMAGE BLOCK */}
          <div className="py-10 lg:py-0 w-full lg:w-[45%] flex gap-x-2 order-2 lg:order-1">
            <div className="w-1/2">
              <img src={bestlife1} alt="bestlife1.png" />
            </div>
            <div className="w-1/2 flex flex-col gap-y-10">
              <img src={bestlife2} alt="bestlife2.png" className='rounded-xl' />
              <img src={bestlife3} alt="bestlife3.png" className='rounded-xl' />
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
          <div className="hidden lg:flex w-[45%] py-5 flex-col justify-center items-start order-2">
            <h1 className='text-4xl pr-32 lg:pr- text-start font-bold'>
              Start living your best life <br />
              from <span className='text-[#2a308c]'>Day One</span>
            </h1>
            <p className="text-start text-[#4E5253] text-lg mt-5">
              Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. 
              Everything else - furniture, appliances, food - has already been taken care of.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SectionOne
