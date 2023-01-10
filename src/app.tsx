
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {RouterProvider} from "react-router-dom";
import RouterApp from "./routes";


const  App=()=> {
  
  return (
    <>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
        <RouterProvider router={RouterApp} />

    </>
  );
}

export default App;