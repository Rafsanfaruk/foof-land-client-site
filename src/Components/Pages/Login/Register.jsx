import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {

    
  const { createUser } =useContext(AuthContext);
  const [accepted,setAccepted] =useState(false);

  const handleRegister =(event)=>{
    event.preventDefault();
    const form =event.target;
    const name =form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;


    console.log(name, photo, email, password);

    createUser(email,password)
    .then(result =>{
      const createdUser = result.user;
      console.log(createdUser);
    })
    .catch(error =>{
      console.log(error);
    })

  }

  const handleAccepted =event =>{
    setAccepted(event.target.checked);
  }



    return (
        <div className="mx-auto w-1/4">
          <h3 className="text-2xl font-bold mb-4">Please Register</h3>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Your Name</label>
              <input
                className="border rounded-lg py-2 px-3 w-full"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">Photo URL</label>
              <input
                className="border rounded-lg py-2 px-3 w-full"
                type="text"
                name="photo"
                placeholder="Enter Your Photo URL"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email address</label>
              <input
                className="border rounded-lg py-2 px-3 w-full"
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
              <input
                className="border rounded-lg py-2 px-3 w-full"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <input 
                  className="mr-2"
                  onClick={handleAccepted}
                  type="checkbox"
                  name="accept"
                  required
                />
                <label className="text-gray-700 font-bold" htmlFor="accept">Accept <Link className="text-blue-500 hover:underline" to="/terms">Terms And Conditions</Link></label>
              </div>
            </div>
            <button 
              className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${!accepted && 'opacity-50 cursor-not-allowed'}`}
              type="submit"
              disabled={!accepted}
            >
              Register
            </button>
            <br />
            <div className="text-secondary">
              Already have an account? <Link className="text-blue-500 hover:underline" to="/login">Login</Link>
            </div>
          </form>
        </div>
      );
    
};

export default Register;