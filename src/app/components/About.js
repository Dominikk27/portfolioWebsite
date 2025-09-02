import React from 'react'
import Image from 'next/image';
import elipse from '../../../public/shapes/elipse.svg';
import Elipse from '@/app/components/svg/elipse';
import { GithubIcon, LinkedinIcon } from './svg/icons';

const About = () => {
  return (
    <div className="container grid grid-cols-1 justify-start items-start mx-auto gap-[2.5rem] px-4
                    sm:grid-cols-4
                    md:grid-cols-8 md:max-w-[890] md:gap-[2rem] md:justify-center md:items-center
                    lg:grid-cols-12 lg:max-w-[1190px]
                    xl:grid-cols-12 xl:max-w-[1280px]">
      <div className="relative flex w-[19.75rem] h-[21.63256rem] justify-center items-center mx-auto
                      sm:col-span-4
                      md:col-span-3 md:justify-start
                      lg:col-span-6 lg:w-[31.6rem] lg:h-[34.8rem]">
          <Elipse className='fill-sand absolute bottom-0 left-0 w-full' />
          <Elipse className='fill-accent absolute top-0 left-0 w-full'/>
          <Image
          className='absolute top-0 left-0'
          width={577}
          height={618}
          alt=""
          src="/shapes/dotsOverlay.svg" />
          <Elipse className='fill-accent absolute top-0 opacity-85' />
          
          {/* AVATAR */}
          <img
              className='absolute w-[11.84313rem] h-[17.354rem] translate-y-15 scale-x-[-1]
                         md:translate-x-17
                         lg:w-[21.625rem] lg:h-[31.6875rem] lg:translate-y-25 lg:md:translate-x-25' 
              src="/avatars/avatar.png"/>
          
          {/* SOCIALS */}
          <div className="absolute bottom-0 left-1 flex gap-2
                          lg:bottom-[-12]">
            <a href="#" className="w-[1.875rem] h-[1.875rem] bg-cream rounded-[0.375rem] flex items-center justify-center hover:bg-accent transition duration-300 ease-in-out transform hover:scale-110
                                   lg:w-[2.2rem] lg:h-[2.2rem]">
              <LinkedinIcon />
            </a>
            <a href="#" className="w-[1.875rem] h-[1.875rem] bg-cream rounded-[0.375rem] flex items-center justify-center hover:bg-accent transition duration-300 ease-in-out transform hover:scale-110
                                   lg:w-[2.2rem] lg:h-[2.2rem]">
              <GithubIcon />
            </a>
          </div>
      </div>
      <div className="w-full flex flex-col
                      sm:col-span-4 sm:items-start sm:justify-start
                      md:col-span-5 md:pl-[2rem]
                      lg:col-span-6 lg:pl-0">
          <h4 className='font-text-h4 text-phone-h4 leading-phone-h4 text-white
                         xl:text-xl-h4'>Hello,</h4>
          <h1 className='font-display-h1 text-white
                         text-phone-h1
                         md:text-md-h1
                         xl:text-xl-h1'>I am <span className='text-accent'>Dominik Bučák</span></h1>
          <p className='text-white text-center text-para-med font-para-med
                          md:text-justify md:text-md-para
                          xl:text-xl-para'>I enjoy programming and building web applications with React, Node.js and MongoDB. I like learning new things, exploring different technologies and improving with every project.</p>
          <div className="w-full flex flex-row-reverse gap-[2rem] justify-center items-center mt-[1.625rem] px-[1rem]
                          md:justify-end md:px-0 md:flex-row">
            <button className='w-full h-[2.4375rem] rounded-[0.375rem] bg-cream btn-text
                               md:w-[10.6875rem] md:h-[2.4375rem]'>Read More</button>
            <button className='w-full h-[2.4375rem] rounded-[0.375rem] bg-accent btn-text
                               md:w-[10.6875rem] md:h-[2.4375rem]'>Contact Me</button>
          </div>
      </div>
    </div>
  )
}

export default About