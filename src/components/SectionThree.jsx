import React from 'react';
import dailylist1 from "../assets/dailylist1.png"
import dailylist2 from "../assets/dailylist2.png"

const SectionThree = () => {
  return (
    <div className="">
      <div className="container mx-auto ">
        {/* Flex wrapper */}
        <div className="flex flex-wrap gap-x-10 py-12 md:py-16 lg:py-[120px]">
          
          {/* h1 for mobile (above images) */}
          <div className="w-full order-1 lg:hidden">
            <h1 className='text-[#0c0f3b] text-2xl md:text-3xl text-center font-bold'>
        Take your daily list of <br />
chores. And <span className='text-[#80bf1e]'>tear it up</span>
            </h1>
          </div>

          {/* IMAGE BLOCK */}
          <div className="relative py-10 lg:py-0 w-full lg:w-[45%] flex justify-center items-center gap-x-2 order-2 ">
            <div className="w-1/2">
        <img src={dailylist1} alt="" />
            </div>
<div className="w-1/2 absolute left-[50%] top-[30%]">

<img src={dailylist2} alt="" />
</div>
          </div>

          {/* p for mobile (below images) */}
          <div className="w-full order-3 lg:hidden">
            <p className="text-center text-[#4E5253] md:text-lg mt-5">
           You have better things to do than wash your clothes, clean up your room and cook your meals. So our team of pros will do them all for you.
            </p>
          </div>

          {/* TEXT BLOCK for lg (h1 + p stacked) */}
          <div className="hidden lg:flex w-[45%] py-5 flex-col justify-center items-start order-1">
            <h1 className='text-[#0c0f3b] text-4xl pr-32 lg:pr-2 text-start font-bold'>
             Take your daily list of <br />
chores. And <span className='text-[#80bf1e]'>tear it up</span>
            </h1>
            <p className="text-start text-[#4E5253] text-lg mt-5">
           You have better things to do than wash your clothes, clean up your room and cook your meals. So our team of pros will do them all for you.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SectionThree
