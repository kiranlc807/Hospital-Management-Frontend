import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import AuthForm from './components/Auth';
import DashboardLayout from './components/DashBoard';
import Hospitals from './components/Hospitals';


function App() {
  const AppRoute = createBrowserRouter([
    {
      path:"/",
      element:<AuthForm/>,
    },
    {
      path:"/dashboard",
      element:<DashboardLayout/>,
      children:[
          {path: "hospital", index: true,element: <Hospitals />},
      ]
    }
  ])
  return (<RouterProvider router={AppRoute} ></RouterProvider>);
}

export default App;
