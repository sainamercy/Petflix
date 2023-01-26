import React from "react";

function Breeds({breed = "Cats", image} ){
    return <div className="flex justify-center p-6">
    <div className="rounded-lg shadow-lg bg-white w-28 h-32">
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img className="rounded-t-lg h-3/4 w-3/4 m-auto" src={image} alt=""/>
      </a>
      <div className="p-2">
        <h5 className="text-gray-500 text-xl text-center">{breed}</h5>
      </div>
    </div>
  </div>
}

export default Breeds

