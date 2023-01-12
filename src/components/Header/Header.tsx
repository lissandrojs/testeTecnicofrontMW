import React from "react";
import { ToastContainer } from "react-toastify";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {

  const getStorageUser : any = localStorage.getItem("data")

  const history = useNavigate();

  const location = useLocation();

  const handleLogout = () => {
    history("/");
    localStorage.clear();
  };

  return (
    <div className="topbar">
      <div>
        <img
          style={{ width: "105px", marginTop: "7px" }}
          src="http://www.metaway.com.br/images/logo-metaway.png"
        />
      </div>
      <div className="userAction">
        {location.pathname !== "/" ? (
          <ul>
           <li>
           <Avatar sx={{ bgcolor: "grey" }}>{JSON.parse(getStorageUser)?.username[0].toUpperCase()}</Avatar>
           </li>
            <Link to="/">
            <Button variant="contained" >
               Home
              </Button>

            </Link>
            <Link to="/mycadastre">
              <Button variant="contained" >
                Meu Cadastro
              </Button>
            </Link>
            <Link to="/users">
              <Button variant="contained" color="success">
                Usúarios
              </Button>
            </Link>
            <Link to="/people">
              <Button variant="contained" >
                Pessoas
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="contained" >
                Contatos
              </Button>
            </Link>
            <Link to="/">
              <Button color="error" variant="contained" onClick={handleLogout}>
                Logout
              </Button>
            </Link>
          </ul>
        ) : null}
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
        theme="colored"
      />
    </div>
  );
};

export default Header;
