import React, { useEffect, useState } from 'react'
import { RiAttachment2 } from "react-icons/ri";
import { IoClose, IoMenu  } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";

import { motion, hover } from 'motion/react';
import { HamburgerIcon } from './svg/icons';


const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Tools" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" }
  ]

  return (
    <div className={`fixed w-full px-[2rem] py-2 flex flex-row-reverse lg:flex-row justify-between items-center transition-all duration-500 ease-in
                    ${scrolled ? "lg:bg-black/10 lg:backdrop-blur-md z-100" : ""}`}>
        <motion.a 
          whileHover={{rotate: 360}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          href='#about'
          className='text-display-h1 text-accent font-display-h1 z-[11]'>B.</motion.a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-6 text-base font-medium text-white items-center justify-center">
          {navLinks.map((link) =>(
            <a key={link.label} href={link.href} className="hover:text-accent">{link.label}</a>
          ))}
          <a href="./cv/BučákDominik.pdf" download className="hover:text-ink flex justify-center items-center gap-[0.2rem] rounded-full bg-accent w-[6.6875rem] h-[2.4375rem]"> <RiAttachment2 /> Resume</a>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden w-[2.9rem] h-[2.9rem] rounded-[0.9rem] bg-accent flex justify-center items-center" onClick={() => setIsOpen(!isOpen)}> 
          { isOpen ? (
              <IoClose className='icon'/>
            ) :
            <HiMenuAlt2 className='icon'/>
          }
        </div>

        {/* MOBILE MENU */}
        { isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-2/3 h-screen bg-black/10 backdrop-blur-lg flex flex-col items-center justify-center gap-6 text-white md:hidden z-[10]"
          >
            {navLinks.map((link) => (
              <a key={link.label}
                 href={link.href}
                 className="hover:text-accent"
                 onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="./cv/BučákDominik.pdf" download className="hover:text-ink flex justify-center items-center gap-[0.2rem] rounded-full bg-accent w-[6.6875rem] h-[2.4375rem]" onClick={() => setIsOpen(false)}> <RiAttachment2 /> Resume</a>
          </motion.div>
        )}
    </div>
  )
}

export default Navigation