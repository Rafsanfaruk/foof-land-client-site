import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Main from "../Layouts/Main";
import PrivateRoutes from "./PrivateRoutes";
import RecipeDetails from "../Pages/RecipeDetails/RecipeDetails";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import About from "../Pages/About/About";
import Blog from "../Pages/BLog/Blog";



const router = createBrowserRouter([
    // {
    //     path:'/',
    //     element:<LoginLayout></LoginLayout>,
    //     children:[
          
    //       {
    //         path:'/login',
    //         element:<Login></Login>
    //       },
    //       {
    //         path:'/register',
    //         element:<Register></Register>
    //       },
         
    //     ]
    // },
  
  {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[

        {
            path:'/',
            element:<Home></Home>
            
        },
        {
            path:'/about',
            element:<About></About>
         
        },
        {
            path:'/blog',
            element:<Blog></Blog>,
         
        }
        
        
      ],
    },
    
  ]);

  export default router;