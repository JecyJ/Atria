import Image from 'next/image';
import Link from 'next/link';

const Health = () => {
  return (
    <Link href='/atriahealth'>
        <section className='flex w-full h-3/4 md:h-screen max-w-[520px] sm:max-w-[620px] md:max-w-[1450px] m-auto'>
            <div className='h-auto max-w-[350px] md:max-w-[1000px] p-7 md:p-40 space-y-9 md:space-y-28'>
                <div className='text-[#3c4e3d] text-center space-y-7'>
                    <h3 className='text-base md:text-2xl italic'>Commiting to the greater good.</h3>
                    <h1 className='text-4xl md:text-7xl font-medium'>The Atria Health Collaborative</h1>
                </div>
                <div className='text-[#3c4e3d] text-base md:text-xl px-5 md:px-20'>
                    <p>The Atria Health Collaborative is a nonprofit organization that engages the expertise, passion, and resources of the entire Atria team to improve health care at scale. We bring together a community of doctors, reaserchers, and public health experts to invest in and promote proven intervention and promising new approaches to preventable and reneuable diseases.</p>
                </div>
            </div>
            <Image className='md:w-full' src='/assets/images/sofa.jpg' alt = '/' width={300} height={300} />
        </section>
    </Link>   
  )
}

export default Health;
