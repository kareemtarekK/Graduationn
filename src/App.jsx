import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import Layout from "./Layouts/Layout";
import CheckPlate from "./Pages/Checkplate/CheckPlate";
import ReportTheft from "./Pages/ReportTheft/ReportTheft";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/checkPlate", element: <CheckPlate /> },
      { path: "/reporttheft", element: <ReportTheft /> },
    ],
  },

  { path: "/register", element: <Signup /> },
  { path: "/login", element: <Login /> },

]);

const App = () => {
  return <RouterProvider router={routes} />;
};
export default App;
