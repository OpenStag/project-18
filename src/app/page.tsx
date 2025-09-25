import About from "@/components/About";
import Departments from "@/components/Departments";
import Doctors from "@/components/Doctors";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Departments />
      <Doctors />
    </main>
  );
}

