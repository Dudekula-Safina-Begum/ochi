import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' text-white w-full min-h-screen bg-zinc-900 overflow-hidden '>
      <Navbar/> 
      <Landing/>  
      <Marquee/>
      <About/>
      <Eye/>
      <Featured/>
      <Cards/>
      <Eye />
      <Footer/>
      

    </div>
  )
}

export default App