import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Info.css";

// FacebookShareButton permitirá compartir cualquier tipo de contenido a través de sus props
import FacebookShareButton from '../FacebookShareButton/FacebookShareButton'

import { db } from "../../index";

export default function PetDetail(props) {

  const [pet, setPet] = useState([]);

  useEffect(() => {
    const getPet = async () => {
      var docRef = db.collection("pet").doc(props.match.params.id);

      docRef.get().then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setPet(doc.data())
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });
    };
    getPet();
  }, [props.match.params.id]);

  return (

    <div className="card">
      <div class="card-footer w-100 display-5">
        Presentamos a {pet.name}
      </div>
      <div className="row no-gutters">
        <div className="col-auto">
          <img src={pet.avatar} alt={pet.name} class="img-fluid" width='200' height='200' />
        </div>
        <div className="col">
          <div className="card-block px-2">
            <p className="card-text font-weight-bold">Mascota:</p>
            <div className='d-flex justify-content-around'>
              <p className="card-text"><strong>Edad:</strong> {pet.age} años</p>
              <p className="card-text"><strong>Tamaño: </strong>{pet.size}</p>
              <p className="card-text"><strong>Sexo:</strong> {pet.gender}</p>
              <p className="card-text"><strong>Castrado:</strong> {pet.castreted}</p>
            </div>
            <p className="card-text"><strong>Personalidad</strong> {pet.personality}</p>
            {/* <p className="card-text"><strong>Historia: </strong> {pet.history}</p> */}
            <Link to={{ pathname: `/Adoptions/Form/${pet.name}/`, state: pet }}>
              <button className='btn btn-info'>
                Adoptar
                    </button>
            </Link>
            <FacebookShareButton
              url="https://www.facebook.com/ProtectoraSarmiento.Rosario"
            />
          </div>
        </div>
      </div>
    </div>
  );
}