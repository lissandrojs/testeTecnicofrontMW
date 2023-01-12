
import { Box, Button, Typography} from "@mui/material"
import { Link } from 'react-router-dom';
import {Container, ContainerForm,Form} from './styles'
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate ,useLocation} from "react-router-dom";
import { useForm } from 'react-hook-form';
import  * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'

import ILogin from "../../interface/ILogin";
import urlApi from "../../services/api";
import InputComponent from "../Input/Input";
import { toast} from "react-toastify";


const LoginComponent = () =>{

    const history = useNavigate()
    const location = useLocation();

    const schema = yup.object().shape({
      username:yup.string().required("nome de usuario e obrigatorio"),
      password:yup.string().required("A senha e obrigatoria")

  })

  const {register,handleSubmit,formState:{errors}, }= useForm<ILogin>({
    resolver: yupResolver(schema)
});

    const onSubmitForm = async (bodyRequest:ILogin) => {
        const response = await axios.post(`${urlApi}/api/auth/login`,bodyRequest).catch(function (error){
          if(error.response){
            toast.error("verifique as credencias se estão corretas", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          }
        });

        if (response) {
           localStorage.setItem("data",JSON.stringify(response.data))
            history("/home")
            toast.success("Seja Bem vindo "+ response.data.username, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
        }
      };

      useEffect(()=>{

        const getStorageUser : any = localStorage.getItem("data")
      
        if(JSON.parse(getStorageUser)?.accessToken){
          history("/home")
        }
      
      },[])      


    return(
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh',width: '100%' ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingBottom: "60px"}} >
      <Typography sx={{paddingTop:"20px"}} variant="h2">
          Login
      </Typography>
      <Container style={{border: "1px solid #162b88"}}>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
          <ContainerForm >
              <InputComponent errors={errors.username?.message} register={register} name="username" label="User" placeholder="Seu Username"/>
              <InputComponent errors={errors.password?.message} register={register} name="password"  label="Senha" placeholder="Sua Senha" type ="password" />
              
              <Button type="submit"  variant="contained">Entrar</Button>
              <Link style={{marginTop:"10px"}} to="/register"> Esqueceu sua senha?</Link>
              
          </ContainerForm>
      </Form>
      </Container>
  </Box>
        
      )
}

export default LoginComponent