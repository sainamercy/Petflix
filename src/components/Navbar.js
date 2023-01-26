import React from "react";



function Navbar() {

  

  return <div>


<nav className="w-full flex items-center justify-center bg-yellow-400 text-gray-700 shadow-lg">
  <div className="container-fluid w-4/6 flex justify-evenly items-center ">
    <div className="">
    <img alt="" src="https://my-video-five.vercel.app/image/logo%201.png" className="w-32 h-28 cursor-pointer"/>
    </div>
    <div className="">
      <a className="text-xl hover:text-rose-500 font-semibold" href="/#">Find A Pet</a>
    </div>
    <div className="">
      <a className="text-xl hover:text-rose-500 font-semibold" href="/#">Partners & Organizations</a>
    </div>
    <div className="">
      <a className="text-xl hover:text-rose-500 font-semibold" href="/#">Login/Sign Up</a>
    </div>
    
  </div>

  
</nav>

  </div> 
  
}

export default Navbar;


