import Image from "next/image";


const Hero = () => {
  return (
    <section className='grid content-center pt-96 w-full h-screen'>
      <div className='z-[-2]'>
        <Image src='/assets/images/stetoscope.png' alt='/' layout='fill' objectFit='cover' />
      </div>
      <div className='max-w-[520px] sm:max-w-[620px] md:max-w-[1450px] w-full m-auto space-y-20 text-white'>
        <h1 className='text-lg md:text-3xl'>Guiding a transformation in medicine</h1>
        <div className='text-6xl md:text-9xl'>
            <h1>Discovering <br className="md:hidden"/>what is</h1>
            <h1>biologically possible.</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero;
