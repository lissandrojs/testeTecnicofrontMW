
import { Box, Button, Typography} from "@mui/material"
import { Link } from 'react-router-dom';
import {Container, ContainerForm,Form} from './styles'
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import  * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'

import ILogin from "../../interface/ILogin";
import urlApi from "../../services/api";
import InputComponent from "../Input/Input";


const LoginComponent = () =>{

    const history = useNavigate()

    const schema = yup.object().shape({
      username:yup.string().required("nome de usuario e obrigatorio"),
      password:yup.string().required("A senha e obrigatoria")

  })

  const {register,handleSubmit,formState:{errors}, }= useForm<ILogin>({
    resolver: yupResolver(schema)
});

    const onSubmitForm = async (bodyRequest:ILogin) => {
        const response = await axios.post(urlApi,bodyRequest);

        if (response.data) {
            localStorage.setItem("data",JSON.stringify(response.data))
            // history("/home")
        }
        else{
          console.log("verifique as credencias estao corretas")
        }
      };


    return(
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh',width: '100%' ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingBottom: "60px"}} >
      <Typography sx={{paddingTop:"20px"}} variant="h2">
          Login
      </Typography>
      <Container style={{border: "1px solid #d6772e"}}>
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