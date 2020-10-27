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
              <TableCell component="th" scope="row" > Cosas que puede hacer admin
              <button className='btn btn-info'>X</button>
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