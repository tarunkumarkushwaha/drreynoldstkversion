import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhoWeHelp from "@/components/WhoWeHelp";
import Expertise from "@/components/Expertise";
import HowWeWork from "@/components/HowWeWork";
import Specialties from "@/components/Specialties";
import ScheduleCta from "@/components/ScheduleCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <WhoWeHelp />
        <Expertise />
        <HowWeWork />
        <Specialties />
        <ScheduleCta />
      </main>
      <Footer />
    </>
  );
}
