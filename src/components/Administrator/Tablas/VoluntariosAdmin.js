import React, { useEffect, useState } from "react";
import PetForm from "./VoluntarioForm"; 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Swal from 'sweetalert2';

import { db } from "../../../index";
import { toast } from "react-toastify";

const Test = () => {
  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getLinks = async () => {
    db.collection("voluntary").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
    });
  };

  function onDeleteLink(id) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡La mascota sera borrada definitivamente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrarlo!'
    }).then((result) => {
      if (result.value) {
        db.collection("voluntary").doc(id).delete();
        Swal.fire(
          '¡Borrado!',
          '¡Su mascota ha sido borrada correctamente!',
          'success'
        )
      }
    })
  }

  useEffect(() => {
    getLinks();
  }, []);

  

  const addOrEditLink = async (linkObject) => {
    try {
      if (currentId === "") {
        await db.collection("voluntary").doc().set(linkObject);
        Swal.fire({
            icon: 'success',
            title: 'Perfecto',
            text: '¡Voluntario agregado con exito!'
          })
      } else {
        await db.collection("voluntary").doc(currentId).update(linkObject);
        Swal.fire({
            icon: 'success',
            title: 'Perfecto',
            text: '¡Voluntario editado con exito!'
          })
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-center">
      <div className="col-md-4 p-2">
       <PetForm {...{ addOrEditLink, currentId, links }} /> 
      </div>
      <TableContainer className='pl-3 pr-3' component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Acciones</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Edad</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Contribucion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {links.map((link) => (

              <TableRow key={link.id}>
                <TableCell component="th" scope="row">
                  <button className="btn btn-warning"><i onClick={() => setCurrentId(link.id)} class="fas fa-edit"></i></button>
                  <button className="btn btn-danger"><i onClick={() => onDeleteLink(link.id)} class="fas fa-trash-alt"></i></button>
                </TableCell>
                <TableCell component="th" scope="row">
                  {link.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {link.age}
                </TableCell>
                <TableCell component="th" scope="row">
                  {link.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  {link.address}
                </TableCell>
                <TableCell component="th" scope="row">
                  {link.contribution}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div>
        </div>
      </TableContainer>
    </div>
  );
};

export default Test;