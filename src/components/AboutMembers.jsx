import React from 'react'
import Teamimg from "../assets/about-us3.avif"
const AboutMembers = () => {
  return (
<div className="container mx-auto py-20">
<div className="flex flex-wrap">
<div className="lg:mt-20 w-full lg:w-1/2 text-center lg:text-start leading-11">
<h1 className=' text-2xl lg:text-4xl font-bold'>You need friends there, <br />
<span className='text-[#80bf1e] '>so 2000+ of us are here</span>
</h1>
<p className='py-12 text-center lg:text-start text-xl text-[#808080]'>The dream only Anindya and Sandeep once shared has now found a niche in the hearts of 2,000+ individuals who wake up in the morning just to ensure Stanza Living delivers on the promise made to you.
</p>
<p className='cursor-pointer hover:underline  text-center lg:text-start text-xl text-[#80bf1e]'>
    Meet The Dream-Valley Members
</p>

</div>
<div className="w-full lg:w-1/2 mt-8 lg:mt-0 justify-center items-center">
<img src={Teamimg} alt="" className='img-fluid rounded-2xl'/>
</div>
</div>
<h1 className='text-center py-32 text-2xl lg:text-4xl font-bold'>You inspire our work,
 <br />
<span className='text-[#80bf1e] '>so the world notices it too</span>
</h1>
</div>
  )
}

export default AboutMembers