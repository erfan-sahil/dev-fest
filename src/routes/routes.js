import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import Teacher from "../components/teacher/Teacher";
import Students from "../components/students/Students";
import MyClass from "../components/myClass/MyClass";
import StudentProfile from "../components/studentProfile/StudentProfile";
import Online from "../components/online/Online";
import TeacherClass from "../components/teacherClass/TeacherClass";
import TeacherOnline from "../components/teacherOnline/TeacherOnline";
import TeacherProfile from "../components/teacherProfile/TeacherProfile";
import Excalidraw from "../components/excalidraw/Excalidraw";

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
            element:<Students></Students>,
        },
        {
            path:"/studentProfile",
            element:<StudentProfile></StudentProfile>
        },
        {
            path:"/myClass",
            element:<MyClass></MyClass>
        },
        {
            path:"/online",
            element:<Online></Online>
        },
        {
            path:"/teacherClass",
            element:<TeacherClass></TeacherClass>
        },
        {
            path:"/teacherOnline",
            element:<TeacherOnline></TeacherOnline>
        },
        {
            path:"/teacherProfile",
            element:<TeacherProfile></TeacherProfile>
        },
        {
            path:"/excalidraw",
            element:<Excalidraw></Excalidraw>
        },
      ]
    },
  ]);