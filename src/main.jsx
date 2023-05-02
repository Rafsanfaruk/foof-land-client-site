import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Components/Providers/AuthProvider";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
