import  React, { useEffect, useState } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import  * as yup from "yup"
import InputComponent from "../Input/Input";
import { ContainerForm, Form } from "../Login/styles";
import axios from "axios";
import { FcSupport,FcEmptyTrash } from "react-icons/fc";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import urlApi from '../../services/api';
import { Button, Typography } from '@mui/material';
import { FcManager } from "react-icons/fc";


interface IContactList {
  id?:number,
  nome?: string,
  tag?: string,
  email?: string,
  telefone?: string,
  privado?:boolean,
  tipoContato?: string,
}

const UsersComponent = () => {

  const schema = yup.object().shape({
    name: yup.string().required("Required name"),
    price:yup.number().required("Required price")

  })

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rows, setRows] = useState<IContactList[]>([]);

 useEffect(()=>{

  const getStorageUser : any = localStorage.getItem("data")
  
  const {id,accessToken} = JSON.parse(getStorageUser)

  const getStorageContact : any = localStorage.getItem("contact")

  if (!getStorageContact) {
   const requestContact =  axios.post(`${urlApi}/api/usuario/pesquisar`,{
    "termo": "EMAIL"
  }
   ,{headers:{ Authorization:`Bearer ${accessToken}`}} ).then((response)=>{
    const currentArray = []
    
    for(let i = 0 ; i <= response.data.length;i++){
        
    const arrayRespose = response.data[i]

    currentArray.push({  
      id: arrayRespose?.id,
      nome: arrayRespose?.pessoa?.nome,
      tag: arrayRespose?.tag,
      email: arrayRespose?.email,
      telefone: arrayRespose?.telefone,
      privado: arrayRespose?.privado,
      tipoContato:arrayRespose?.tipoContato
    })
    }

    setRows(currentArray)
   })
  }
},[])

  return (
    <div style={{ height: '100%', width: '80%', margin: "45px auto"}}>
       <Typography sx={{paddingTop:"20px" , textAlign:"center" }} variant="h2">
          <FcManager/> Usuarios
      </Typography>
      <Button style={{marginBottom:"15px"}} variant="contained"> Adicionar Usuario</Button>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="spanning table">
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="right">Nome</TableCell>
          <TableCell align="right">Tag</TableCell>
          <TableCell>Email</TableCell> 
          <TableCell>Telefone</TableCell>
          <TableCell>Privado</TableCell>
          <TableCell align="right">tipoContato</TableCell>
          <TableCell align="right">Editar</TableCell>
          <TableCell align="right">Deletar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.nome}</TableCell>
              <TableCell align="right">{row.tag}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.telefone}</TableCell>
              <TableCell align="right">{row.privado}</TableCell>
              <TableCell align="right">{row.tipoContato}</TableCell>
              <TableCell align="right"><FcSupport/></TableCell>
              <TableCell align="right"><FcEmptyTrash/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
};

export default UsersComponent;