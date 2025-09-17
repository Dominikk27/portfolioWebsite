import React from 'react'
import EducationCard from './ui/educationCard'

import { motion, hover } from 'motion/react';
import { cardsVariant, educationTable, rtlFadeIn } from './animations/animations';
import { useTranslations } from 'next-intl';

const Education = ({ section }) => {
  const t = useTranslations('Education');

  return (
    <motion.section 
      initial={{opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.2,
      }}
      id={section} className="container min-h-[calc(100vh-4rem)] grid grid-cols-1 justify-center items-center mx-auto gap-[1.38rem] px-4
                    sm:grid-cols-4
                    md:grid-cols-8 md:max-w-[890] md:gap-[2rem] md:justify-center md:items-center
                    lg:grid-cols-12 lg:max-w-[1190px]
                    xl:grid-cols-12 xl:max-w-[1280px] ">

        <div className="col-span-1 flex flex-col
                        sm:col-span-4
                        md:col-span-7
                        lg:col-span-7 lg:col-start-6">
            <motion.h1 
              variants={rtlFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1}}
              className='font-display-h1 text-white
                           text-phone-h1
                           md:text-md-h1
                           xl:text-xl-h1'>{t('title.first')} <span className='text-accent'>{t('title.second')}</span></motion.h1>
            <motion.p 
              variants={rtlFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1}}
              className='text-white text-center text-para-med font-para-med
                            md:text-justify md:text-md-para
                            xl:text-xl-para'>{t('description')}</motion.p>
        </div>
        <motion.div 
          variants={educationTable}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="col-span-1 order-2 grid grid-cols-1 justify-center gap-3 h-fit
                       sm:order-3
                       md:col-span-5 md:grid-cols-2 md:gap-x-[3rem]
                       lg:col-span-7">
         <motion.div variants={cardsVariant}>
            <EducationCard 
              title={t('school_1.title')}
              major={t('school_1.major')}
              qualification={t('school_1.qualification')}
              years={t('school_1.years')}
              complete={true}
            />
         </motion.div>
          <motion.div variants={cardsVariant}>
            <EducationCard 
              title={t('school_2.title')}
              major={t('school_2.major')}
              qualification={t('school_2.qualification')}
              years={t('school_2.years')}
              complete={true}
            />
        </motion.div>
          <motion.div variants={cardsVariant} className="md:col-span-2 flex justify-center">
            <EducationCard 
              title={t('school_3.title')}
              major={t('school_3.major')}
              qualification={t('school_3.qualification')}
              years={t('school_3.years')}
              complete={false}
            />
          </motion.div>
      </motion.div>
      <motion.img 
        initial={{ x: "-50px", opacity: 0, scaleX: -1}}
        animate={{ x: 0, opacity: 1, scaleX: -1 }}
        exit={{ x: "-50px", opacity: 0, scaleX: -1 }}
        transition={{
          delay: 0.2,
          duration: 1,
          type: "spring", 
          stiffness: 100 
        }}
        viewport={{once: false, amount: 0.1 }}
        src='./avatars/grad2.png' className='w-[11.375rem] h-[17rem] col-span-1 order-2
                                                sm:col-span-2 sm:w-[15.5rem] sm:h-[23.3rem]
                                                md:col-span-3 md:w-[15.5rem] md:h-[23.3rem]
                                                lg:col-span-5 lg:mx-auto lg:w-[19.5rem] lg:h-[26.3rem]'/>
    </motion.section>
  )
}

export default Education