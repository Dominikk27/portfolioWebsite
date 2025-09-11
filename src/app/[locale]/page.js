'use client';
import {useTranslations} from 'next-intl';
import Image from "next/image";

// SVG
import Skills from "@/app/[locale]/components/Skills";
import About from "@/app/[locale]/components/About";
import Experience from "@/app/[locale]/components/Experience";
import Education from "@/app/[locale]/components/Education";
import Projects from "@/app/[locale]/components/Projects";
import Navigation from "@/app/[locale]/components/Navigation";



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
