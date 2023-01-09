import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import RouterApp from "./routes";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
     <RouterProvider router={RouterApp} />
  </React.StrictMode>
);

reportWebVitals();
