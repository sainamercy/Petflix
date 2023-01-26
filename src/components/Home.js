import React from "react";

function Home() {
  return (
    <div className="w-full relative">
      <div>
        <video autoPlay muted loop className="w-full h-full">
          <source
            src="https://my-video-five.vercel.app/video/giphy%201.mp4"
            type="video/mp4"
          />
        </video>
        {/* <img src="https://giphy.com/gifs/banggood-cat-pets-dacing-xJjs8eGVbjNYY" alt="home-bg" className="w-full h-full"/> */}
      </div>
      {/* welcome msg */}
      {/* slogan */}
      {/* get started button */}
      <div className="absolute w-full top-0 bg-white/20 flex flex-col items-center justify-evenly h-full">
        <div className="flex flex-col items-center justify-evenly text-gray-200 w-3/5 h-60">
          <h1 className="text-4xl font-bold">WELCOME TO PETIFY</h1>
          <p className="text-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas
            hic corporis repellendus quod neque explicabo, atque cupiditate
            pariatur odit est expedita minus doloremque deleniti laborum qui
            reiciendis reprehenderit sed.
          </p>
          <div className="flex space-x-2 justify-center">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block px-10 text-1.8xl py-3 bg-cyan-400 text-stone-900 font-medium leading-tight rounded shadow-md hover:bg-rose-300 hover:shadow-lg focus:bg-rose-300 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
