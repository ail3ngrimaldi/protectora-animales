import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { db } from "../../../index";

const ListUsers = () => {
  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getLinks = async () => {
    db.collection("users").onSnapshot((querySnapshot) => {
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
            <TableCell >Celular</TableCell>
            <TableCell >Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell component="th" scope="row" >{user.age}</TableCell>
              <TableCell component="th" scope="row" >{user.mail}</TableCell>
              <TableCell component="th" scope="row" >{user.name}</TableCell>
              <TableCell component="th" scope="row" >{user.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListUsers;