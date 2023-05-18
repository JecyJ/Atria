'use client'

import { useState } from 'react';
import {BiCircle} from 'react-icons/bi'

const Fellows = () => {
  const [toggle, setToggle] = useState()

  function handleToggle() {
    return setToggle(prevToggle => !prevToggle)
  }
  return (
    <section>
      <div className="max-w-[520px] sm:max-w-[620px] md:max-w-[1250px] w-full m-auto my-10 text-[#3c4e3d]">
        <h1 className="max-w-[520px] sm:max-w-[620px] md:max-w-[1250px] w-full m-auto mb-10 font-semibold text-5xl">Atria Academy of science & Medicine Fellows</h1>

        <ul>
          <li>
            <div onClick={handleToggle}>
              <div className='flex items-center space-x-8 md:space-x-28 py-4'>
                <BiCircle className='text-[#3c4e3d]' size={24} />
                <div className='md:flex items-center md:space-x-36 w-full'>
                  <h1 className="text-3xl">Dr. David W. Dodick</h1>
                  <h2 className="text-sm">Chief Science Officer & Chair, Neurology</h2>
                </div>                
              </div>              
              <div className={!toggle ? "fixed hidden ease-in-out duration-700 space-y-5 mt-10 text-sm max-w-[430px] md:max-w-[700px] ml-auto" : "space-y-5 mt-10 text-sm max-w-[430px] md:max-w-[700px] ml-auto ease-in-out duration-700"}>
                <p>Chief Science Officer & Chair, Atria Academy of Science & Medicine</p>
                <p>Dr. Dodick is Emeritus Professor of Neurology at the Mayo Clinic, where he founded and directed the Headache and Sport Neurology and Concussion Programs at Mayo Clinic in Arizona. He is a Mayo Clinic Distinguished Investigator and Distinguished Educator. He has authored more than 900 peer-reviewed manuscripts and abstracts and authored or edited 13 books. He is the Chair of the American Brain Foundation and Chair of the IHS Global Patient Advocacy Coalition. He is the Immediate Past-Chair of the American Migraine Foundation, former Editor of Cephalalgia, a Past-President of both the American Headache Society and the International Headache Society.</p>
                <p>He is Professor Emeritus at the Mayo Clinic, a consultant for Mayo Clinic International, and an Adjunct Professor at the Norwegian University of Science and Technology and the University of Copenhagen.</p>
                <p>Co-Chair at Atria Academy of Science & Medicine</p>
                <p>Chief Science Officer at Atria</p>
                <p>Professor Emeritus of Neurology at Mayo Clinic</p>
                <p>Chair at American Brain Foundation</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Fellows;