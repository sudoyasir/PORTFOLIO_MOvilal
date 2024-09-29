# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





        <ul>

            {links.map(({id, child, href, style, download})=>(

        <li key={id}
             className={' bg-gray-600 flex  justify-center items-center ml-[-70px] hover:ml-[-10px]  w-full h-14'+ " "+ style}>
               <a href={href} className='flex  gap-5 text-white px-2 rounded-xl duration-300'
               download={download}
               target='_blank'
               >
                
               {child}
                
               </a>
            </li>
            ))}
            

          

        </ul>















import React from 'react'

function contact() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800'>
        <div>
            <p>Contact</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nisi.</p>
        </div>

        <div>
            <form action="">
            <input 
                name='contact'
                type="text"
                placeholder='enter name'
                
                />

              <input 
                name='contact'
                type="email"
                placeholder='enter your email'
                
                />

                <textarea rows="10" className='focus:outline-none bg-transparent p-2' name="message" id="" placeholder='messege me anything.....'>

                </textarea>

                
            </form>
        </div>
      
    </div>
  )
}

export default contact

