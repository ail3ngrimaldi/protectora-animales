import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  function onDeleteLink(id) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡El usuario sera borrado definitivamente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrarlo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        db.collection("users").doc(id).delete();
        Swal.fire(
          '¡Borrado!',
          '¡El usuario ha sido borrado correctamente!',
          'success'
        )
      }
    })
  }

  return (
    <TableContainer className='pl-3 pr-3' component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell >Apellido</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >ID</TableCell>
            <TableCell >Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(users)}
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {user.firstName}
              </TableCell>
              <TableCell component="th" scope="row" >{user.lastName}</TableCell>
              <TableCell component="th" scope="row" >{user.email}</TableCell>
              <TableCell component="th" scope="row" >{user.id}</TableCell>
              <TableCell component="th" scope="row">
                <button className="btn btn-danger" onClick={() => onDeleteLink(user.id)}><i className="fas fa-trash-alt"></i></button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <Link to="/Admin">
          <button type="button" className="btn btn-info btn-rounded btn-block">Volver</button>
        </Link>
      </div>
    </TableContainer>

  );
}

export default ListUsers;