
import './App.css';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Register from './Components/Register/Register';

import Login from './Components/Login/Login';

import Notfound from './Components/Notfound/Notfound';


import AuthContextProvider from './Contexts/AuthContext';
import AuthProtectedRoute from './Components/AuthProtecedRoute/AuthProtectedRoute';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import CheckOtp from './Components/CheckOtp/CheckOtp';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import { ToastContainer } from 'react-toastify';

import Home from './Components/Student/Home/Home';
import MyCourses from './Components/Student/MyCourses/MyCourses';
import AddTask from './Components/Student/Tasks/AddTask';
import Settings from './Components/Student/Settings/Settings';
import Privacy from './Components/Student/Settings/Privacy';
import CourseInfo from './Components/Student/Courses/CourseInfo/CourseInfo';
import Materials from './Components/Student/Materials/Materials';
import Posts from './Components/Student/Posts/Posts';

import InstructorHome from './Components/Instructor/InstructorHome';
import InstructorAddTask from './Components/Instructor/Tasks/InstructorAddTask';
import InstructorSettings from './Components/Instructor/InstructorSettings/InstructorSettings';
import InstructorPrivacy from './Components/Instructor/InstructorSettings/InstructorPrivacy';
import InstructorMaterials from './Components/Instructor/InstructorMaterials/InstructorMaterials';
import UploadMaterial from './Components/Instructor/InstructorMaterials/UploadMaterial';
import Posting from './Components/Instructor/Posting';

import AdminHome from './Components/Admin/AdminHome'
import StudentChatbot from './Components/Student/Chatbot/Chatbot';
import UserList from './Components/Admin/UserList';
import AdminCreatecourse from './Components/Admin/AdminCreateCourse';
import BankQuestion from './Components/Student/QuestionBank/QuestionBank';
import Wagha from './Components/Wagha/Wagha';

function App() {
  const routes = createBrowserRouter([
    {
      path: "",element: <Layout />,children: [

        {path:"" , element: <Navigate to={'Wagha'} />},
        {path:"wagha" , element:<Wagha />},
        {path: "Register", element:  <Register />  },
        {path: "Login", element:  <Login /> },
        {path: "forgetpassword" , element: <ForgetPassword />},
        {path: "verificationcode" , element: <CheckOtp />},
        {path: "resetpassword" , element: <ResetPassword />},

        {path: "Home" , element: <Home />},
        {path: "MyCourses", element: <MyCourses />},
        {path: "AddTask", element: <AddTask />},
        {path: "Settings", element: <Settings />},
        {path: "Privacy", element: <Privacy />},
        {path: "CourseInfo/:courseId", element: <CourseInfo />},
        {path: "Materials/:courseId" , element: <Materials />},
        {path: "StudentPosts/:courseId" , element: <Posts />},
        {path: "StudentChatbot" , element: <StudentChatbot />},

        {path: "BankQuestion/:courseId" , element: <BankQuestion />},


        {path: "InstructorHome" , element: <InstructorHome />},
        {path: "InstructorAddTask" , element: <InstructorAddTask />},
        {path: "InstructorSettings" , element: <InstructorSettings />},
        {path: "InstructorPrivacy" , element: <InstructorPrivacy />},
        {path: "UploadMaterial/:courseId" , element: <UploadMaterial />},
        {path: "InstructorMaterials/:courseId" , element: <InstructorMaterials />},
        {path: "InstructorPosts/:courseId" , element: <Posting />},



        {path: "AdminHome" , element: <AdminHome />},
        {path: "UserList" , element: <UserList />},
        {path: "AdminCreatecourse" , element: <AdminCreatecourse />},








      ],
    },
     {path:'*' , element:<Notfound /> },
  
  ]);
  return <>
    <AuthContextProvider>
    <RouterProvider router={routes}>
      
      </RouterProvider>
    </AuthContextProvider>
    <ToastContainer />
    
    
   
  </>
}

export default App;
