import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Info.css";
import Formulario from "../Adoptions/Formulario"

// FacebookShareButton permitirá compartir cualquier tipo de contenido a través de sus props
import FacebookShareButton from '../FacebookShareButton/FacebookShareButton'

import { db } from "../../index";

export default function PetId(props) {

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
    
      <div className="col-md-8 p-2"> 
      <img width="100" height="100" src={pet.avatar} alt={pet.name} />
                  <h2>nombre: {pet.name}</h2>
                  <h4>edad: {pet.age}</h4>
                  <h4>tipo: {pet.kind}</h4>
                  <h4>personalidad: {pet.personality}</h4>
                  <h4>tamaño: {pet.size}</h4>
                  <h4>género: {pet.gender}</h4>
                  <h4>castrado: {pet.castreted}</h4>  
                  <Link to={{pathname:`/Adoptions/Form/${pet.name}/`, state:pet}}>Adoptar</Link>
                    {/* Agrego botoncito para compartir en Facebook 
            Los atributos se condiderarán una vez esté deployada la web :)
         - Lean */}   
                  <FacebookShareButton
                    url = "https://www.facebook.com/ProtectoraSarmiento.Rosario"
                  />
                  
                     </div>
    
  );
}


