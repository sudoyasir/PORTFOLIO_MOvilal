import React from 'react'
import Heros from "../assets/Hero.jpg"

// import { FaGithub } from "react-icons/fa";
// import { CgMail } from "react-icons/cg";
// import { RiContactsFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
function Home() {
  return (
    <div name="home" className=' pl-16 h-screen w-full  bg-gradient-to-b from-black to-gray-800 text-white pt-20 '>

        
        <div className='flex items-center h-screen '>

            {/* <div className=' w-10 bg-zinc-600 ml-2 text-xl text-white rounded-2xl hover:scale-105'>
            <p className='p-2 hover:scale-110'></p>
            <p className='p-2 hover:scale-110'><CgMail /></p>
            <p className='p-2 hover:scale-110'><FaGithub /></p>
            <p className='p-2 hover:scale-110'><RiContactsFill /></p>

            </div> */}
            <div className=''>
                <h1 className='text-white text-3xl p-2 font-semibold ' >I'm a Full Stack Web-Developer</h1>
                <p className='p-5'>I've six months experience and earned (720$) USD Dollar with it .</p>

               

                <button className='bg-blue-500 flex justify-center items-center px-2 rounded-md hover:scale-105'> Portfolio
                  <span>
                  <IoIosArrowForward />
                  </span>
                </button>
              

                
                {/* <img src="Hero" alt="" /> */}
            </div>
      
            <div className='overflow-hidden bg-cover'>
            <img className='rounded-md hover:scale-105 pr-10  object-cover bg-cover' src={Heros} alt="" />

               </div>

              
             

        </div>

        
        
      
    </div>

  )
}

export default Home
