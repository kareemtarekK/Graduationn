import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home/Home';
import Signup from './Authentication/Signup';
import Login from './Authentication/Login';
import Layout from './Layouts/Layout';

const routes = createBrowserRouter([

   {path: '/', element: <Layout />, children: [

      {path: '/', element: <Home />},
      {path: '/checkPlate', element: <Home />},

   ]},

   {path: '/register', element: <Signup />},
   {path: '/login', element: <Login />},

]);

const App = () =>{

return(
   <RouterProvider router={routes} />
)
};
export default App;