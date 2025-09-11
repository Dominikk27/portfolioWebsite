import React from 'react'
import ProjectCard from '@/app/[locale]/components/ui/projectCard'

import { motion, hover } from 'motion/react';
import { cardsVariant, educationTable, rtlFadeIn, projectsTable } from './animations/animations';


const Projects = ({ section }) => {
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
               className='font-display-h1 text-white text-phone-h1'>My <span className='text-accent'>Projects</span></motion.h1>
            <motion.p 
               variants={rtlFadeIn}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.1}}
               className='w-full text-white text-center text-para-med'>I have gained valuable experience in IT, where I apply my knowledge in practice, improve my technical skills, and contribute to solving real-world problems.</motion.p>
        </div>
        <motion.div 
          variants={projectsTable}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="w-full grid grid-cols-1 gap-[1rem]
                        sm:col-span-4 sm:grid-cols-2
                        md:col-span-8 md:grid-cols-2
                        lg:col-span-12 lg:grid-cols-3
                        xl:col-span-12 xl:grid-cols-4">
            
               <motion.div variants={cardsVariant}>
                    <ProjectCard projectName="Ecommerce web app"
                    projectImage="./projects/ecomm.png"
                    projectDescription="An e-commerce application designed as a product catalog. The system provides an admin panel for product and content management and a client interface for viewing and reserving products."
                    projectTechnologies={["react", "node", "mongo"]}/>
               </motion.div>
            
               <motion.div variants={cardsVariant}>
                    <ProjectCard projectName="ComputerVision  app"
                         projectImage="./projects/roadAnalyse.png"
                         projectDescription="An e-commerce application designed as a product catalog. The system provides an admin panel for product and content management and a client interface for viewing and reserving products."
                         projectTechnologies={["python", "opencv", "yolo"]}/>
               </motion.div>
            
               <motion.div variants={cardsVariant}>
                    <ProjectCard projectName="Platform game"
                         projectImage="./projects/spaceRunner.png"
                         projectDescription="An e-commerce application designed as a product catalog. The system provides an admin panel for product and content management and a client interface for viewing and reserving products."
                         projectTechnologies={["unity"]}/>
               </motion.div>
            
               <motion.div variants={cardsVariant}>
                    <ProjectCard projectName="Arkanoid game"
                         projectImage="./projects/arkanoid.png"
                         projectDescription="An e-commerce application designed as a product catalog. The system provides an admin panel for product and content management and a client interface for viewing and reserving products."
                         projectTechnologies={["unity"]}/>
               </motion.div>

               <motion.div variants={cardsVariant}>
                    <ProjectCard projectName="Crafting game"
                         projectImage="./projects/EcoVan.png"
                         projectDescription="An e-commerce application designed as a product catalog. The system provides an admin panel for product and content management and a client interface for viewing and reserving products."
                         projectTechnologies={["unity"]}/>
               </motion.div>

               <motion.div variants={cardsVariant}>
                    <ProjectCard projectName="Smarthome system"
                         projectImage="./projects/smartHome.png"
                         projectDescription="An e-commerce application designed as a product catalog. The system provides an admin panel for product and content management and a client interface for viewing and reserving products."
                         projectTechnologies={["android", "firebase", "arduino"]}/>
               </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default Projects
