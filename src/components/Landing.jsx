import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion"

function Landing() {

  return (
    <div  className='w-full  bg-zinc-900 pt-1'>
      <div className='textstructure mt-[30vw] px-5 md:px-20 md:mt-[10vw]'>
        {['we create', 'eye-opening', 'presentations'].map((ele, index) => {
          return <div className='masker '>
            <div className='w-fit flex items-center gap-1 overflow-hidden'>{index === 1 && (<motion.div initial={{width:0}} animate={{width:"8vw"} } transition={{ease:[0.76, 0, 0.24, 1]}}  className='bg-cover bg-center  bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] w-[8vw] h-[5vw] rounded-md'>
                        
            </motion.div>)}
              <h1 className='uppercase font-["FoundersGrotesk"] text-[8.5vw] leading-[10vw] md:leading-[8vw] tracking-tighter font-medium'>{ele}</h1>

            </div>

          </div>
        })}




      </div>
      <div className='border-t-2 border-zinc-800 mt-10  md:flex  justify-between items-center px-5 md:px-20 py-[7vh] '>
        {['For public and private companies', 'From the first pitch to IPO'].map((ele) => <p className='leading-none mb-[3vw] md:mb-[0] tracking-tighter font-["NeueMontreal"] text-[3vw] md:text-[1.5vw]'>{ele}</p>)}
        <div className='start   bg-red-900 gap-2 '>
          {/* <div className='  rounded-full border-zinc-500 border-[1px] uppercase flex gap-2'>start now
          <div className='rounded-full flex justify-center items-center border-zinc-800 border-[1px]  '>
            < MdOutlineArrowOutward />
          </div>
          </div> */}
          
        </div>
        <div className=' px-[1vw] w-[30vw] md:w-[12vw] rounded-full border-zinc-500 border-[1px] uppercase flex items-center gap-2 justify-center'>start now
          <div className='rounded-full  border-zinc-800 border-[1px]  '>
            < MdOutlineArrowOutward />
          </div>
          </div>
          
        

      </div>
    </div>
  )
}

export default Landing