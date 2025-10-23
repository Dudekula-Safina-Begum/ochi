import { delay, motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'

const Featured = () => {
   let [ishovering,sethoverging]= useState(false)
   let [hovering,sethovergings]= useState(false)
   
    return (
        <div data-scroll  data-scroll-section  className='w-full   bg-zinc-900 '>
            <div className='w-full px-20  border-b-[1px] border-zinc-800'>
                <h1 className=' text-8xl font-[NeueMontreal] tracking-tight capitalize'>Feature project</h1>
            </div>
            <div className='px-[6vw] mb-[3vw] md:mb-[2px]'>
                <div className='card w-full mt-[1vw]  md:flex gap-8  '>
                    <div 
                    onMouseEnter={()=>sethoverging(true)}
                    onMouseLeave={()=>sethoverging(false)}
                    className='relative  cardcontainer w-full md:w-1/2 md:h-[70vh]  mb-[5vw] '>
                        <div className='w-full flex items-center px-7 py-[1vw] gap-[0.8vw]'>
                            <div className='w-[0.8vw] h-[0.8vw] bg-white rounded-full'></div>
                            <h1 className='font-[NeueMontreal] uppercase'>Fyde</h1>
                        </div>
                        <h1 className='absolute hidden  md:flex z-[99] overflow-hidden text-9xl left-full  -translate-x-1/2 top-1/2 -translate-y-1/2 uppercase '>
                        {"FYDE".split('').map((ele,index)=>(<motion.span initial={{y:"100%"}} animate={ishovering ? {y:"0%"} : {y:"100%"}} transition={{ease:[0.61, 1, 0.88, 1], delay:index*0.1}} >{ele}</motion.span>))}
                        </h1>
                        <div className='w-full h-full rounded-3xl overflow-hidden border-[1px] border-zinc-800'>
                            <img className='bg-cover w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" srcset="" />
                        </div>
                    </div>
                    <div 
                     onMouseEnter={()=>sethovergings(true)}
                     onMouseLeave={()=>sethovergings(false)}
                    className='cardcontainer relative w-full md:w-1/2 md:h-[70vh] mb-[1vw]'>
                        <div className='w-full flex items-center px-7 py-[1vw] gap-[0.8vw]'>
                            <div className='w-[0.8vw] h-[0.8vw] bg-white rounded-full'></div>
                            <h1 className='font-[NeueMontreal] uppercase'>
                               vise
                            </h1>
                        </div>
                        <h1 className='absolute hidden md:flex overflow-hidden z-[99] text-9xl right-full  translate-x-1/2 top-1/2 -translate-y-1/2 uppercase '>
                        {"VISE".split('').map((ele,index)=>(<motion.span initial={{y:"100%"}} animate={hovering ? {y:"0%"} : {y:"100%"}} transition={{ease:[0.61, 1, 0.88, 1], delay:index*0.1} } >{ele}</motion.span>))}
                        </h1>
                        <div className='w-full h-full rounded-3xl overflow-hidden border-[1px] border-zinc-800'>
                            <img className='bg-cover w-full h-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Featured