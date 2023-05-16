import Livingroom from '@components/institute/livingroom';
import Hero from '../../components/institute/hero';
import Scientists from '../../components/institute/scientists';
import Science from '@components/institute/science';
import Medicine from '@components/institute/medicine';
import Subscribe from '@components/atria/subscribe';
import Footer from '@components/atria/footer';
import Contact from '@components/institute/contact';
import Manhattan from '@components/institute/manhattan';

const Atriainstitute = () => {
  return (
    <section>
      <Hero />
      <Scientists />
      <Livingroom />
      <Science />
      <Medicine />
      <Manhattan />
      <Contact />
      <Subscribe />
      <Footer />
    </section>
  )
}

export default Atriainstitute;