import React from 'react'
import fellowsData from './fellowsdata';
import Fellowstructure from './fellowstructure';

const Fellows = () => {
    const fellowsList = fellowsData.map(item => {
        return (
            <Fellowstructure
                key={item.id}
                {...item}
             />
        )
    })
  return (
    <section>
        {fellowsList}
    </section>
  )
}

export default Fellows;