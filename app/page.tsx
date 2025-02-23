import ContactInfo from "./components/ContactInfo";
import Grid from "./components/Grid";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    
    <div className="max-w-7xl mx-auto">
        <Hero />
        <Grid/>
        <Projects/>
        <Technologies/>
        <ContactInfo/>
    </div>
   
   
)}
