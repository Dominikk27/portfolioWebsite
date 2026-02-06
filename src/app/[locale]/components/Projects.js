import React from 'react'
import ProjectCard from '@/app/[locale]/components/ui/projectCard'

import { motion, hover } from 'motion/react';
import { cardsVariant, educationTable, rtlFadeIn, projectsTable } from './animations/animations';
import { useTranslations } from 'next-intl';


const Projects = ({ section }) => {

     const t = useTranslations('Projects');

     return (
     <motion.section 
               initial={{opacity: 0}}
               whileInView={{ opacity: 1 }}
               transition={{
               delay: 0.2,
               }}
               id={section} className="container min-h-screen grid grid-col-1 justify-start items-start mx-auto gap-[2.5rem] px-4
                         sm:grid-cols-4
                         md:grid-cols-8
                         lg:grid-cols-12">
          <div className="w-full flex flex-col col-span-1
                         sm:col-span-4
                         md:col-span-5 md:col-start-4
                         lg:col-span-6 lg:col-start-6">
               <motion.h1 
                    variants={rtlFadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1}}
                    className='font-display-h1 text-white text-phone-h1'>{t('title.first')} <span className='text-accent'>{t('title.second')}</span></motion.h1>
               <motion.p 
                    variants={rtlFadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1}}
                    className='w-full text-white text-center text-para-med'>{t('description')}</motion.p>
          </div>
          <motion.div 
               variants={projectsTable}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.1 }}
               className="w-full grid grid-cols-1 gap-[1rem] items-stretch
                         sm:col-span-4 sm:grid-cols-2
                         md:col-span-8 md:grid-cols-2
                         lg:col-span-12 lg:grid-cols-3
                         xl:col-span-12 xl:grid-cols-3">
                    
                    <motion.div variants={cardsVariant}>
                         <ProjectCard projectName={t('Cards.Card1.title')}
                         projectImage="./projects/ecomm.png"
                         projectDescription={t('Cards.Card1.description')}
                         projectTechnologies={["react", "node", "mongo"]}
                         projectLink={t('Cards.Card1.showcase')}
                         repoLink={t('Cards.Card1.repo')}/>
                    </motion.div>
                              
                    <motion.div variants={cardsVariant}>
                         <ProjectCard projectName={t('Cards.Card1.title')}
                         projectImage="./projects/ecomm.png"
                         projectDescription={t('Cards.Card1.description')}
                         projectTechnologies={["react", "node", "mongo"]}
                         projectLink={t('Cards.Card1.showcase')}
                         repoLink={t('Cards.Card1.repo')}/>
                    </motion.div>
               
                    <motion.div variants={cardsVariant}>
                         <ProjectCard projectName={t('Cards.Card2.title')}
                              projectImage="./projects/roadAnalyse.png"
                              projectDescription={t('Cards.Card2.description')}
                              projectTechnologies={["python", "opencv", "yolo"]}/>
                    </motion.div>
               
                    <motion.div variants={cardsVariant}>
                         <ProjectCard projectName={t('Cards.Card3.title')}
                              projectImage="./projects/spaceRunner.png"
                              projectDescription={t('Cards.Card3.description')} 
                              projectTechnologies={["unity"]}/>
                    </motion.div>
               
                    <motion.div variants={cardsVariant}>
                         <ProjectCard projectName={t('Cards.Card4.title')}
                              projectImage="./projects/arkanoid.png"
                              projectDescription={t('Cards.Card4.description')}
                              projectTechnologies={["unity"]}/>
                    </motion.div>

                    <motion.div variants={cardsVariant}>
                         <ProjectCard projectName={t('Cards.Card5.title')}
                              projectImage="./projects/EcoVan.png"
                              projectDescription={t('Cards.Card5.description')}
                              projectTechnologies={["unity"]}/>
                    </motion.div>

                    <motion.div variants={cardsVariant}>
                         <ProjectCard projectName={t('Cards.Card6.title')}
                              projectImage="./projects/smartHome.png"
                              projectDescription={t('Cards.Card6.description')}
                              projectTechnologies={["android", "firebase", "arduino"]}/>
                    </motion.div>
          </motion.div>
     </motion.section>
     )
}

export default Projects
