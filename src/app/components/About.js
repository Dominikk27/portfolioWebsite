import React from 'react'
import Image from 'next/image';
import elipse from '../../../public/shapes/elipse.svg';
import Elipse from '@/app/components/svg/elipse';
import { GithubIcon, LinkedinIcon } from './svg/icons';


import { motion, hover } from 'motion/react';
import { rtlFadeIn, bttFadeIn, ttbFadeIn } from '@/app/components/animations/animations';

const About = ({section}) => {

  return (
    <motion.section 
      initial={{opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.2,
      }}
      viewport={{ once: true, amount: 0.3 }}
      id={section} className="container min-h-[calc(100vh-4rem)] grid grid-cols-1 justify-start items-start mx-auto gap-[2.5rem] px-4
                    sm:grid-cols-4
                    md:grid-cols-8 md:max-w-[890] md:gap-[2rem] md:justify-center md:items-center
                    lg:grid-cols-12 lg:max-w-[1190px]
                    xl:grid-cols-12 xl:max-w-[1280px]">
        <motion.div 
          initial={{ x: "-50px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-50px", opacity: 0 }}
          transition={{
            delay: 0.2,
            duration: 1,
            type: "spring", 
            stiffness: 100 
          }}
          viewport={{once: true, amount: 0.1 }}
          className="relative flex w-[19.75rem] h-[21.63256rem] justify-center items-center mx-auto z-[-10] 
                      sm:col-span-4
                      md:col-span-3 md:justify-start
                      lg:col-span-6 lg:w-[31.6rem] lg:h-[34.8rem]">
          <Elipse className='fill-sand absolute bottom-0 left-0 w-ful' />
          <Elipse className='fill-accent absolute top-0 left-0 w-full'/>
          <Image
          className='absolute top-0 left-0'
          width={577}
          height={618}
          alt=""
          src="/shapes/dotsOverlay.svg" />
          <Elipse className='fill-accent absolute top-0 opacity-85'/>
          
          {/* AVATAR */}
          <img
              className='absolute w-[11.84313rem] h-[17.354rem] translate-y-15 scale-x-[-1]
                         md:translate-x-17
                         lg:w-[21.625rem] lg:h-[31.6875rem] lg:translate-y-25 lg:md:translate-x-25' 
              src="/avatars/avatar.png"/>
          
          {/* SOCIALS */}
          <div className="absolute bottom-0 left-1 flex gap-2
                          lg:bottom-[-12]">
            <motion.a 
              variants={bttFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1}}
              whileHover={{ rotate: 360, scale: 1.1 }}
              href="https://linkedin.com/in/dominik-bucak/" target='_blank' className="socialBtn w-[1.875rem] h-[1.875rem] bg-cream rounded-[0.375rem] flex items-center justify-center hover:bg-accent transition duration-300 ease-in-out transform hover:scale-110
                                   lg:w-[2.2rem] lg:h-[2.2rem]">
              <LinkedinIcon />
            </motion.a>
            <motion.a 
              variants={bttFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ rotate: 360, scale: 1.1 }} 
              href="https://github.com/Dominikk27" target='_blank' className="socialBtn w-[1.875rem] h-[1.875rem] bg-cream rounded-[0.375rem] flex items-center justify-center hover:bg-accent transition duration-300 ease-in-out transform hover:scale-110
                                   lg:w-[2.2rem] lg:h-[2.2rem]">
              <GithubIcon />
            </motion.a>
          </div>
        </motion.div>
      <div className="w-full flex flex-col z-[-10]
                      sm:col-span-4 sm:items-start sm:justify-start
                      md:col-span-5 md:pl-[2rem]
                      lg:col-span-6 lg:pl-0">
          <motion.h4
            variants={ttbFadeIn}
            initial="hidden"
            whileInView="visible"
            className='font-text-h4 text-phone-h4 leading-phone-h4 text-white
                         xl:text-xl-h4'>Hello,</motion.h4>
          <motion.h1 
            variants={rtlFadeIn}
            initial="hidden"
            whileInView="visible"
            className='font-display-h1 text-white
                         text-phone-h1
                         md:text-md-h1
                         xl:text-xl-h1'>I am <span className='text-accent'>Dominik Bučák</span></motion.h1>
          <motion.p
            variants={rtlFadeIn}
            initial="hidden"
            whileInView="visible"
            className='text-white text-center text-para-med font-para-med
                          md:text-justify md:text-md-para
                          xl:text-xl-para'>I enjoy programming and building web applications with React, Node.js and MongoDB. I like learning new things, exploring different technologies and improving with every project.</motion.p>
          <div className="w-full flex flex-row-reverse gap-[2rem] justify-center items-center mt-[1.625rem] px-[1rem]
                          md:justify-end md:px-0 md:flex-row">
            <motion.a 
              variants={bttFadeIn}
              initial="hidden"
              whileInView="visible"
              className='w-full h-[2.4375rem] rounded-[0.375rem] bg-cream btn-text flex items-center justify-center
                               md:w-[10.6875rem] md:h-[2.4375rem]'>Read More</motion.a>
            <motion.a 
              variants={bttFadeIn}
              initial="hidden"
              whileInView="visible"
              href='mailto:dominikbucak@gmail.com'
              className='w-full h-[2.4375rem] rounded-[0.375rem] bg-accent btn-text flex items-center justify-center 
                               md:w-[10.6875rem] md:h-[2.4375rem]'>Contact Me</motion.a>
          </div>
      </div>
    </motion.section>
  )
}

export default About