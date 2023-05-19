'use client'

import { useState } from 'react';
import {BiCircle} from 'react-icons/bi'

const Fellowstructure = (props) => {
  const [toggle, setToggle] = useState()

  function handleToggle() {
    return setToggle(prevToggle => !prevToggle)
  }
  return (
    <section>
      <div className="max-w-[520px] sm:max-w-[620px] md:max-w-[1250px] w-full m-auto my-10 text-[#3c4e3d]">
        <h1 className="max-w-[520px] sm:max-w-[620px] md:max-w-[1250px] w-full m-auto mb-10 font-semibold text-5xl">Atria Academy of science & Medicine Fellows</h1>

        <ul>
          <li className='border-b-2 border-b-[#3c4e3d]'>
            <div onClick={handleToggle}>
              <div className='flex items-center space-x-8 md:space-x-28 py-4'>
                <BiCircle className='text-[#3c4e3d]' size={24} />
                <div className='md:flex items-center md:space-x-36 w-full'>
                  <h1 className="text-3xl">{props.name}</h1>
                  <h2 className="text-sm">{props.title}</h2>
                </div>                
              </div>              
              <div className={!toggle ? "fixed hidden ease-in-out duration-700 space-y-5 mt-10 text-sm max-w-[430px] md:max-w-[700px] ml-auto" : "space-y-5 mt-10 text-sm max-w-[430px] md:max-w-[700px] ml-auto ease-in-out duration-700"}>
                <p>{props.paragraph1}</p>
                <p>{props.paragraph2}</p>
                <p>{props.paragraph3}</p>
                <p>{props.paragraph4}</p>
                <p>{props.paragraph5}</p>
                <p>{props.paragraph6}</p>
                <p>{props.paragraph7}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Fellowstructure;