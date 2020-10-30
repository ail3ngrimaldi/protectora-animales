import React, { useEffect, useState } from "react";
import PetForm from "./VoluntarioForm";
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
      text: "¡El voluntario será borrado definitivamente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrarlo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        db.collection("voluntary").doc(id).delete();
        Swal.fire({
          title: 'Borrado!',
          text: '¡El voluntario ha sido borrado!',
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

  console.log("LINKS",links);

  const addOrEditLink = async (linkObject) => {
    try {
      if (currentId === "") {
        await db.collection("voluntary").doc().set(linkObject);
        Swal.fire({
          icon: 'success',
          title: 'Perfecto',
          text: '¡Voluntario agregado con exito!',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        await db.collection("voluntary").doc(currentId).update(linkObject);
        Swal.fire({
          icon: 'success',
          title: 'Perfecto',
          text: '¡Voluntario editado con exito!',
          showConfirmButton: false,
          timer: 1500
        })
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  const classes = useStyles();

  return (
    <div className="container text-center">
      <div className="mt-5">
        <Link to="/Admin">
          <button type="button" className="btn-danger p-2 mt-3 rounded m-2"><i class="fa fa-arrow-left"></i> Volver a administrar</button>
        </Link>
        <PetForm {...{ addOrEditLink, currentId, links }} />
      </div>
      <div className="mt-5">
        <h3>Administrar voluntarios</h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Acciones</StyledTableCell>
              <StyledTableCell align="center">Nombre</StyledTableCell>
              <StyledTableCell align="center">Edad</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Dirección</StyledTableCell>
              <StyledTableCell align="center">Tipo</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {links.map((link) => (
              <StyledTableRow key={link.id}>
                <StyledTableCell align="center">
                <li className="btn-group">
                  <button className="btn btn-warning" onClick={() => setCurrentId(link.id)}data-toggle="tooltip" data-placement="bottom" title="Editar voluntario"><i class="fas fa-edit"></i></button>
                  <button className="btn btn-danger" onClick={() => onDeleteLink(link.id)} data-toggle="tooltip" data-placement="bottom" title="Eliminar voluntario"><i class="fas fa-trash-alt"></i></button>
                </li>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {link.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {link.age}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {link.email}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {link.address}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {link.contribution}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  );
};

export default Test;