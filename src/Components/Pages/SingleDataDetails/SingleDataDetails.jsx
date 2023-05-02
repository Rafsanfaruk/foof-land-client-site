import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleDataDetails = () => {

    // const { id } = useParams();
    // const [data,setData] =useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/data/${id}`)
    //       .then((res) => res.json())
    //       .then((data) =>setData (data))
    //       .catch((err) => console.log(err));
    //   }, []);

    // const {
    //     chefPicture,
    //     chefName,
    //     yearsOfExperience,
    //     numRecipes,
    //     likes,
    //     Recipes_image,
    //   } =data;

  return (
    <div className="my-container">
      <h1>hhhhhhhhhhhhiiiiiiiiiiiii</h1>
      <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
      {/* <div className=' lg:w-1/2 h-full'>
          <img
            src={Recipes_image}
            alt='cover'
            className='object-cover w-full  lg:h-full'
          />
        </div> */}
      </div>
    </div>
  );
};

export default SingleDataDetails;
