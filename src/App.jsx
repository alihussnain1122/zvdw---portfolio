import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import OurStory from './components/OurStory';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-arch-black font-body min-w-0 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Projects />
        <Services />
        <Testimonials />
        <Stats />
        <OurStory />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
