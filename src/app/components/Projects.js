import React from 'react'
import ProjectCard from '@/app/components/ui/projectCard'

const Projects = () => {
  return (
    <div className="container grid grid-col-1 justify-start items-start mx-auto gap-[2.5rem] px-4
                    sm:grid-cols-4
                    md:grid-cols-8
                    lg:grid-cols-12">
        <div className="w-full flex flex-col col-span-1
                        sm:col-span-4
                        md:col-span-5 md:col-start-4
                        lg:col-span-6 lg:col-start-6">
            <h1 className='font-display-h1 text-white text-phone-h1'>My <span className='text-accent'>Projects</span></h1>
            <p className='w-full text-white text-center text-para-med'>I have gained valuable experience in IT, where I apply my knowledge in practice, improve my technical skills, and contribute to solving real-world problems.</p>
        </div>
        <div className="w-full grid grid-cols-1 gap-[1rem]
                        sm:col-span-4 sm:grid-cols-2
                        md:col-span-8 md:grid-cols-2
                        lg:col-span-12 lg:grid-cols-3
                        xl:col-span-12 xl:grid-cols-4">
            <ProjectCard projectName="Ecommerce web app"
                 projectImage="./projects/ecomm.png"
                 projectDescription="An e-commerce application designed as a product catalog. The system provides an admin panel for product and content management and a client interface for viewing and reserving products."
                 projectTechnologies={["react", "node", "mongo"]}/>
            
            <ProjectCard projectName="ComputerVision  app"
                 projectImage="./projects/roadAnalyse.png"
                 projectDescription="An e-commerce application designed as a product catalog. The system provides an admin panel for product and content management and a client interface for viewing and reserving products."
                 projectTechnologies={["python", "opencv", "yolo"]}/>
            
            <ProjectCard projectName="Platform game"
                 projectImage="./projects/spaceRunner.png"
                 projectDescription="An e-commerce application designed as a product catalog. The system provides an admin panel for product and content management and a client interface for viewing and reserving products."
                 projectTechnologies={["unity"]}/>
            
            <ProjectCard projectName="Arkanoid game"
                 projectImage="./projects/arkanoid.png"
                 projectDescription="An e-commerce application designed as a product catalog. The system provides an admin panel for product and content management and a client interface for viewing and reserving products."
                 projectTechnologies={["unity"]}/>

            <ProjectCard projectName="Crafting game"
                 projectImage="./projects/EcoVan.png"
                 projectDescription="An e-commerce application designed as a product catalog. The system provides an admin panel for product and content management and a client interface for viewing and reserving products."
                 projectTechnologies={["unity"]}/>

            <ProjectCard projectName="Smarthome system"
                 projectImage="./projects/smartHome.png"
                 projectDescription="An e-commerce application designed as a product catalog. The system provides an admin panel for product and content management and a client interface for viewing and reserving products."
                 projectTechnologies={["android", "firebase", "arduino"]}/>
        </div>
    </div>
  )
}

export default Projects


{/*
    <ProjectCard projectName="Ecommerce web app"
                 projectImage="./projects/ecomm.png"
                 projectDescription="An e-commerce application designed as a product catalog. The system provides an admin panel for product and content management and a client interface for viewing and reserving products."
                 projectTechnologies={["react", "node", "mongo"]}/>
    
*/}