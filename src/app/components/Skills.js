'use client';
import { HtmlIcon, CssIcon, ReactIcon, NodeIcon, CppIcon, PythonIcon, FlutterIcon, MongoIcon, MysqlIcon, UnityIcon, VisualIcon, CsharpIcon } from "@/app/components/svg/icons";
import SkillBar from "@/app/components/ui/skillBar";


export const SkillsProps =[
    {Icon: HtmlIcon, percentage: 80},
    {Icon: CssIcon, percentage: 70},
    {Icon: ReactIcon, percentage: 60},
    {Icon: NodeIcon, percentage: 60},
    {Icon: CsharpIcon, percentage: 50},
    {Icon: CppIcon, percentage: 70},
    {Icon: PythonIcon, percentage: 80},
    {Icon: FlutterIcon, percentage: 60},
    {Icon: MongoIcon, percentage: 65},
    {Icon: MysqlIcon, percentage: 80},
    {Icon: UnityIcon, percentage: 70},
    {Icon: VisualIcon, percentage: 90},
  ]

export const IconsOuterElipse = [
    { Icon: HtmlIcon, angle: 150 },
    { Icon: CssIcon, angle: 180 },
    { Icon: ReactIcon, angle: 230 },
    { Icon: MysqlIcon, angle: 310 },
    { Icon: MongoIcon, angle: 0 },
    { Icon: NodeIcon, angle: 30},
  ]

export const IconsCenterElipse = [
    { Icon: CppIcon, angle: 200 },
    { Icon: CsharpIcon, angle: 335 },
    { Icon: FlutterIcon, angle: 250},
    { Icon: PythonIcon, angle: 290 },
  ]

export const IconsInsideElipse = [
    { Icon: UnityIcon, angle: 0 },
    { Icon: VisualIcon, angle: 180 },
  ]

const Skills = () => {
  return (
    <div className="container grid grid-cols-1 justify-start items-start mx-auto gap-[2.5rem] px-4
                    sm:grid-cols-4 sm:max-w-[480]
                    md:grid-cols-8 md:max-w-[890] md:gap-[2rem] md:justify-center md:items-center
                    lg:grid-cols-12 lg:max-w-[1190px]
                    xl:grid-cols-12 xl:max-w-[1280px]">
      <div className="relative flex justify-center items-center mx-auto scale-90
                      sm:col-span-4 sm:scale-100 
                      md:col-span-4 md:order-2 
                      lg:col-span-6 lg:order-2 lg:scale-140
                      xl:scale-155">
        <img
          className="w-[13.77513rem] h-[15.7695rem] z-10 translate-y-6.5" 
          src="/avatars/SkillsAvatar.png"
        />
        {/* ELIPSE 1 */}
        <div className="absolute w-[18.6rem] h-[18.6rem] rounded-full border-3 border-accent">
          <div className="relative w-full h-full">
            {IconsOuterElipse.map(({ Icon, angle }, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-[0.4rem] bg-charcoal rounded-full"
                style={{
                  transform: `rotate(${angle}deg) translateX(9rem) rotate(-${angle}deg)`
                }}>
                <Icon />
              </div>
            ))}
          </div>
        </div>
        {/* ELIPSE 2 */}
        <div className="absolute w-[14.5rem] h-[14.5rem] rounded-full border-2 border-accent">
          <div className="relative w-full h-full">
            {IconsCenterElipse.map(({ Icon, angle }, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-[0.4rem] bg-charcoal rounded-full"
                style={{
                  transform: `rotate(${angle}deg) translateX(7.25rem) rotate(-${angle}deg)`
                }}>
                <Icon />
              </div>
            ))}
          </div>
        </div>
        {/* ELIPSE 3 */}
        <div className="absolute w-[9.7rem] h-[9.7rem] rounded-full border-1 border-accent">
          <div className="relative w-full h-full">
            {IconsInsideElipse.map(({ Icon, angle }, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-[0.4rem] bg-charcoal rounded-full"
                style={{
                  transform: `rotate(${angle}deg) translateX(4.6rem) rotate(-${angle}deg)`
                }}>
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full flex flex-col
                      sm:col-span-4
                      md:col-span-4 md:order-1
                      lg:col-span-6 lg:order-1">
        <h1 className='font-display-h1 text-white
                       text-[3rem]
                       md:text-md-h1
                       xl:text-xl-h1'>My <span className='text-accent'>Toolkit</span></h1>
        <p className="w-full text-left text-white text-md-para font-para-med">These are the tools and technologies I use most. I enjoy learning new ones and improving how I work on every project.</p>
        <div className="mt-4 grid grid-flow-col justify-center auto-cols-max grid-rows-6 gap-x-[1rem] gap-y-[0.31rem] 
                        md:grid-rows-6 md:justify-center
                        lg:grid-rows-4 lg:justify-start">
          {SkillsProps.map((skill, index) =>
            <SkillBar key={index} Icon={skill.Icon} percentage={skill.percentage} index={index} />
          )}
        </div>
      </div>
      
    </div>
  )
}

export default Skills