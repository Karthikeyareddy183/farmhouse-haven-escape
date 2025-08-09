import Navbar from "@/components/farmhouse/Navbar";
import Hero from "@/components/farmhouse/Hero";
import About from "@/components/farmhouse/About";
import Gallery from "@/components/farmhouse/Gallery";
import Pricing from "@/components/farmhouse/Pricing";
import Events from "@/components/farmhouse/Events";
import Contact from "@/components/farmhouse/Contact";
import Footer from "@/components/farmhouse/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Pricing />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
