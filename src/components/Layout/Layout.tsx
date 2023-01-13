import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import React, {ReactNode, useEffect} from "react";
import IChildren from "../../interface/IChildren";
import { useNavigate } from "react-router-dom";


const Layout = ({children }:IChildren) => {
  const history = useNavigate()

useEffect(()=>{
  const getStorageUser : any = localStorage.getItem("data")
  
 

  if(!JSON.parse(getStorageUser)?.accessToken){
    history("/")
  }

},[])

  return (
    <div  style={{backgroundColor:'#79bbf1'}}>
      <Header />
      <div >
        <div style={{height:"100vh"}}>
            {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;