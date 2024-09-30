import React from 'react'
import fullstack from '../assets/FullStack-image.png'
import mern from '../assets/MERNjs-image.png'
import DSA from '../assets/DSA-imageA.jpeg'
import java from '../assets/javaA-image.png'
import c from '../assets/C-Language-image.png'
import html from '../assets/html-image.jpg'
import css from '../assets/Css-image.jpeg'
import bootstrap from '../assets/bootstrap-image.webp'
import javascript from '../assets/javaScript-image.png'
import ejs from '../assets/ejs-image.jpg'
import tailwindcss from '../assets/tailwindcss.png'
import Nodejs from '../assets/Nodejs-image.png'
import Expressjs from '../assets/expressjs-image.png'
import MongoDB from '../assets/MongoDB.png'
import Reactjs from '../assets/Reactjs-image.png'
import sql from '../assets/SQL-image.jpg'
import gitAndGithub from '../assets/GitAndGithub-image.png'



// import  from '../assets/MERNjs-image.png'

function Skill() {
    const skill = [
        {
            id:1,
            skill: fullstack
        },

        {
            id:2,
            skill: mern,
        },

        {
            id:3,
            skill: DSA,
        },

        {
            id:4,
            skill: java,
        },

        {
            id: 5,
            skill: c,
        },
        {
            id:6,
            skill: html,
        },

        {
            id: 7,
            skill:css, 
        },


        
        {
            id: 8,
            skill: bootstrap,
        },

        
        {
            id: 9,
            skill: tailwindcss,
        },


        {
            id: 10,
            skill: javascript, 
        },

        {
            id: 11,
            skill: ejs 
        },


        {
            id: 12,
            skill: Nodejs,
        },

        {
            id: 13,
            skill: Expressjs,
        },

        {
            id: 14,
            skill: Reactjs,
        },

        {
            id: 15,
            skill: MongoDB,
        },

       

        {
            id: 16,
            skill: sql,
        },


        {
            id: 17,
            skill: gitAndGithub,
        },

      



    ]
  return (
    <div name="Experience" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black pt-80 pb-72 '>


  


<div className='px-20 mb-10'>
            <h1 className='text-4xl  text-gray-300 font-extrabold inline border-b-4 border-gray-400'>Skill And Experience</h1>
            <p className='text-white font-semibold mt-5'> Technologies I've worked with </p>


        </div>


        <div className=''>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-16  px-20'>

        {skill.map(({id, skill})=>(

        <div key={id} className='shadow- shadow-gray-600'
        >
            <img className='w-[30vw] h-[20vw] hover:scale-105' src={skill} alt="" />

        </div>
        
        ))}
      
      </div>
            
      </div>




    </div>
  )
}

export default Skill
