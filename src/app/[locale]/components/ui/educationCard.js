import React from 'react'

const EducationCard = ({title, major, qualification, years, complete}) => {
  return (
    <div className="flex flex-col items-center gap-[0.2rem]">
        <div className="flex flex-col items-center w-[14.5rem]">
            <div className="bg-sand w-full gap-[0.25rem] px-[0.3125rem] pt-[1.2rem] pb-[0.3rem] rounded-[1.5625rem] flex flex-col z-10">
                <h4 className="text-h4 font-[900] text-text-h4 text-black">{title}</h4>
                <p className="text-contentSmall text-accent">{major}</p>
                <h5 className='text-h5 text-accent font-[700]'>{qualification}</h5>
                <div className="flex w-full mt-auto">
                    <p className="text-ContentSmall w-full text-right">{years}</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="23" viewBox="0 0 34 23">
                <path d="M17.0001 23L34.0001 0H5.68579e-05L17.0001 23Z" fill="#CCC5B9"/>
            </svg>
        </div>
        <div className="relative">
            <img 
                className='relative'
                src="/shapes/checkpoint.svg"
            />
            {complete ?
                <img
                    className='absolute bottom-0 left-0 mx-[0.4rem] mb-[0.67rem] mt-[0.83rem]'
                    src='/shapes/check.svg'
                /> :
                <img
                    className='absolute bottom-[-1.5] left-[2] mx-[0.4rem] mb-[0.67rem] mt-[0.83rem]'
                    src='/shapes/timer.svg'
                />}
        </div>
    </div>
  )
}

export default EducationCard