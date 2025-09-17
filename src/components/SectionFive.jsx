import React from 'react'
import hostel1 from "../assets/hostelpg1.png";
import hostel2 from "../assets/hostelpg2.png";
import hostel3 from "../assets/hostelpg-3.png";

const SectionFive = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="container mx-auto ">
        


        {/* Flex wrapper */}
        <div className="flex flex-wrap gap-x-10 py-12 md:py-16 lg:py-[120px]">
          
          {/* h1 for mobile (above images) */}
          <div className="w-full order-1 lg:hidden">
            <h1 className='text-2xl md:text-3xl text-center font-bold'>
            Don't come expecting <br />
              from <span className='text-[#60C3AD]'>"hostel-PG food"</span>
            </h1>
          </div>

          {/* IMAGE BLOCK */}
          <div className="py-10 lg:py-0 w-full lg:w-[45%] flex gap-x-2 order-2 lg:order-1">
            <div className="w-1/2">
              <img src={hostel1} alt="bestlife1.png" />
            </div>
            <div className="w-1/2 flex flex-col gap-y-10">
              <img src={hostel2} alt="bestlife2.png" className='rounded-xl' />
              <img src={hostel3} alt="bestlife3.png" className='rounded-xl' />
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
            <h1 className='text-4xl pr-32 lg:pr-16 text-start font-bold'>
             Don't come expecting<br />
              from <span className='text-[#60C3AD]'>"hostel-PG food"</span>
            </h1>
            <p className="text-start text-[#4E5253] text-lg mt-5">
            Instead, bring along a big appetite for healthy, yummy meals. With flavours that have a local touch. And that, at the same time, take your taste buds on a journey back home.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SectionFive;
