import React from "react";

function Connect() {
  return (
    <div
      name="Contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 pb-32 pt-20"
    >
      <div className="flex justify-center items-center flex-col">
        <div>
          <p className="text-white text-3xl font-extrabold inline border-b-8 border-gray-600">
            Contact me!
          </p>
          <p> Submit to form below to get in touch with me</p>
        </div>

        <div>
          <form
            action="https://getform.io/f/ajjepela"
            method="POST"
            className="flex flex-col gap-5 "
          >
            <input
              name="name"
              type="text"
              placeholder="Enter your good name "
              className="px-20 py-2 rounded-md"
            />

            <input
              name="email"
              type="email"
              placeholder="Enter your active email"
              className="px-20 py-2 rounded-md"
            />

            <input
              name="number"
              type="number"
              placeholder="Enter your contact-number ==> Optional "
              className="px-20 py-2 rounded-md flex justify-start"
            />

            <textarea
              rows="10"
              className="focus:outline-none bg-transparent p-2 bg-white rounded-md"
              name="message"
              id=""
              placeholder="messege me anything....."
            ></textarea>

            <button className="text-green hover:bg-black bg-white hover:text-white hover:scale-105 py-2 rounded-md">
              submit
            </button>
          </form>
        </div>
      </div>

      



      <div className="flex justify-end pr-72 pt-48 gap-10">
      <div className="flex justify-end">        
        <p className="opacity-5 text-white">If my contact page does't download (may be) then  </p>
        </div>

        <div>
        <p className="text-white text-xl opacity-5 ">Contact me! </p>

        </div>
        
        
       
      </div>

      <div className="flex  justify-end pr-20 opacity-5">
        <div className="flex flex-col">
          <h1 className="text-3xl text-green-400 ">movilal893@gmail.com</h1>
          

          <h1 className="text-3xl text-green-400">movilal116@gmail.com</h1>
          
       
      </div>
       
      </div>

     
    </div>
  );
}

export default Connect;
