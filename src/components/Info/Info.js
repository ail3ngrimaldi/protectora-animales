import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Info.css";

import { db } from "../../index";
import ModalDetalleMascota from './MyVerticallyCenteredModal'


export default function Info(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [pets, setPets] = useState([]);
  
  const getPets = async () => {
    db.collection("pet").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setPets(docs);
    });
  };

  useEffect(() => {
    getPets();
    console.log(getPets(), "ooooooooooooooooooooooooooo")
  }, []);

  return (
    <div>
      <Button variant="warning" onClick={() => setModalShow(true)}>
        Ver Más
      </Button>

      <ModalDetalleMascota
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
