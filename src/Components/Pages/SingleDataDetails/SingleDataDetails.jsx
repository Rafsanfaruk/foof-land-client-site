import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleDataDetails = () => {
  const data = useLoaderData();
  const {
    chefPicture,
    chefName,
    yearsOfExperience,
    numRecipes,
    likes,
    Recipes_image,
    description,
    ingredients,
  } = data[0];

  const [isClicked, setIsClicked] = useState(false); // state variable to track whether button has been clicked

  const notify = () => toast("Favorite Added to Wow !!");

  const handleButtonClick = () => {
    setIsClicked(true); // set state variable to true when button is clicked
    notify();
  };

  return (
    <div className="my-container mt-16">
      <h1 className="mb-10 font-bold text-3xl text-center text-blue-400">
        Cook Together
      </h1>

      <div className="flex flex-col lg:flex-row bg-base-100 shadow-xl">
        <div className="lg:w-1/2">
          <img
            src={Recipes_image}
            alt="Album"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 p-8">
          <h2 className=" font-bold text-2xl mb-2">Name: {chefName}</h2>
          <p>Experience: {yearsOfExperience} years</p>
          <p>Description: {description} </p>
          <ul className="list-disc">
            <li>Ingredients: {ingredients}</li>
          </ul>
          <p className="mt-4 flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>
            </span>
            :{likes}
          </p>
          <div className="card-actions justify-end mt-8">
            <button
              onClick={handleButtonClick}
              className="btn btn-primary"
              disabled={isClicked} // disable button if it has been clicked
            >
              {isClicked ? "Added to Favorites" : "Add to Favorite"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleDataDetails;
