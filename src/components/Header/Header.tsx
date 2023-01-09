import React from "react"
import { ToastContainer } from "react-toastify"
import "./style.css"


const Header =()=>{
    return(
        <div className="topbar">
            <div>
                <img style={{width:"105px",marginTop:"7px"}}src="http://www.metaway.com.br/images/logo-metaway.png"/>
            </div>
            <div className="userAction">
                <ul>
                  
                </ul>
            </div>
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
          ></ToastContainer>
        </div>
        )
}

export default Header