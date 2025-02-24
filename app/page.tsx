import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Hero from "./components/Hero";
import {MyApproach} from "./components/MyApproach";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    
    <div className="max-w-7xl mx-auto">
      <Navbar/>
        <Hero />
        <Grid/>
        <Projects />
        <Technologies/>
        <ContactInfo/>
        <MyApproach/>
        <Footer/>
    </div>
   
   
)}
