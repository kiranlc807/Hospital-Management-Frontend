// import './App.css';
// import { RouterProvider,createBrowserRouter ,Navigate} from 'react-router-dom';
// import AuthForm from './components/Auth';
// import DashboardLayout from './components/DashBoard';
// import Hospitals from './components/Hospitals';
// import HospitalDetails from './components/HospitalDetails';
// import Appointments from './components/Appointments';
// import AdminHeader from './components/AdminHeader';


// function App() {
//   const AppRoute = createBrowserRouter([
//     {
//       path:"/",
//       element:<AuthForm/>,
//     },
//     {
//       path:"dashboard",
//       element:<DashboardLayout/>,
//       children:[
//           {path: "hospital",index: true, element: <Hospitals />},
//           {path: "about/:id",element: <HospitalDetails/>},
//           {path: "appointment",element: <Appointments/>}
//       ]
//     },
//     {
//       path:"admin",
//       element:<AdminHeader/>
//     }
//   ])
//   return (<RouterProvider router={AppRoute} ></RouterProvider>);
// }

import React, { useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter, Route, Navigate } from 'react-router-dom';
import AuthForm from './components/Auth';
import DashboardLayout from './components/DashBoard';
import AdminHeader from './components/AdminHeader';
import Hospitals from './components/Hospitals';
import HospitalDetails from './components/HospitalDetails';
import Appointments from './components/Appointments';
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminHospitals from './components/AdminHospitals';
import AdminDepartment from "./components/AdminHospitalDetails"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
console.log(isAuthenticated,"Hiii after update");
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const ProtectedRoute = ({ element, ...rest }) => {
    return isAuthenticated ? element : <Navigate to="/" />;
  };

  const AppRoute = createBrowserRouter([
    {
      path: "/",
      element: <AuthForm onLogin={handleLogin} />,
    },
    {
      path: "/dashboard",
      element: <ProtectedRoute element={<DashboardLayout onLogin={handleLogin}/>} />,
      children:[
          {path: "hospital",index: true, element: <Hospitals />},
          {path: "about/:id",element: <HospitalDetails/>},
          {path: "appointment",element: <Appointments/>}
      ]
    },
    {
      path: "/admin",
      element: <AdminLogin />,
    },
    {
      path:"/admindash",
      element:<AdminDashboard/>,
      children:[
        {path: "hospital",index: true, element: <AdminHospitals/>},
        {path: "department/:id",element:<AdminDepartment/>}
      ]
    }
  ]);

  return <RouterProvider router={AppRoute}></RouterProvider>;
}

export default App;






