import LoginPage from "../pages/Login/Login";
import {createBrowserRouter,} from "react-router-dom";
import HomePage from "../pages/Home/Home";


 const RouterApp = createBrowserRouter([
    {
      path: "/",
      element:  <LoginPage/>
    },
    {
      path:"/home",
      element: <HomePage/>
    }

  ]);

  export default RouterApp
