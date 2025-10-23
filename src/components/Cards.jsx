import React from 'react'

const Cards = () => {
    return (
        <div  className='w-full h-screen md:-mt-[1vh] md:flex px-[5vw] md:py-[10vw]  gap-[1vw] bg-zinc-900 '>
            <div className='relative w-full md:w-1/2 h-[30vh] md:h-[65vh] bg-[#004D43] mb-[4vw] rounded-3xl flex items-center justify-center'>
                <img className='w-[30vw] md:w-[10vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-5 bottom-5 rounded-full px-[1vw]  border-[1px]' >&copy; 2019-2022</button>

            </div>
            <div className=' w-full md:w-1/2 h-[30vh] md:h-[65vh]  rounded-3xl md:flex gap-[1vw]'>
                <div className='md:w-1/2 w-full h-full bg-zinc-800 rounded-3xl mb-[4vw] relative flex items-center justify-center'>
                    <img className='w-[30vw] md:w-[10vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute left-5 bottom-5 rounded-full px-[1vw]  border-[1px]' >RATING5.0 ON CLUTCH</button>
                </div> 
                <div className='md:w-1/2 w-full h-full bg-zinc-800 rounded-3xl  relative flex items-center justify-center'>
                    <img className='w-[30vw] md:w-[10vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute left-5 bottom-5 rounded-full px-[1vw]  border-[1px]' >BUSINESS BOOTCAMP ALUMNI</button></div>

            </div>

        </div>
    )
}

export default Cards