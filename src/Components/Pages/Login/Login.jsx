
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const from = location.state?.from?.pathname || "/category/0";

    signIn(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-xs">
        <h3 className="text-2xl font-bold mb-6 text-center">Please Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-500 font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">Remember Me</span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <Link
              to="/register"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
