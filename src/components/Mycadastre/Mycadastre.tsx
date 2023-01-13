import React, { useEffect } from "react"
import { Box, Button, Typography} from "@mui/material"
import { Link } from "react-router-dom"
import InputComponent from "../Input/Input"
import { useForm } from 'react-hook-form';
import  * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import IMycadastre from "../../interface/IMycadastre"
import {Container, ContainerForm,Form} from './styles'
import { FcSupport } from "react-icons/fc";
import axios from "axios";
import urlApi from "../../services/api";
import { toast } from "react-toastify";


const MyCastreComponent =()=>{

    const getStorageUser : any = localStorage.getItem("data")
    const {id,accessToken} = JSON.parse(getStorageUser)

    useEffect(()=>{
        
        if(id){
        axios.get(`${urlApi}/api/usuario/buscar/${id}`,{headers:{ Authorization:`Bearer ${accessToken}`}})
        }

    },[])

    const schema = yup.object().shape({
        username:yup.string().required("nome de usuario e Necessario"),
        password:yup.string().required("A senha e obrigatoria"),
        nome :yup.string().required("Nome e Necessario"),
        dataNascimento: yup.string().required("Inclua uma data de nascimento"),
        cpf: yup.string().required("Cpf e Necessario"),
        email: yup.string().email().required("Email e Necessario"),
        telefone:yup.string().required("Numero de telefone e necessario"),

    })
  
    const {register,handleSubmit,formState:{errors}, }= useForm<IMycadastre>({
      resolver: yupResolver(schema)
  });


  const onSubmitForm = async (bodyRequest:IMycadastre) => {
        const response = await axios.put(`${urlApi}/api/usuario/atualiza`,bodyRequest,{headers:{ Authorization:`Bearer ${accessToken}`}}).catch(function (error){
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
             toast.success("dados atualizados com sucesso", {
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
  
  }


    return(
        <>
    <Box sx={{ bgcolor: '#79bbf1', height: '100vh',width: '100%' ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingBottom: "60px"}} >
      <Typography sx={{paddingTop:"20px"}} variant="h2">
         <FcSupport/> Meu Cadastro
      </Typography>
      <Container style={{border: "1px solid #162b88"}}>
      <Form  onSubmit={handleSubmit(onSubmitForm)}>
      <ContainerForm>
              <InputComponent errors={errors?.username?.message} register={register} name="username" label="User" placeholder="Seu Username"/>
              <InputComponent errors={errors?.password?.message} register={register} name="password"  label="Senha" placeholder="Sua Senha" type ="password" />
              <InputComponent errors={errors?.email?.message} register={register} name="email" label="E-mail" placeholder="Seu Email" />
              <InputComponent errors={errors?.nome?.message} register={register} name="nome" label="Nome" placeholder="Insira seu nome"  />
              <InputComponent errors={errors?.telefone?.message} register={register} name="telefone" label="Telefone" placeholder="Insira seu numero de telefone"/>
              <InputComponent errors={errors?.cpf?.message} register={register} name="cpf" label="CPF" placeholder="Insira o CPF"/>
              <Button type="submit"  variant="contained">Editar</Button>          
    </ContainerForm>
      </Form>
      </Container>
  </Box>
        </>
    )
}


export default MyCastreComponent