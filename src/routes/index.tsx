import {createBrowserRouter,} from "react-router-dom";

import LoginPage from "../pages/Login/Login";
import HomePage from "../pages/Home/Home";
import MyCadastrePage from "../pages/Mycadastre/Mycadastre";
import PeoplePage from "../pages/People/People";
import UsersPage from "../pages/Users/Users";
import ContactPage from "../pages/Contact/Contact";


 const RouterApp = createBrowserRouter([
    {
      path: "/",
      element:  <LoginPage/>
    },
    {
      path:"/home",
      element: <HomePage/>
    },
    {
      path:"/mycadastre",
      element: <MyCadastrePage/>
    },
    {
      path:"/users",
      element:<UsersPage/>
    },
    {
      path:"/people",
      element:<PeoplePage/>
    },{
      path:"/contact",
      element:<ContactPage/>
    }

  ]);

  export default RouterApp
