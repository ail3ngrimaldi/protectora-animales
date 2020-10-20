import React, { useEffect, useState } from "react";
import Info from "../Info/CardPet";
import styles from './Gallery.css'

import { db } from "../../index";

const ListPets = () => {
  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");

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
    <div>
     <div>
        <div className="col-md-12 d-flex justify-content-center     mb-5">
          <button type="button" className="btn btn-outline-black waves-effect filter" data-rel="all">Todos</button>
          <button type="button" className="btn btn-outline-black waves-effect filter" data-rel="1">Perros</button>
          <button type="button" className="btn btn-outline-black waves-effect filter" data-rel="2">Gatos</button>
         </div>
       </div>
      
      <div>
          <div className="gallery" id="gallery">
            {links.map((pet) => (
            <div  key={pet.id}>
                
                    <div className="imageInfo">
                    <img className="img-fluid" src={pet.avatar} alt={pet.name} />
                        {/* <h4>nombre: {pet.name}</h4> */}
                    <div className="memberInfo">
                        <h2 className="mb-2 font-weight-light h3 ">
                        <Info petId={pet.id} key={pet.id}/>
                        </h2>
                       
                    </div>
                    </div>
               
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default ListPets;
