import React from 'react'

import imgs1 from '../assets/portfolio_images/pinterest-Image.jpeg';
import imgs from '../assets/portfolio_images/instagram-imageA.jpeg'
 import imgs2 from '../assets/portfolio_images/uinqe-image.jpeg';


function portfolio() {
    
    const project = [
        

        {
            id: 2,
            src: imgs1,
        },

        {
            id: 1,
            src: imgs,
        },

        {
            id: 3,
            src: imgs2,
        },
       
    ]
    
    return (
    <div name="portfolio" className='min-h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white pb-10 '>

      <div className='flex flex-col gap-5'>


      <div className=' font-bold flex justify-center'>
        <p className=' text-4xl inline  border-b-4 border-gray-500 ml-20 text-white pt-10'>portfolio</p>  
      </div>

      <div className='ml-20 pb-10 flex justify-center'>
        <p className='  font-bold text-xl text-gray-400 inline border-b-4 border-gray-400 '>Due to some uinqeness features are added so can't be shares link of these three  fullStack Projects</p>
        
        </div>



      </div>
      


      


      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-20'>

      {project.map(({id, src})=>(

      <div key={id}
       className='shadow-2xl shadow-gray-600 hover:shadow overflow-hidden object-cover'>
        <img className='hover:scale-105  h-full w-full bg-cover' src={src} alt="" />

      </div>

       ))}

      </div>

           <div className='pl-20 mt-20 mb-2'>
            <h1 className='text-4xl font-title text-green-200'>Note!</h1>
          <h1>But you can see my another fullStack Project those are tutorial project</h1>
          <h1 className='text-xl font-title '>But these project I developed using Nodejs Expressjs MongoDB   EJS html css tailwindCss and javascript </h1>


          <div className='ml-20 pt-10 '>
            <h1>click below</h1>

            
          <a className='text-xl font-bold text-blue-400 block py-5' href="https://github.com/MOvilal350786/insta">  Tutorial base inta</a>
          <a className='text-xl font-bold text-blue-400 ' href="https://github.com/MOvilal350786/pins">Tutorial Base FullStack Project</a>



          </div>


        </div>

        <div>

          

        </div>

      
    </div>
  )
}

export default portfolio
