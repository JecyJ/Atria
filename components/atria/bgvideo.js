'use client';

import { useRef } from 'react'


const Bgvideo = () => {
  const videoRef = useRef()


  return (
    <section className='w-full h-96 md:h-screen md:mb-20'>
      <div className='relative mt-20 md:mt-14'>
        <div className='relative z-[2] max-w-[520px] sm:max-w-[620px] md:max-w-[1250px] m-auto hidden md:block'>
            <div className='grid grid-cols-4 gap-4 text-2xl text-[#3c4e3d] font-semibold leading-none md:max-w-[580px] ml-auto '>
              <h3>The future of health</h3>
              <h3></h3>
              <h3>brought to you today.</h3>
            </div>
            <h3 className='text-[#3c4e3d] text-lg md:text-right leading-tight md:max-w-[250px] ml-auto mt-12'>We are powering a movemnt for proactive, preventive healthcare informed by cutting-edge science and technology.</h3> 
        </div>
      </div>
    </section>
  )
}

export default Bgvideo;
