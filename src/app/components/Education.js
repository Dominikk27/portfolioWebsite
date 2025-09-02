import React from 'react'
import EducationCard from './ui/educationCard'

const Education = () => {
  return (
    <div className="container grid grid-cols-1 justify-center items-center mx-auto gap-[1.38rem] px-4
                    sm:grid-cols-4
                    md:grid-cols-8 md:max-w-[890] md:gap-[2rem] md:justify-center md:items-center
                    lg:grid-cols-12 lg:max-w-[1190px]
                    xl:grid-cols-12 xl:max-w-[1280px] ">

        <div className="col-span-1 flex flex-col
                        sm:col-span-4
                        md:col-span-7
                        lg:col-span-7 lg:col-start-6">
            <h1 className='font-display-h1 text-white
                           text-phone-h1
                           md:text-md-h1
                           xl:text-xl-h1'>My <span className='text-accent'>Education</span></h1>
            <p className='text-white text-center text-para-med font-para-med
                            md:text-justify md:text-md-para
                            xl:text-xl-para'>I have gained valuable experience in IT, where I apply my knowledge in practice, improve my technical skills, and contribute to solving real-world problems.</p>
        </div>
        <div className="col-span-1 order-2 grid grid-cols-1 justify-center gap-3 h-fit
                       sm:order-3
                       md:col-span-5 md:grid-cols-2 md:gap-x-[3rem]
                       lg:col-span-7">
          <EducationCard 
          title={"SPŠ Myjava"}
          major={"Elektrotechnika"}
          qualification="§21"
          years="2017-2021"
          complete={true}
          />
          <EducationCard 
          title={"UCM in Trnava"}
          major={"Applied Computer Science"}
          qualification="Bc."
          years="2021-2024"
          complete={true}
          />
          <div className="md:col-span-2 flex justify-center">
            <EducationCard 
            title={"UCM in Trnava"}
            major={"Applied Computer Science"}
            qualification="Mgr."
            years="2024-2026"
            complete={false}
            />
          </div>
      </div>
      <img src='./avatars/grad2.png' className='scale-x-[-1] w-[11.375rem] h-[17rem] col-span-1 order-2
                                                sm:col-span-2 sm:w-[15.5rem] sm:h-[23.3rem]
                                                md:col-span-3 md:w-[15.5rem] md:h-[23.3rem]
                                                lg:col-span-5 lg:mx-auto lg:w-[19.5rem] lg:h-[26.3rem]'/>
    </div>
  )
}

export default Education