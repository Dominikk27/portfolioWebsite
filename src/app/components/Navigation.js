import React, { useEffect, useState } from 'react'
import { RiAttachment2 } from "react-icons/ri";

import { motion, hover } from 'motion/react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() =>{
    const handleScroll = () =>{
      if(window.scrollY > 50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed w-full px-[2rem] py-2 flex justify-between items-center transition-all duration-500 ease-in
                    ${scrolled ? "bg-black/10 backdrop-blur-md z-100" : ""}`}>
        <motion.a 
          whileHover={{rotate: 360}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          href='#about'
          className='text-display-h1 text-accent font-display-h1'>B.</motion.a>
        <div className="flex gap-6 text-base font-medium text-white items-center justify-center">
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#skills" className="hover:text-accent">Tools</a>
            <a href="#education" className="hover:text-accent">Education</a>
            <a href="#experience" className="hover:text-accent">Experience</a>
            <a href="#projects" className="hover:text-accent">Projects</a>
            <a href="./cv/BučákDominik.pdf" download className="hover:text-ink flex justify-center items-center gap-[0.2rem] rounded-full bg-accent w-[6.6875rem] h-[2.4375rem]"> <RiAttachment2 /> Resume</a>
        </div>
    </div>
  )
}

export default Navigation