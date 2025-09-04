'use client';
import Image from "next/image";

// SVG
import Skills from "@/app/components/Skills";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
import Projects from "@/app/components/Projects";
import Navigation from "@/app/components/Navigation";



export default function Home() {

  return (
    <>
      <Navigation />
      <About section={"about"}/>
      <Skills section={"skills"}/>
      <Education section={"education"}/>
      <Experience section={"experience"}/>
      <Projects section={"projects"}/>
    </>
  );
}
