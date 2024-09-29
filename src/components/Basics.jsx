import React from 'react'

import imgs1 from '../assets/portfolio_images/Weather-image.jpg';
import imgs from '../assets/Css-image.jpeg';
import imgs2 from '../assets/portfolio_images/food-image.avif';
// import imgs3 from '../assets/portfolio_images/react-image.jpeg';


function Basics() {
    const project = [
        

        {
            id: 1,
            src: imgs1,
            href: "https://simple-weather-app-by-movilal.netlify.app/"
        },

        {
            id: 2,
            src: imgs,
             href: "https://simple-portfolio-movilal.netlify.app/"
        },

        {
            id: 3,
            src: imgs2,
             href: "https://simple-food-side-by-movilal.netlify.app/"
        },

        
       
    ]
    
    return (
    <div name="portfolio" className='h-min-screen w-full bg-gradient-to-b from-black to-gray-800 text-white pt-10'>
       <div className='flex justify-center pt-20 pb-2'>
        <p className='text-4xl inline border-b-4 border-gray-500 text-white'>Project base on Html Css and JavaScript</p>
      </div>

      <div className='flex justify-center pb-5'>
      <p className=' font-semibold flex justify-center'>check out some of my work right here</p>

      </div>

      


      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-20'>

      {project.map(({id, src, href})=>(

      <div key={id}
       className='shadow-lg shadow-gray-600 hover:shadow overflow-hidden object-cover rounded-md'>
        <img className='hover:scale-105  w-full bg-cover h-[80%] rounded-md' src={src} alt="" />


        <div className='flex justify-center items-center p-5 '>

        <a target='_blank'
       rel="noreferrer" href={href} className='px-20 py-2 rounded-md bg-white  hover:bg-green-600 font-semibold text-xl flex justify-center items-center hover:text-bg-zinc-700 hover:red-800 text-black hover'>Click_here</a>



        </div>
       

       

      
      </div>

       ))}

      </div>

      
    </div>
  )
}


export default Basics
