import Image from "next/image";


const Heropage2 = () => {
  return (
    <section className='grid content-center pt-96 w-full h-screen'>
      <div className='z-[-2]'>
        <Image src='/assets/images/cone.png' alt='/' layout='fill' objectFit='cover' />
      </div>
      <div className='max-w-[520px] sm:max-w-[620px] md:max-w-[1450px] w-full m-auto space-y-20 text-white'>
        <h1 className='text-lg md:text-3xl'>Personalized, Proactive, Preventive care</h1>
        <div className='text-6xl md:text-9xl'>
            <h1>The future of</h1>
            <h1>medicine today.</h1>
        </div>
      </div>
    </section>
  )
}

export default Heropage2;

{/* <div className=''>
      <div className='z-[-2]'>
        <Image src={cone} alt='/' layout='fill' objectFit='cover' />
      </div>


      <div className='relative w-full'>
        <div className=' max-w-[520px] text-white sm:max-w-[620px] md:max-w-[1450px] m-auto pt-48 md:pt-56 h-auto space-y-7'>
          <h3 className='max-w-[520px] sm:max-w-[620px] md:max-w-[1450px] m-auto text-lg md:text-3xl'>Personalized, Proactive, Preventive care</h3>
          <div className='max-w-[520px] sm:max-w-[620px] md:max-w-[1450px] m-auto text-6xl md:text-9xl'>
            <h1>The future of</h1>
            <h1>medicine today.</h1>
          </div>                
        </div>
      </div> */}
