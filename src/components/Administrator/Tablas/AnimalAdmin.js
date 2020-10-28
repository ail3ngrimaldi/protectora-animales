import React, { useEffect, useState } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

import { db } from "../../../index";

const ListPets = () => {
    const [links, setLinks] = useState([]);
  
    const getLinks = async () => {
      db.collection("pet").onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setLinks(docs);
      });
    };
  
    useEffect(() => {
      getLinks();
    }, []);

  return (
    <div>
      <div className="text-center">
      <Link to="/Admin/Createpet">
        <button type="button" className=" btn-info p-2 mt-3 rounded">Ingresar Mascota</button>
      </Link> 
      <Link to="/Admin">
      <button type="button" className="btn-danger p-2 mt-3 rounded">Volver</button>
      </Link>    
      </div>
    <TableContainer className='pl-3 pr-3' component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Acciones</TableCell>
            
            <TableCell>Foto</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Edad</TableCell>
            <TableCell>Sexo</TableCell>
            <TableCell>Tamaño</TableCell>
            <TableCell>Castrado</TableCell>
            <TableCell>Personalidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map((pet) => (
            
            <TableRow key={pet.id}>
                <TableCell component="th" scope="row">
                <i class="fas fa-edit"></i> <i class="fas fa-trash-alt"></i>
                 </TableCell>
                <TableCell component="th" scope="row">
                 <img src={pet.avatar} alt={pet.name} class="img-fluid" width='70' height='70' />
                 </TableCell>
              <TableCell component="th" scope="row">
                {pet.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {pet.age}
              </TableCell>
              <TableCell component="th" scope="row">
                {pet.gender}
              </TableCell>
              <TableCell component="th" scope="row">
                {pet.size}
              </TableCell>
              <TableCell component="th" scope="row">
                {pet.castreted}
              </TableCell>
              <TableCell component="th" scope="row">
                {pet.personality}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
      </div>
    </TableContainer>
    </div>
  )};

  export default ListPets;
