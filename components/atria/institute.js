import Image from 'next/image';
import Link from 'next/link';


const Institute = () => {
  return (
    <Link href='/atriainstitute'>
        <section className='flex w-full h-3/4 md:h-screen max-w-[520px] sm:max-w-[620px] md:max-w-[1450px] m-auto'>
            <div className='h-auto max-w-[350px] md:max-w-[1000px] p-7 md:p-40 space-y-9 md:space-y-28'>
                <div className='text-[#3c4e3d] text-center space-y-7'>
                    <h3 className='text-base md:text-2xl italic'>Delivering personalized, proactive, preventive care.</h3>
                    <h1 className='text-4xl md:text-7xl font-medium'>The Atria Institute</h1>
                </div>
                <div className='text-[#3c4e3d] text-base md:text-xl px-5 md:px-20'>
                    <p>The Atria Institute provides coordinated health care and comprehensive predictive testing to enable a highly personalized approach to well-being. Our multidisciplinary team of in-house physicians combines compassionate care with leading-edge technology, offering advanced screening for cancer, heart, metabolic, and brain disease at our on-site, state-of-the-art testing and imaging center. We empower our members to take a proactive approach to health and well-being and we provide the suport they need to get there.</p>
                 </div>
            </div>
            <Image className='md:w-full' src='/assets/images/living-room.jpg' alt = '/' width={300} height={300} />
        </section>
    </Link>    
  )
}

export default Institute;