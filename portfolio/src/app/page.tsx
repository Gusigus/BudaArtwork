import Image from "next/image";
import About from "./component/layout/About";
import Footer from "./component/layout/Footer";
import Hero from "./component/layout/Hero";
import Navbar from "./component/layout/Navbar";
import Projects from "./component/layout/Projects";
import Exp from "./component/layout/Exp";
import './globals.css'




export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Exp/>
    <Footer/>
    </>
  );
}
