import LoginPage from "../pages/Login/Login";
import {createBrowserRouter,} from "react-router-dom";


 const RouterApp = createBrowserRouter([
    {
      path: "/",
      element:  <LoginPage/>
    },

  ]);

  export default RouterApp
