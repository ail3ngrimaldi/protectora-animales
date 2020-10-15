import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Info.css";

import { db } from "../../index";

function MyVerticallyCenteredModal(props) {

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

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="col-md-8 p-2">
        {links.map((link) => (
          <div className="card mb-1" key={link.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">{link.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>edad: {link.age}</h4>
                  <h4>tipo: {link.kind}</h4>
                  <h4>personalidad: {link.personality}</h4>
                  <h4>tamaño: {link.size}</h4>
                  <h4>género: {link.gender}</h4>
                  <h4>castrado: {link.castreted}</h4>
                </Modal.Body>
                <Modal.Footer>
                  <Link to="/Adoptions/Form/1">
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

export default function Info() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button variant="warning" onClick={() => setModalShow(true)}>
        Ver Más
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
