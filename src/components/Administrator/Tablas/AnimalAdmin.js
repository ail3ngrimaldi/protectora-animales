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
    minWidth: 100,
  },
});

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

  function onDeleteLink(id) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡La mascota será borrada definitivamente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrarla!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        db.collection("pet").doc(id).delete();
        Swal.fire({
          title: '¡Borrado!',
          text: '¡Su mascota ha sido borrada correctamente!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  useEffect(() => {
    getLinks();
  }, []);

  const classes = useStyles();

  return (
    <div className="container text-center">
      <div className="mt-5">
        <Link to="/Admin/Createpet">
          <button type="button" className="btn-info p-2 mt-3 rounded m-2"><i class="fa fa-upload" aria-hidden="true"></i> Ingresar Mascota</button>
        </Link>
        <Link to="/Admin">
        <button type="button" className="btn-danger p-2 mt-3 rounded m-2"><i class="fa fa-arrow-left"></i> Volver a administrar</button>
        </Link>
      </div>
      <div className="mt-5" style={{width:"auto"}}>
      <h3>Administrar mascotas</h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Acciones</StyledTableCell>
              <StyledTableCell align="center">Foto</StyledTableCell>
              <StyledTableCell align="center">Nombre</StyledTableCell>
              <StyledTableCell align="center">Edad</StyledTableCell>
              <StyledTableCell align="center">Sexo</StyledTableCell>
              <StyledTableCell align="center">Tamaño</StyledTableCell>
              <StyledTableCell align="center">Castrado</StyledTableCell>
              <StyledTableCell align="center">Personalidad</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {links.map((pet) => (
              <StyledTableRow  key={pet.id}>
                <StyledTableCell align="center">
                  <li className="btn-group">
                  <Link to={{ pathname: `/Admin/editpet/${pet.id}`, state: { pet: pet } }} className="btn btn-warning m-2" data-toggle="tooltip" data-placement="bottom" title="Editar mascota"><i className="fas fa-edit"></i>
                  </Link>
                  <button className="btn btn-danger m-2" data-toggle="tooltip" data-placement="bottom" title="Eliminar mascota" onClick={() => onDeleteLink(pet.id)}><i className="fas fa-trash-alt"></i>
                  </button>
                  </li>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <img src={pet.avatar} alt={pet.name} class="img-fluid" width='70' height='70' />
                </StyledTableCell>
                <StyledTableCell align="center">
                  {pet.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {pet.age}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {pet.gender}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {pet.size}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {pet.castreted}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {pet.personality}
                </StyledTableCell>
              </StyledTableRow >
            ))}
          </TableBody>
        </Table>
        <div>
        </div>
      </TableContainer>
      </div>
    </div>
  )
};

export default ListPets;
