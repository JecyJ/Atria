'use client';

import { useRef } from 'react'


const Bgvideo = () => {
  const videoRef = useRef()


  return (
    <section className='w-full h-96 md:h-screen md:mb-20'>
      <div className='relative mt-20 md:mt-14'>
        <div className='relative z-[2] max-w-[520px] sm:max-w-[620px] md:max-w-[1450px] m-auto hidden md:block'>
            <div className='grid grid-cols-4 gap-4 text-2xl text-[#3c4e3d] font-semibold leading-none md:max-w-[580px] ml-auto '>
              <h3>The future of health</h3>
              <h3></h3>
              <h3>brought to you today.</h3>
            </div>
            <h3 className='text-[#3c4e3d] text-lg md:text-right leading-tight md:max-w-[250px] ml-auto mt-12'>We are powering a movemnt for proactive, preventive healthcare informed by cutting-edge science and technology.</h3> 
        </div>
        <video className='absolute z-[-2] top-0 mb-12' ref={videoRef} autoPlay muted loop>
          <source src="https://player.vimeo.com/progressive_redirect/playback/706623327/rendition/1080p/file.mp4?loc=external&signature=ed7dba00d0c744d47c741d3541ff35e1b751748731af0a1591bdaa8d38093e33" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default Bgvideo;
