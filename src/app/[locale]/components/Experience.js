import React from 'react'

import { motion, hover } from 'motion/react';

import { TbSettings } from "react-icons/tb";
import { FaDesktop } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { IoWarningOutline } from "react-icons/io5";
import { bttFadeIn, ltrFadeIn } from './animations/animations';
import { useTranslations } from 'next-intl';

const Experience = ({ section }) => {

  const t = useTranslations('Experience');

  const ExperienceSections = [
    {
      icon: TbSettings,
      title: t('Card.experiencePoint1.title'),
      points: [
        t('Card.experiencePoint1.point1'),
        t('Card.experiencePoint1.point2'),
        t('Card.experiencePoint1.point3'),
      ]
    },
    {
      icon: FaDesktop,
      title: t('Card.experiencePoint2.title'),
      points: [
        t('Card.experiencePoint2.point1'),
        t('Card.experiencePoint2.point2'),
        t('Card.experiencePoint2.point3'),
      ]
    },
    {
      icon: FiGlobe,
      title: t('Card.experiencePoint3.title'),
      points: [
        t('Card.experiencePoint3.point1'),
        t('Card.experiencePoint3.point2'),
        t('Card.experiencePoint3.point3'),
      ]
    },
    {
      icon: IoWarningOutline,
      title: t('Card.experiencePoint4.title'),
      points: [
        t('Card.experiencePoint4.point1'),
        t('Card.experiencePoint4.point2'),
        t('Card.experiencePoint4.point3'),
      ]
    }
  ];

  return (
    <motion.section 
      initial={{opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.2,
      }}
      id={section} className="container min-h-screen grid grid-cols-1 justify-center items-center mx-auto gap-[1.38rem] px-4
                    sm:grid-cols-4
                    md:grid-cols-8 md:max-w-[890] md:gap-[2rem] md:justify-center md:items-center
                    lg:grid-cols-12 lg:max-w-[1190px]
                    xl:grid-cols-12 xl:max-w-[1280px] ">
      <div className="col-span-1 flex flex-col
                      sm:col-span-4
                      md:col-span-7
                      lg:col-span-8">
        <motion.h1 
          variants={ltrFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1}}
          className='font-display-h1 text-white
                       text-phone-h1
                       md:text-md-h1
                       xl:text-xl-h1'>{t('title.first')} <span className='text-accent'>{t('title.second')}</span></motion.h1>
        <motion.p 
          variants={ltrFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1}}
          className='text-white text-center text-para-med font-para-med
                          md:text-justify md:text-md-para
                          xl:text-xl-para'>{t('description')}</motion.p>
      </div>
      <motion.div 
        variants={bttFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1}}
        className="flex col-span-1 justify-center
                      sm:col-span-4
                      md:col-span-5
                      lg:col-span-7 lg:justify-start">
        <div className="w-[570px] flex flex-col rounded-[2rem] bg-sand py-[1.45rem] px-2
                        lg:w-[660px]">
          <h2 className='text-phone-h2 text-accent font-[700]'>{t('Card.title')}</h2>
          <div className="flex flex-row justify-between items-center mb-2">
            <h3 className='text-phone-h3 font-[600]'>{t('Card.Company')}</h3>
            <h3 className='text-phone-h3 text-accent '>{t('Card.years')}</h3>
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
      </motion.div>
      <div className="col-span-1 flex justify-center
                      sm:col-span-4 sm:justify-end
                      md:col-span-3 md:justify-end
                      lg:col-span-5 lg:justify-center">
        <motion.img 
          initial={{ x: "50px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "50px", opacity: 0 }}
        transition={{
          delay: 0.2,
          duration: 1,
          type: "spring", 
          stiffness: 100 
        }}
        viewport={{once: false, amount: 0.1 }}
          src="./avatars/experience.png" alt="Avatar with experience" 
             className='rounded-b-2xl w-[13.75rem] h-[17.7rem]
                        sm:w-[16.8rem] sm:h-[21.6rem] sm:rounded-4xl
                        lg:w-[18rem] lg:h-[24rem] lg:rounded-4xl
                        xl:scale-140 xl:rounded-4xl' />
      </div>
    </motion.section>
  )
}

export default Experience