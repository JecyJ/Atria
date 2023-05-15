import Image from 'next/image';
import {RiDoubleQuotesL, RiDoubleQuotesR} from 'react-icons/ri'


const Scientistspage2 = () => {
  return (
    <section className='w-full h-auto'>
      <div className='relative max-w-[520px] sm:max-w-[620px] md:max-w-[1450px] m-auto'>
        <ul className='top-12 border-t border-t-[#3c4e3d] border-t-3 max-w-[520px] md:max-w-[1450px] m-auto my-20 text-[#3c4e3d]'>
          <Image className='absolute right-0' src='/assets/images/rope.jpg' alt='/' width={200} height={200} />
          <li className='flex relative text-[#3c4e3d] h-28 py-10'><RiDoubleQuotesL size={28}  /><RiDoubleQuotesR size={28}  /></li>
          <li className='relative md:z-[2] text-[#3c4e3d] text-4xl md:text-7xl font-semibold'>Atria brings together scientists, reasherchers, and doctors to translate science into clinical practice in real time.</li>
        </ul>
        <Image className='absolute' src='/assets/images/stackedrock.jpg' alt='/' width={200} height={200} />             
      </div>

      <div className='relative flex flex-cols max-w-[520px] md:max-w-[1450px] w-full m-auto mb-20'>
        <p className='w-full h-96 md:h-96'></p>
        <div className='max-w-[400px] md:max-w-[1200px]'>
          <p className='text-[#3c4e3d] text-2xl md:text-4xl font-medium leading-tight w-[300px] md:w-full '>We are shifting the medical paradigm from reactive sick care to personalized, proactive, preventive care that fosters lifelong health and well-being.</p>
        </div>
      </div>
    </section>
  )
}

export default Scientistspage2;
