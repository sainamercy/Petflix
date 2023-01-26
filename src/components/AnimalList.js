import React, { useEffect, useState } from "react";
import Animal from "./Animal";
import Search from "./Search";
import Breeds from "./Breeds";
import AnimalDetails from "./AnimalDetails";
function AnimalList() {
const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/85a754bf9c1951c51700/animals/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAnimals(data);
      });
  }, []);

  return (
    <div className="bg-gray">
        <div className="flex justify-center">
        <Breeds breed="Cats" image="https://cdn-icons-png.flaticon.com/512/9358/9358469.png"/>
        <Breeds breed="Dogs" image="https://cdn-icons-png.flaticon.com/512/9342/9342594.png"/>
        <Breeds breed="Others" image="https://cdn-icons-png.flaticon.com/512/2609/2609834.png"/>
        </div>
        <Search/>
      <div className="flex flex-wrap w-3/4 mx-auto">
        {animals.map((animal, index) => {
          let imageUrl = animal.primary_photo_cropped?.small;
          return (
            <Animal
              key={index}
              image={
                imageUrl
                  ? imageUrl
                  : "https://thumbs.dreamstime.com/b/vector-group-pets-dog-cat-humming-bird-parrot-rabbit-isolated-white-background-pet-icon-logo-easy-editable-layered-224673941.jpg"
              }
              name={animal.name ? animal.name : "Milo"}
              breed={animal.breeds.primary}
            />
          );
        })}
         <AnimalDetails
        animals={animals}
      />
      </div>
    </div>
  );
}

export default AnimalList;
