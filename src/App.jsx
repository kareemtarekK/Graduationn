import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import Layout from "./Layouts/Layout";
import CheckPlate from "./Pages/Checkplate/CheckPlate";
import ReportTheft from "./Pages/ReportTheft/ReportTheft";
import Appeaks from "./Pages/Appeaks/Appeaks";
import TrackReport from "./Pages/Track-Report/Track";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ← ده اللي فيه الهيدر والفوتر
    children: [
      { path: "/", element: <Home /> },
      { path: "/checkPlate", element: <CheckPlate /> },
      { path: "/reporttheft", element: <ReportTheft /> },
      { path: "/trackreport", element: <TrackReport /> },
      { path: "/appeaks", element: <Appeaks /> }, // الصفحة العامة
      { path: "/appeaks/:id", element: <Appeaks /> }, // صفحة التظلم برقم البلاغ ✅
    ],
  },

  { path: "/register", element: <Signup /> },
  { path: "/login", element: <Login /> },

]);


const App = () => {
  return <RouterProvider router={routes} />;
};
export default App;
