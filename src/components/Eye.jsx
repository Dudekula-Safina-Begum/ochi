import React, { useEffect,useState } from 'react'

const Eye = () => {
  const [rotate, setrotate] = useState(0)
useEffect(()=>{
  window.addEventListener('mousemove',(e)=>{
    let mouseX=e.clientX;
    let mouseY=e.clientY;


    let deltaX=mouseX-window.innerWidth/2;
    let deltaY=mouseY-window.innerHeight/2;

    let ang=Math.atan2(deltaY,deltaX)*(180/Math.PI)

    setrotate(ang-180)

})
}
  
)

  return (
    <div  className='eye overflow-hiddenw-full h-full border-2px  md:h-screen'>
      <div  className=' relative w-full h-[50vh] border-green-800 md:h-full bg-cover bg-center  bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className=' flex items-center gap-5 justify-center  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className=' w-[16vw] h-[16vw] flex items-center justify-center bg-white rounded-full'>
            <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full'>
              <div  style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5  '>
                <div className='w-[2vw] h-[2vw] md:w-[1.5vw] md:h-full bg-white rounded-full'>

                </div>
              </div>
            </div>
          </div>
          <div className='w-[16vw] h-[16vw] bg-white flex items-center justify-center rounded-full'>
            <div className='w-2/3 h-2/3 relative bg-zinc-900 flex items-center rounded-full'>
            <div  style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5  '>
                <div className='w-[2vw] h-[2vw] md:w-[1.5vw] md:h-full bg-white rounded-full'>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Eye