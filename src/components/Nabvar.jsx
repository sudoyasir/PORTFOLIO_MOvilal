import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import {Link} from "react-scroll";

function Nabvar() {
  const [nav, setNav] = useState(false);

  const link = [
    {
      id: 1,
      link: "home",
    },

    {
      id: 2,
      link: "About",
    },

    {
      id: 3,
      link: "Contact",
    },

    {
      id: 4,
      link: "Experience",
    },

    {
      id: 5,
      link: "portfolio",
    },
  ];
  return (
    <div className="fixed h-20 w-full flex justify-between bg-black text-white items-center py-10">
      <div>
        <h1 className="text-white p-5 text-5xl font-extralight font-title">MOvilal</h1>
      </div>

      <ul className="hidden md:flex">
        {link.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 text-white cursor-pointer hover:scale-105 hover:text-blue-400 font-medium duration-200"
          >
            <Link to={link} smooth duration = {500}>
            {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className=" text-white cursor-pointer px-4  z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (

      <ul className="flex flex-col justify-center p-5 items-center absolute top-0 left-0   w-full h-screen bg-gradient-to-b from-black to-gray-800 text-green-600">
      

        {link.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 py-6 capitalize text-5xl"
          >
            <Link onClick={()=> setNav(!nav)} to={link} smooth duration = {500}>
            {link}
            </Link>
          </li>
        ))}
    
      </ul>
        
      )}




    </div>
  );
}

export default Nabvar;
