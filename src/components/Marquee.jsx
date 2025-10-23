import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
 
  return (
    <div   data-scroll data-scroll-section data-scroll-speed="-0.5"  className='w-full  bg-[#004D43] py-10 rounded-tl-3xl rounded-tr-3xl'>
        
         <div className='   border-t-2 border-b-2 border-zinc-400  flex whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ repeat:Infinity, ease:"linear",duration:10}} className='text-[18vw] font-[FoundersGrotesk] font-extrabold -mb-[5vw] -mt-[5vw]  pr-[3vw]' >WE ARE OCHI </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ repeat:Infinity, ease:"linear",duration:10}} className='text-[18vw] font-[FoundersGrotesk] font-extrabold  -mb-[5vw] -mt-[5vw]  pr-[3vw]'>WE ARE OCHI </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ repeat:Infinity, ease:"linear",duration:10}} className='text-[18vw] font-[FoundersGrotesk] font-extrabold  -mb-[5vw] -mt-[5vw]  pr-[3vw]'>WE ARE OCHI </motion.h1>
         </div>
    </div>
  )
}
 
export default Marquee