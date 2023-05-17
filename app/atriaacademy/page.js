import Hero from '@components/academy/hero';
import Learnmore from '@components/academy/learnmore';
import Scienceofficer from '@components/academy/scienceofficer';
import Footer from '@components/atria/footer';
import Subscribe from '@components/atria/subscribe';
import Contact from '@components/institute/contact';
import Stones from '@components/academy/stones';
import React from 'react'
import Scientific from '@components/academy/scientific';
import Leaders from '@components/academy/leaders';
import Fellows from '@components/academy/fellows';

const Atriaacademy = () => {
  return (
    <section>
      <Hero />
      <Scienceofficer />
      <Stones />
      <Scientific />
      <Leaders />
      <Fellows />
      <Learnmore />
      <Contact />
      <Subscribe />
      <Footer />
    </section>
  )
}

export default Atriaacademy;