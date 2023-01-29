import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnimalDetails() {
  let { id } = useParams();
  const [animal, setAnimal] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // console.log(animals);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.npoint.io/85a754bf9c1951c51700/animals/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAnimal(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);

  const {
    photos,
    name,
    attributes,
    breeds,
    age,
    gender,
    description,
    contact,
    tags
  } = animal;

  return (
    <div className="flex justify-center h-full my-5 w-full">
      {isLoading ? (
        <p>Loading ....</p>
      ) : (
        <>
          {animal && (
            <div className="rounded-lg shadow-lg bg-gray-200 w-1/2">
              <img
                src={
                  photos?.length === 0
                    ? "https://thumbs.dreamstime.com/b/vector-group-pets-dog-cat-humming-bird-parrot-rabbit-isolated-white-background-pet-icon-logo-easy-editable-layered-224673941.jpg"
                    : photos?.[0].full
                }
                alt={name}
                className="transition ease-in-out delay-150 h-96 rounded-full w-96 m-auto mt-4 hover:scale-105"
              />
              <div className="p-6 text-gray-700 mb-4 text-lg">
              <div className="flex flex-col">
                <h3 className="text-3xl text-rose-500 font-bold ">{name}</h3>
                <div className="border border-b-gray-300 w-full mb-2 text-cyan-500">
                {tags?.map(tag=><span key={tag}>{tag},  </span>)}
                </div>
                <p className="text-xl">Breed: {breeds?.primary}</p>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <p>House trained: {attributes?.house_trained ? "Yes" : "No"}</p>
              </div>
              
                <div className="mt-2">
                <h3 className="text-gray-600 text-2xl font-medium mb-2 border border-b-gray-300 w-full">
                  About {name}
                </h3>
                <p>{description}</p>
                </div>
               <div className="text-gray-700 text-base mb-4 flex w-full justify-around mt-11">
                <div className="flex items-center gap-2">
                <img
                       className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-14"
                       src="https://img.icons8.com/ios-filled/512/google-maps.png"
                       alt="location"
                     />
                     <p>
                  {contact?.address?.city} City
                </p>
                </div>
               
                
                <div className="flex items-center gap-2">
                <img
                       className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-10"
                       src="https://img.icons8.com/ios-filled/512/gmail-new.png"
                       alt="email"
                     />
                <p>{contact?.email}</p>
                </div>
               </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AnimalDetails;
