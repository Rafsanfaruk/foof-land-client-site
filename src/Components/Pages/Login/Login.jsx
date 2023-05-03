import React, { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

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
    <Container className="mx-auto w-25">
      <h3 className="text-xl font-medium mb-4">Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="block text-sm font-medium mb-2">
            Email address
          </Form.Label>
          <Form.Control
            className="block w-full rounded-md shadow-sm py-2 px-3 border border-gray-300"
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="block text-sm font-medium mb-2">
            Password
          </Form.Label>
          <Form.Control
            className="block w-full rounded-md shadow-sm py-2 px-3 border border-gray-300"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check
            className="text-sm font-medium text-gray-700"
            type="checkbox"
            label="Remember Me"
          />
        </Form.Group>
        <Form.Text></Form.Text>
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Login
        </Button>
        <br />
        <Form.Text className="text-gray-500 text-sm mt-2">
          Don't Have an Account?{" "}
          <Link className="text-blue-500 hover:text-blue-700" to="/register">
            Register
          </Link>
        </Form.Text>
        <Form.Text className="text-green-500"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
