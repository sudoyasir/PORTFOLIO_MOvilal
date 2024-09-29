import React from 'react'

import imgs1 from '../assets/portfolio_images/react-image.jpeg';
import imgs from '../assets/portfolio_images/react-image.jpeg';
import imgs2 from '../assets/portfolio_images/react-image.jpeg';
import imgs3 from '../assets/portfolio_images/react-image.jpeg';




function portfolio1() {
    
    const project = [
        

        {
            id: 1,
            src: imgs1,
            href: "https://simple-react-project-movilal.netlify.app/"
        },

        {
            id: 2,
            src: imgs,
             href: "https://react-animation-movilal.netlify.app/"
        },

        {
            id: 3,
            src: imgs2,
             href: ""
        },

        
       
    ]
    
    return (
    <div name="portfolio" className='h-min-screen w-full bg-gradient-to-b from-gray-800 to-black text-white pt-10'>
      <div className='flex justify-center py-20 pb-2'>
        <p className='text-4xl inline border-b-4 border-gray-500 text-white'>Project base on react</p>
      </div>

      <div className='flex justify-center pb-5'>
      <p className=' font-semibold flex justify-center'>check out some of my work right here</p>

      </div>




      


      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-20'>

      {project.map(({id, src, href})=>(

      <div key={id}
       className='shadow-lg shadow-gray-600 hover:shadow overflow-hidden object-cover '>
        <img className='hover:scale-105  w-full bg-cover' src={src} alt="" />


        <div className='flex justify-center items-center p-5 '>

        <a target='_blank'
       rel="noreferrer" href={href} className='px-20 py-2 rounded-md bg-white  hover:bg-green-600 font-semibold text-xl flex justify-center items-center hover:text-bg-zinc-700 hover:red-800 text-black'>Click_here</a>



        </div>
       

       

      
      </div>

       ))}

      </div>

      
    </div>
  )
}

export default portfolio1
