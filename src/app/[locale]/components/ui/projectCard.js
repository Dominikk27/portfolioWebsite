import React from 'react'
import {UnityIcon, ReactIcon, NodeIcon, MongoIcon, PythonIcon, MysqlIcon, OpencvIcon, FirebaseIcon, ArduinoIcon, AndroidStudioIcon, PHPIcon, TailwindIcon} from '@/app/[locale]/components/svg/icons';

import { AiOutlineEye } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { useTranslations } from 'next-intl';

const IconMap = {
    unity: UnityIcon,
    react: ReactIcon,
    node: NodeIcon,
    mongo: MongoIcon,
    mysql: MysqlIcon,
    python: PythonIcon,
    opencv: OpencvIcon,
    android: AndroidStudioIcon,
    arduino: ArduinoIcon,
    firebase: FirebaseIcon,
    tailwind: TailwindIcon,
    php: PHPIcon
};

const ProjectCard = ({ projectImage, projectName, projectDescription, projectTechnologies, repoLink, projectLink, }) => {

    const t = useTranslations('Projects');

    const words = projectName.split(" ");
    const firstWord = words.shift();
    const rest = words.join(" ");
  return (
    <div className=" flex flex-col bg-cream w-full rounded-[1.5625rem] pb-[1.3125rem] h-full">
        <img src={projectImage} alt={`image of ${projectName} project`} className='w-full mb-[1.4rem] rounded-t-[1.3125rem] h-[250px] object-cover' />
        <div className="px-5">
            <h1 className='font-project-title text-project-title font-[400]'>
                <span className='text-accent font-[700]'>{firstWord}</span> {rest}
            </h1>
            <div className="w-full px-[1rem] flex justify-center items-center text-left flex-grow">
                <p className='font-project-description text-project-description h-[10rem] overflow-y-auto'>{projectDescription}</p>
            </div>
            <div className="w-full pt-[1.5rem] flex-grow">
                <h4 className='text-accent font-[700]'>Tools & Technologies</h4>
                <div className="flex justify-center py-2 gap-2">
                    {projectTechnologies && projectTechnologies.map((tech, index) =>{
                        const Icon = IconMap[tech.toLowerCase()];
                        return Icon ? <Icon key={index} className="w-3 h-3" /> : null;
                    })}
                </div>
            </div>
            <div className="w-full flex gap-[0.3125rem] justify-center px-[0.5rem] pt-[1.5rem]">
                <a href={projectLink ? projectLink : "#"} className="w-full flex items-center gap-[0.3125rem] justify-center text-buttons h-[3.0625rem] rounded-[0.3125rem] bg-sand"> <AiOutlineEye /> {t('projectBTN')}</a>
                <a href={repoLink ? repoLink : "#"} className="w-full flex items-center gap-[0.3125rem] justify-center text-buttons h-[3.0625rem] rounded-[0.3125rem] bg-accent"> <FaGithub /> {t('repoBTN')}</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard