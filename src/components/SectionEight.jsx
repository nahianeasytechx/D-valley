import React from 'react'
import { movingImages } from '../data/movingImages'

const SectionEight = () => {
  return (
<div className="container mx-auto py-10 px-10 lg:px-5">
<div className="py-16">
    <h1 className='text-center text-[#0c0f3b] text-4xl font-bold leading-10'>The <span className='text-[#80bf1e]'>spotlight</span> on us</h1>
<p className='text-center text-xl text-[#4e5253] leading-10'>We don't just make second homes. We make headlines as well.</p>
</div>
<div className="marquee-container py-20">
<div className="marquee-container">
  {movingImages.map((item) => (
    <div key={item.id} className="marquee-text inline-block">
      <img src={item.img} className="w-full h-11 object-cover mx-4" alt={`brand-${item.id}`} />
    </div>
  ))}
</div>
</div>
<div className="flex justify-center">
    <button className='bg-[#669c0f] py-3 px-5 text-[18px] text-white  rounded-xl cursor-pointer hover:bg-[#80bf1e]'>Read More</button>
</div>
</div>
  )
}

export default SectionEight