import { motion } from 'motion/react';


export const rtlFadeIn ={
    hidden: { opacity: 0, x: "50px" },
    visible: { opacity: 1, x: 0,
        transition:{
            delay: 0.5,
            duration: 0.5,
            type:"spring",
            stiffness: 100
        }
    }
}

export const ltrFadeIn ={
    hidden: { opacity: 0, x: "50px" },
    visible: { opacity: 1, x: 0,
        transition:{
            delay: 0.5,
            duration: 0.5,
            type:"spring",
            stiffness: 100
        }
    }
}

export const bttFadeIn = {
    hidden: { opacity: 0, y: "50px" },
    visible: { opacity: 1, y: 0,
        transition:{
            delay: 0,
            duration: 0.3,
            type: "tween",
            stiffness: 100,
        }
     }
}


export const ttbFadeIn = {
    hidden: { opacity: 0, y: "-50px" },
    visible: { opacity: 1, y: 0,
        transition:{
            delay: 0.2,
            duration: 0.5,
            type: "tween",
            stiffness: 100
        }
    }
}


export const skillsTable = {
    hidden: { opacity: 1},
    visible: { opacity: 1, x: 0,
        transition:{
            staggerChildren: 0.3,
            delayChildren: 0.5,
        }
     }
}

export const cardsVariant = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0,
        transition:{
            type: "spring",
            duration: 0.5,
            stiffness: 100
        }
    }
}

export const educationTable = {
   hidden: { opacity: 0 },
    visible: { opacity: 1, x: 0,
        transition:{
            type: "spring",
            staggerChildren: 0.3,
            delayChildren: 0.5,
        }
     }
}

export const projectsTable = {
   hidden: { opacity: 0 },
    visible: { opacity: 1, x: 0,
        transition:{
            type: "spring",
            staggerChildren: 0.3,
            delayChildren: 0.5,
        }
     }
}