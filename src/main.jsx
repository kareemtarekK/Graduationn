import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import { createBrowserRouter, 
  RouterProvider,} from 'react-router-dom';
  import Login from './Authentication/Login';

  import Signup from './Authentication/Signup';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement:<h1>SORRY.....</h1>
  },

  {
    path: "/",
    element: <Signup/>,
    errorElement:<h1>SORRY.....</h1>
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <RouterProvider router ={router}/>
  </React.StrictMode>
);
