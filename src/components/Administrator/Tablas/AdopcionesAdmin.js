import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

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
      text: "¡La solicitud será borrada definitivamente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, aprobarla!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        db.collection("adoptions").doc(id).update({ estadoDeSolicitud: "Aprobado" });
        Swal.fire({
          title: 'Aprobado!',
          text: '¡La solicitud ha sido aprobada!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })

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

      confirmButtonText: '¡Si, rechazarla!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        db.collection("adoptions").doc(id).update({ estadoDeSolicitud: "Rechazado" });
        Swal.fire({
          title: 'Rechazado!',
          text: '¡La solicitud ha sido rechazada!',
          icon: 'warning',
          showConfirmButton: false,
          timer: 1500
        })
  
      }
    })
  }
  useEffect(() => {
    getAdoptions();
  }, []);

  const classes = useStyles();

  return (
    <div className="container text-center">
      <div className="mt-5">
        <Link to="/Admin">
          <button type="button" className="btn-danger p-2 mt-3 rounded m-2"><i class="fa fa-arrow-left"></i> Volver a administrar</button>
        </Link>
      </div>
      <div className="mt-5">
        <h3>Administrar solicitudes de adopción</h3>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Acciones</StyledTableCell>
                <StyledTableCell align="center">Nombre</StyledTableCell>
                <StyledTableCell align="center">Teléfono</StyledTableCell>
                <StyledTableCell align="center">Correo</StyledTableCell>
                <StyledTableCell align="center">Mascota</StyledTableCell>
                <StyledTableCell align="center">Fecha</StyledTableCell>
                <StyledTableCell align="center">Estado</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adoptions.map((adoption) => (
                <StyledTableRow key={adoption.id}>
                  <StyledTableCell align="center">
                    <li className="btn-group">
                      <button className="btn btn-danger" onClick={() => onUpdateReject(adoption.id)} data-toggle="tooltip" data-placement="bottom" title="Rechazar solicitud"> <i className="far fa-window-close"></i></button>
                      <button className="btn btn-success" onClick={() => onUpdateAprove(adoption.id)} data-toggle="tooltip" data-placement="bottom" title="Aceptar solicitud"> <i className="far fa-check-square" ></i></button>
                    </li>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {adoption.nombreCompleto}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {adoption.celular}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {adoption.email}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {adoption.nombrepet}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {adoption.fechaDeSolicitud}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {adoption.estadoDeSolicitud}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}