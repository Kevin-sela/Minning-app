import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/testimonials";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import Portfolio from "./components/Portfolio";
import Analytics from "./components/Analytics";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Analytics/>
        <Portfolio/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
