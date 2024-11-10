
import './App.css';
import Attendance from './Attendance';
import ClassAttendance from './ClassAttendance';
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const route=createBrowserRouter([
  
    {
      path:'/',
      element: <Attendance />

    },
   
    {
      path:'/classAttendance',
      element: <ClassAttendance/>
    }
   
  ])
  
  return (
    <>
 
    <RouterProvider router={route}/> 
    </>
  );
}

export default App;
