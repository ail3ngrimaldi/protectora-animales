import React, { useEffect, useState } from 'react';
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

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    db.collection("users").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setUsers(docs);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  function onDeleteLink(id) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡El usuario será borrado definitivamente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrarlo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        db.collection("users").doc(id).delete();
        Swal.fire({
          title: '¡Borrado!',
          text: '¡El usuario ha sido borrado correctamente!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  const classes = useStyles();

  return (
    <div className="container text-center">
      <div className="mt-5">
        <Link to="/Admin">
          <button type="button" className="btn-danger p-2 mt-3 rounded m-2"><i class="fa fa-arrow-left"></i> Volver a administrar</button>
        </Link>
      </div>
      <div className="mt-5">
        <h3>Administrar usuarios registrados</h3>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Acciones</StyledTableCell>
                <StyledTableCell align="center">Nombre</StyledTableCell>
                <StyledTableCell align="center">Apellido</StyledTableCell>
                <StyledTableCell align="center">Correo</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {console.log(users)}
              {users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell align="center">
                    <button className="btn btn-danger" onClick={() => onDeleteLink(user.id)} data-toggle="tooltip" data-placement="bottom" title="Eliminar usuario"><i class="fas fa-trash-alt"></i>
                    </button>
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.firstName}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.lastName}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ListUsers;