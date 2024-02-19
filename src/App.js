import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import AuthForm from './components/Auth';
import DashboardLayout from './components/DashBoard';
import Hospitals from './components/Hospitals';
import HospitalDetails from './components/HospitalDetails';


function App() {
  const AppRoute = createBrowserRouter([
    {
      path:"/",
      element:<AuthForm/>,
    },
    {
      path:"dashboard",
      element:<DashboardLayout/>,
      children:[
          {path: "hospital", element: <Hospitals />},
          {path: "about/:id",element: <HospitalDetails/>},
          {path: "about/:id",element: <HospitalDetails/>}
      ]
    }
  ])
  return (<RouterProvider router={AppRoute} ></RouterProvider>);
}

export default App;
