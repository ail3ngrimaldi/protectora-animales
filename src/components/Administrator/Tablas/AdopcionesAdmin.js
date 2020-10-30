import React, { useEffect, useState } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { db } from "../../../index";

export default function AdopcionesAdmin() {
  const [adoptions, setAdoptions] = useState([]);

  const getAdoptions = async () => {
    db.collection("adoptions").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setAdoptions(docs);
    });
  };

  async function onUpdateAprove(id) {
    await Swal.fire({
      title: '¿Desea aprobar la solicitud?',
      text: "¡La solicitud sera borrada definitivamente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, aprobarla!'
    }).then((result) => {
      if (result.value) {
        db.collection("adoptions").doc(id).update({ estadoDeSolicitud: "Aprobado" });
        Swal.fire(
          '¡Aprobado!',
          '¡La solicitud ha sido aprobada!',
          'success'
        )
      }
    })
  }

  async function onUpdateReject(id) {
    await Swal.fire({
      title: '¿Desea rechazar la solicitud?',
      text: "¡La solicitud será borrada definitivamente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrarlo!'
    }).then((result) => {
      if (result.value) {
        db.collection("adoptions").doc(id).update({ estadoDeSolicitud: "Rechazado" });
        Swal.fire(
          '¡Rechazado!',
          '¡La solicitud ha sido rechazada!',
          'warning'
        )
      }
    })
  }


  useEffect(() => {
    getAdoptions();
  }, []);

  return (
    <div>
      <div className="text-center">
        <Link to="/Admin">
          <button type="button" className="btn-danger p-2 mt-3 rounded">Volver</button>
        </Link>
      </div>
      <TableContainer className='pl-3 pr-3' component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Aceptar o Rechazar</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mascota</TableCell>
              <TableCell>Fecha de solicitud</TableCell>
              <TableCell>Estado de solicitud</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adoptions.map((adoption) => (


              <TableRow key={adoption.id}>
                <TableCell component="th" scope="row">
                  <button className="btn btn-danger m-2" onClick={() => onUpdateReject(adoption.id)}> <i className="far fa-window-close"></i></button>
                  <button className="btn btn-success m-2" onClick={() => onUpdateAprove(adoption.id)}> <i className="far fa-check-square" ></i></button>
                </TableCell>
                <TableCell component="th" scope="row">
                  {adoption.nombreCompleto}
                </TableCell>
                <TableCell component="th" scope="row">
                  {adoption.celular}
                </TableCell>
                <TableCell component="th" scope="row">
                  {adoption.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  {adoption.nombrepet}
                </TableCell>
                <TableCell component="th" scope="row">
                  {adoption.fechaDeSolicitud}
                </TableCell>
                <TableCell component="th" scope="row">
                  {adoption.estadoDeSolicitud}
                </TableCell>
                <TableCell component="th" scope="row">
                  {adoption.personality}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div>
        </div>
      </TableContainer>
    </div>
  )
};