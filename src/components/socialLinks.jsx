import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";

const socialLinks = () => {

const links = [
    {
        id: 1,
        child: (
            <>
            Github <FaGithub size={30} />
            </>
        ),
        href: "https://github.com/MOvilal350786",
        style: 'rounded-tr-md'
       

    },

    {
        id: 2,
        child: (
            <>
            LinkedIn <FaLinkedin size={30} />
            </>
        ),
        href: "https://rb.gy/ll78rf",
  

    },

    {
        id: 3,
        child: (
            <>
           Mail <IoIosMailUnread size={30}  />
            </>
        ),
        href: "https://shorturl.at/23XZJ",
      

    },

    {
        id: 4,
        child: (
            <>
         Contact <RiContactsFill size={30} />
            </>
        ),
        href: "Contacts_vilalHere.pdf",
        style: 'rounded-tr-md',
        download:true,
        

    },

   
]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 bg-gray-800 fixed'>
      
        <ul>

        {/* <li className='bg-gray-400'>
            <a href="" className='flex justify-between items-center gap-5 w-full h-14 px-2 text-xl'>
                <>
                Linkedin <FaLinkedin />
                </>
            </a>
        </li> */}
            

            
            {links.map(({id, child, href, style, download})=>(

<li key={id}
     className={' bg-gray-300 flex justify-center items-center  w-40 h-14 ml-[-100px]  hover:ml-[-10px]'+ " "+ style}>
       <a href={href} className='hidden lg:flex justify-between items-center px-4  w-full  '
       download={download}
       target='_blank'
       rel="noreferrer"
       >
        
       {child}
        
       </a>
    </li>
    ))}

          

        </ul>

    </div>
  )
}

export default socialLinks
