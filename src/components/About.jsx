import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed="1" className='bg-green-400 w-full    px-5 py-5 md:px-[20] '>
        <h1 className='text-[4.5vw] md:text-[2.8vw] font-[NeueMontreal] tracking-tight py-[2vw] leading-[6vw] md:leading-[4vw]'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full  border-zinc-400 border-t-[1px] md:flex justify-between'>
           <div className='mt-2 font-[NeueMontreal]'>
            <h1 className='md:text-[3.3vw] text-[6vw]'>Our approach:</h1>
            <button className=' mt-[2vw] px-4 py-3 bg-zinc-900 text-white uppercase rounded-full flex items-center gap-5' >read more
                <div className='bg-white w-2 h-2 rounded-full'></div>
            </button>
           </div>
           <div className='w-full md:w-1/2 md:h-[30vw] bg-red-700 mt-6 rounded-lg '>
             <img className='rounded-lg w-full md:h-full border-red-600 ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"  />
           </div>
        </div>
    </div>
  )
}

export default About