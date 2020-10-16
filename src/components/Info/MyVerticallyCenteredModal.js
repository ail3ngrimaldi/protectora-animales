import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Info.css";

import { db } from "../../index";

export default function ModalDetalleMascota (props) {
 
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
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="col-md-8 p-2">
          {pets.map((pet) => (
            <div className="card mb-1" key={pet.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"><Link to={`/pet/${pet.id}`}> ID </Link>{pet.name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <img width="100" height="100" src={pet.avatar} alt={pet.name} />
                    <h4>edad: {pet.age}</h4>
                    <h4>tipo: {pet.kind}</h4>
                    <h4>personalidad: {pet.personality}</h4>
                    <h4>tamaño: {pet.size}</h4>
                    <h4>género: {pet.gender}</h4>
                    <h4>castrado: {pet.castreted}</h4>
                  </Modal.Body>
                  <Modal.Footer>
                    <Link to={`/Adoptions/Form/${pet.id}`}>
                      <Button>Adoptar</Button>
                    </Link>
                  </Modal.Footer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    );
  }