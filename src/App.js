import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import AuthForm from './components/Auth';

function App() {
  const AppRoute = createBrowserRouter([
    {
      path:"/",
      element:<AuthForm/>
    }
  ])
  return (<RouterProvider router={AppRoute} ></RouterProvider>);
}

export default App;
