import React from "react";

function AnimalDetails({animals}) {
  console.log(animals);
  const {image, name, houseTrained, breed, age, gender, about} = animals
  return <div className="h-full w-full">
    <div className="flex items center h-96 w-3/5 justify-evenly">
      <img src={image} alt={name}/>
      <div>
      <h3>{name}</h3>
      <p>Breed: {breed}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>House trained: {houseTrained}</p>
      </div>
      <div>
        <h3>About {name}</h3>
        <p>{about}</p>
      </div>
    </div>
  </div>
}
export default AnimalDetails;