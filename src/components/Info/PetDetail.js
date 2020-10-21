import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Info.css";

// FacebookShareButton permitirá compartir cualquier tipo de contenido a través de sus props
import FacebookShareButton from '../FacebookShareButton/FacebookShareButton'

import { db } from "../../index";

export default function PetDetail(props) {

  const [pet, setPet] = useState([]);

  const getPet = async () => {
     
      
    var docRef = db.collection("pet").doc(props.match.params.id);

docRef.get().then(function(doc) {
    if (doc.exists) {
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

  useEffect(() => {
    getPet();
    
  }, []);

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
                  <p className="card-text font-weight-bold">Especificaciones:</p>
                  <div className='d-flex justify-content-around'>
                  <p className="card-text"><strong>Edad:</strong> {pet.age} años</p>
                  <p className="card-text"><strong>Tamaño: </strong>{pet.size}</p>
                  <p className="card-text"><strong>Sexo:</strong> {pet.gender}</p>
                  <p className="card-text"><strong>Castrado:</strong> {pet.castreted}</p>
                  </div>
                  <p className="card-text"><strong>Personalidad</strong> {pet.personality}</p>
                  <p className="card-text"><strong>Historia: </strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic t</p>
                  <a href="#" className="btn btn-primary">Adoptar</a>
                  <FacebookShareButton
                    url = "https://www.facebook.com/ProtectoraSarmiento.Rosario"
                  />
              </div>
          </div>
      </div>
  </div>
      //  <div className="col-md-8 p-2"> 

      // <img width="100" height="100" src={pet.avatar} alt={pet.name} />
      //             <h2>nombre: {pet.name}</h2>
      //             <h4>edad: {pet.age}</h4>
      //             <h4>tipo: {pet.kind}</h4>
      //             <h4>personalidad: {pet.personality}</h4>
      //             <h4>tamaño: {pet.size}</h4>
      //             <h4>género: {pet.gender}</h4>
      //             <h4>castrado: {pet.castreted}</h4>  
      //             <Link to={`/Adoptions/Form/1`}>
      //                 <Button>Adoptar</Button>
      //               </Link>   
        //             /* Agrego botoncito para compartir en Facebook 
        //     Los atributos se condiderarán una vez esté deployada la web :)
        //  - Lean  
        //           <FacebookShareButton
        //             url = "https://www.facebook.com/ProtectoraSarmiento.Rosario"
        //           />
        //           // </div>

  );
}
