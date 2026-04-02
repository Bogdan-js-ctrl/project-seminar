import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Program } from "./components/Program";
import { Benefits } from "./components/Benefits";
import { Portfolio } from "./components/Portfolio";
import { Reviews } from "./components/Reviews";
import { Pricing } from "./components/Pricing";
import { ApplyForm } from "./components/ApplyForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "Manrope, sans-serif", overflowX: "hidden" }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Program />
        <Benefits />
        <Portfolio />
        <Reviews />
        <Pricing />
        <ApplyForm />
      </main>
      <Footer />
    </div>
  );
}
