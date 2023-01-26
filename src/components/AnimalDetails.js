

import React, { useEffect, useState } from "react";

function AnimalDetails() {
  
    return <div>

<iframe src="https://giphy.com/embed/kUTME7ABmhYg5J3psM" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        
    </div>;
  }

  const DetailedOrganization = ({ animals }) => {
    return (
      <div className="detailed-page">
        <div className="individualCards block p-6 rounded-lg shadow-lg bg-white ">
          
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mb-11 ml-9 flex  items-center justify-center">
              {organization.photos.length > 0 ? (
                <img
                  src={animals.photos[0].large}
                  alt={animals.name + " logo"}
                  
                  className="h-40 w-70 flex-none  bg-slate-100"
                />
              ) : (
               <img
                  src=""
                  alt={animals.name + " logo"}
                  width="60"
                  height="88"
                  className="flex-none rounded-md bg-slate-100"
                />
              )}
              
              <p className="ml-6">{organization.name}</p>
        
            </div>
           
           
          
        </div>

        <div className="About"></div>

        <div className=" mt-12 ">
          <div className="discover block p-6 rounded-lg shadow-lg bg-white ">
            <h5
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-gray-900 text-4xl leading-tight font-medium ml-10 mb-2"
              style={{ lineHeight: "3.5" }}
            >
            </h5>
            <p className="text-gray-700 text-base mb-4 ">
              <span
                style={{
                  fontSize: "4em",
                  float: "left",
                  margin: "0 0.6em 0 0",
                }}
              >
                {"organization.id"}
                {" "}
              </span>
              <p className=""style={{ letterSpacing: "1px", lineHeight: "2.5" }}>
                {" "}
                t our organization, we understand the joy and companionship that
                a pet can bring to a person's life. That's why we are committed
                to rescuing and rehoming animals in need. Whether they are
                stray, abandoned, or surrendered, we take in all pets with open
                arms and provide them with the care and love they deserve. Our
                team of dedicated volunteers works tirelessly to ensure that
                each animal in our care receives the best possible treatment.
                From providing medical care and vaccinations to behavior
                training and socialization, we go above and beyond to prepare
                our pets for their forever homes. We also believe in matching
                the right pet with the right person. That's why we take the time
                to get to know each of our adopters, and make sure they are
                prepared for the responsibility and commitment of pet ownership.
                We want to make sure that every adoption is a success and that
                both the pet and the adopter are happy. We have a wide variety
                of pets available for adoption, from dogs and cats to small
                animals such as rabbits and guinea pigs. All our animals are
                spayed or neutered, microchipped and have all necessary
                vaccinations. We also provide post-adoption support, so if you
                need any help or advice after adopting a pet, we will be there
                for you. Visit our website today and browse through our adorable
                adoptable animals. You might just find the perfect companion to
                bring into your life and home.
              </p>
            </p>
          </div>
        </div>

        <div className=" moreInfo ">
          <div className=" block p-6 rounded-lg shadow-lg bg-white ">
            <table className="SecondColumn mb-1 mr-12 ">
              <div className="mb-4">
                <tbody>
                  <tr className=" bg-white border-b w-80">
                    <div className="mb-5 grid grid-cols-3">
                      <img
                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-10"
                        src="https://img.icons8.com/ios-filled/512/calendar.png"
                        alt={organization.name + " logo"}
                      ></img>
                      <td className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 whitespace-nowrap text-left font-medium text-gray-900 text-xl">
                        Weekly hours: 10:00am - 4:00pm
                      </td>{" "}
                    </div>
                  </tr>{" "}
                </tbody>

                <tbody>
                  <tr className=" bg-white border-b w-80">
                    <td
                      style={{ letterSpacing: "1px", lineHeight: "2.5" }}
                      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  py-4"
                    >
                      Monday: 1:00 PM – 4:00 PM<br></br>
                      Tuesday: 1:00 PM – 4:00 PM<br></br>
                      Wednesday: 1:00 PM – 4:00 PM<br></br>
                      Thursday: 1:00 PM – 4:00 PM<br></br>
                      Friday:1:00 PM – 4:00 PM <br></br>
                      Saturday:1:00 PM – 4:00 PM<br></br>
                      Sunday: 1:00 PM – 4:00 PM{" "}
                    </td>{" "}
                  </tr>{" "}
                </tbody>
              </div>
              <div className="mb-4">
                <tbody>
                  <tr className=" bg-white border-b w-80">
                    <div className="CardLogos transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-11 mb-2 grid ">
                      {organization.mission_statement
                        ? organization.mission_statement
                        : "Rescue a Pet, Rescue a Life: Learn About Our Adoption Process"}{" "}
                      <a href="  #" style={{ color: "#7427F2" }}>
                        Read more{" "}
                      </a>
                    </div>
                  </tr>{" "}
                </tbody>
              </div>
              <div className="mb-4">
                <tbody>
                  <tr className=" bg-white border-b w-80">
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 CardLogos mt-11 mb-2 grid grid-cols-3">
                      <img
                        className="h-10"
                        src="https://img.icons8.com/ios-filled/512/instagram-new.png"
                        alt={organization.name + " logo"}
                      ></img>
                      <td className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  mb-2 grid grid-cols-3">
                        <img
                          className="h-10"
                          src="https://img.icons8.com/ios-filled/512/twitter.png"
                          alt={organization.name + " logo"}
                        ></img>
                      </td>
                      <td className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mb-2 grid grid-cols-3">
                        <img
                          className="h-10"
                          src="https://img.icons8.com/ios-filled/512/facebook.png"
                          alt={organization.name + " logo"}
                        ></img>
                      </td>
                    </div>
                  </tr>{" "}
                </tbody>
              </div>
            </table>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <DetailedOrganization organization={organization[6]} />
    </div>
  );
}
export default AnimalDetails;