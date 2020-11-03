import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Info.css";
import { db } from "../../index";
// import ModalDetalleMascota from './ModalPetDetail'

// FacebookShareButton permitirá compartir cualquier tipo de contenido a través de sus props
import FacebookShareButton from '../FacebookShareButton/FacebookShareButton'


export default function CardPet(props) {
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
      {pets ? <div> <Link to={`/pet/${props.petId}`}>
        <Button variant="warning" onClick={() => setModalShow(true)}>
          VER
                      </Button>
      </Link>

        {/* Agrego botoncito para compartir en Facebook 
            Los atributos se condiderarán una vez esté deployada la web :)
         - Lean */}
        <FacebookShareButton
          url="https://www.facebook.com/ProtectoraSarmiento.Rosario"
        />
      </div>

        : <div>Por el momento no hay mascotas en adopción</div>}
      {/* <ModalDetalleMascota
        show={modalShow}
        onHide={() => setModalShow(false)}
        state={pets}
      /> */}

    </div>
  );
}