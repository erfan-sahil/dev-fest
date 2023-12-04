import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import Teacher from "../components/teacher/Teacher";
import Students from "../components/students/Students";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/teacher",
            element:<Teacher></Teacher>
        },
        {
            path:"/student",
            element:<Students></Students>
        },
      ]
    },
  ]);