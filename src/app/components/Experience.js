import React from 'react'

import { TbSettings } from "react-icons/tb";
import { FaDesktop } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { IoWarningOutline } from "react-icons/io5";


const ExperienceSections = [
  {
    icon: TbSettings,
    title: "Management and Maintenance ",
    points: [
      "Installed and configured new devices.",
      "Ensured regular software updates and system stability.",
      "Centralized router management via Vigor ACS and setup of VPN connections."
    ]
  },
  {
    icon: FaDesktop,
    title: "Configuration and Administration",
    points: [
      "Synology NAS setup and management.",
      "Configuration of Vigor routers and APs.",
      "Centralized router management using Vigor ACS."
    ]
  },
  {
    icon: FiGlobe,
    title: "Network Administration",
    points: [
      "Implemented VPN connections for secure remote access.",
      "Setup and troubleshooting of VPN connections.",
      "Configured firewall rules to protect internal network."
    ]
  },
  {
    icon: IoWarningOutline,
    title: "Troubleshooting technical issues",
    points: [
      "Diagnosing and resolving hardware and software issues.",
      "Providing technical assistance to end-users.",
      "Provided real-time support to ensure minimal downtime for end-users."
    ]
  }
];

const Experience = () => {
  return (
    <div className="container grid grid-cols-1 justify-center items-center mx-auto gap-[1.38rem] px-4
                    sm:grid-cols-4
                    md:grid-cols-8 md:max-w-[890] md:gap-[2rem] md:justify-center md:items-center
                    lg:grid-cols-12 lg:max-w-[1190px]
                    xl:grid-cols-12 xl:max-w-[1280px] ">
      <div className="col-span-1 flex flex-col
                      sm:col-span-4
                      md:col-span-7
                      lg:col-span-8">
        <h1 className='font-display-h1 text-white
                       text-phone-h1
                       md:text-md-h1
                       xl:text-xl-h1'>My <span className='text-accent'>Experience</span></h1>
        <p className='text-white text-center text-para-med font-para-med
                          md:text-justify md:text-md-para
                          xl:text-xl-para'>I have gained valuable experience in IT, where I apply my knowledge in practice, improve my technical skills, and contribute to solving real-world problems.</p>
      </div>
      <div className="flex col-span-1 justify-center
                      sm:col-span-4
                      md:col-span-5
                      lg:col-span-7 lg:justify-start">
        <div className="w-[570px] flex flex-col rounded-[2rem] bg-sand py-[1.45rem] px-2
                        lg:w-[660px]">
          <h2 className='text-phone-h2 text-accent font-[700]'>IT Technician</h2>
          <div className="flex flex-row justify-between items-center mb-2">
            <h3 className='text-phone-h3 font-[600]'>HSConsult s.r.o.</h3>
            <h3 className='text-phone-h3 text-accent '>2024 - Present</h3>
          </div>
          <div className=" grid grid-cols-1 gap-2">
            {ExperienceSections.map((section, idx) => (
              <div key={`${idx}`} className="mb-6">
                <div className="flex gap-[0.5rem] items-center">
                  <section.icon className='w-[1.8rem] h-[1.8rem] text-accent'/>
                  <h4 className="font-[600]">{section.title}</h4>
                </div>
                <div className="flex flex-col gap-[0.5rem]">
                  {section.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-2 ml-10">
                    <div className="min-w-5 h-1 bg-accent mt-2 rounded-[0.2rem]"></div>
                    <p className="">{point}</p>
                  </div>
                ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-1 flex justify-center
                      sm:col-span-4 sm:justify-end
                      md:col-span-3 md:justify-end
                      lg:col-span-5 lg:justify-center">
        <img src="./avatars/experience.png" alt="Avatar with experience" 
             className='rounded-b-2xl w-[13.75rem] h-[17.7rem]
                        sm:w-[16.8rem] sm:h-[21.6rem] sm:rounded-4xl
                        lg:w-[18rem] lg:h-[24rem] lg:rounded-4xl
                        xl:scale-140 xl:rounded-4xl' />
      </div>
    </div>
  )
}

export default Experience