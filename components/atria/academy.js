import Link from 'next/link';
import Image from 'next/image';


const Academy = () => {
  return (
    <Link href='/atriaacademy'>
        <section className='my-10'>
            <div className='flex w-full h-3/4 md:h-screen max-w-[520px] sm:max-w-[620px] md:max-w-[1450px] m-auto'>
                <div className='h-auto max-w-[350px] md:max-w-[1000px] p-7 md:p-40 space-y-9 md:space-y-28'>
                    <div className='text-[#3c4e3d] text-center space-y-7'>
                        <h3 className='text-base md:text-2xl italic'>Translating science into medicine.</h3>
                        <h1 className='text-4xl md:text-7xl font-medium'>The Academy of Science & Medicine</h1>
                    </div>
                    <div className='text-[#3c4e3d] text-base md:text-xl px-5 md:px-20'>
                        <p>The Atria Academy of science & Medicine is made up of more than 50 leading scientist, researchers, and doctors from institutions around the world. The Academy exists to translate science into medicine, accelerating the speed by which breakthrough can reach patients, doctors and the public. The Academy helps clinicians refine diagnostic and treatment protocols as well as disease-prevention strategies, and works with the Atria Collaborative to deliver critical, life-changing information and care.</p>
                    </div>
                </div>
                <Image 
                    className='md:w-full' 
                    src="/assets/images/couch.jpg"
                    alt = '/' 
                    width={300} height={300} />
            </div>
        </section>
    </Link>   
  )
}

export default Academy;
