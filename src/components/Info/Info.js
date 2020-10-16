import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Info.css";
import { db } from "../../index";
import ModalDetalleMascota from './ModalDetalleMascota'


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
  }, []);

  return (
    <div>
    {pets ? <Link to={`/pet/${props.petId}`}>
      <Button variant="warning" onClick={() => setModalShow(true)}>
         Ver mas...
      </Button>
      </Link>

       : <div>Cargando</div>}
       <ModalDetalleMascota
        show={modalShow}
        onHide={() => setModalShow(false)}
        state={pets}
      />
    
    </div>
  );
}
