import React, { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/footer"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Analytics = lazy(() => import("./components/Analytics"));

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white scroll-smooth">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Testimonials />
          <Contact />
          <Analytics />
          <Portfolio />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
