import React from 'react'
import { motion } from 'framer-motion' 
import { staggerContainer } from '../utils/motion'

// The Goal for the SectionWrapper Component is that it allows us to wrap our components in it. 
// and Adds sleek motion to this seperate components as we scroll down the page, every section gets the sleek motion
  
const SectionWrapper = (Component, idName) => function HOC() {
    return (
       <>
       <div className='w-full glass-effect'>
       <motion.section 
        variants={staggerContainer()}
        initial= "hidden"
        whileInView={"show"}
        viewport={{once: true, amount: 0.30}}
        className={`md:px-2 rounded-3xl w-full md:max-w-7xl mx-auto relative z-0`}
        >
            <span className='hash-span hidden' id={idName}>
                &nbsp;
            </span>
            <Component /> 
        </motion.section>
       </div>
       </>
    )
}
export default SectionWrapper