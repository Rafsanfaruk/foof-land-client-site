import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Main from "../Layouts/Main";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import About from "../Pages/About/About";
import Blog from "../Pages/BLog/Blog";
import SingleDataDetails from "../Pages/SingleDataDetails/SingleDataDetails";
import CardDetails from "../Layouts/CardDetails";
import SingleCard from "../Pages/Card/SingleCard/SingleCard";


const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout>

    </LoginLayout>,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  },
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/card",
    element: <CardDetails></CardDetails>,
    children: [
      
    
      {
        path: ":id",
        element:<PrivateRoutes><SingleDataDetails /></PrivateRoutes>,
        
        loader: ({ params }) => fetch(`https://b7a10-chef-recipe-hunter-server-side-rafsanfaruk-rafsanfaruk.vercel.app/data/${params.id}`),
      },
    ],
  },
]);

export default router;
