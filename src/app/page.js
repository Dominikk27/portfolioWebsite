'use client';
import Image from "next/image";

// SVG
import Skills from "@/app/components/Skills";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
import Projects from "@/app/components/Projects";



export default function Home() {

  return (
    <>
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </>
  );
}
