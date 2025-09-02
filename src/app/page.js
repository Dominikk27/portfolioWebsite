'use client';
import Image from "next/image";

// SVG
import EducationCard from "@/app/components/ui/educationCard";
import Skills from "@/app/components/Skills";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";



export default function Home() {

  return (
    <>
      <About />
      <Skills />
      <Education />
      <Experience />
      
    </>
  );
}
