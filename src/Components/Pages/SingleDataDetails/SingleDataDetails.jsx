import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const SingleDataDetails = () => {
  const data = useLoaderData();
  const {
    chefPicture,
    chefName,
    yearsOfExperience,
    numRecipes,
    likes,
    Recipes_image,
  } = data;

  return (
    <div className="my-container mt-16">
      <h1 className="font-bold text-2xl text-center">Cook Together</h1>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={Recipes_image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDataDetails;
