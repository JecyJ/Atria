import Academy from "@components/atria/academy";
import Bgvideo from "@components/atria/bgvideo";
import Footer from "@components/atria/footer";
import Health from "@components/atria/health";
import Hero from "@components/atria/hero";
import Institute from "@components/atria/institute";
import Learning from "@components/atria/learning";
import Medicalminds from "@components/atria/medicalminds";
import Mission from "@components/atria/mission";
import Subscribe from "@components/atria/subscribe";

const Atria = () => {
  return (
    <section className="">
      <Hero />
      <Bgvideo />
      {/* <Learning /> */}
      <Mission />
      <Medicalminds />
      <Institute />
      <Academy />
      <Health />
      <Subscribe />
      <Footer />
    </section>
  )
}

export default Atria;