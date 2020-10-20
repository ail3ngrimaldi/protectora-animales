import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Info.css";

// FacebookShareButton permitirá compartir cualquier tipo de contenido a través de sus props
import FacebookShareButton from '../FacebookShareButton/FacebookShareButton'
  
import { db } from "../../index";

export default function ModalPetDetail (props) {

    const [pet, setPet] = useState([]);
  
    const getPet = async () => {
        
      var docRef = db.collection("pet").doc(props.match.params.id);

  var petData;

  docRef.get().then(function(doc, petData) {
      if (doc.exists) {
          petData = doc.data();
          console.log("Document data:", doc.data());
          setPet(doc.data())
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
    };
    console.log(setPet);
    console.log('holis')
  
    useEffect(() => {
      getPet();
      
    }, []);


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <button>hola</button>
        <div className="col-md-8 p-2">
          {props.state ? props.state.map((pet) => (

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
          )) : <div>CARGANDO</div>}
        </div>
                     {/* Agrego botoncito para compartir en Facebook 
             Los atributos se condiderarán una vez esté deployada la web :)
          - Lean */}   
                   <FacebookShareButton
                     url = "https://www.facebook.com/ProtectoraSarmiento.Rosario"
                  />
      </Modal>
    );
  }