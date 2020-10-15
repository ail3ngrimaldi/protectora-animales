import React, { useEffect, useState } from "react";
import PetForm from "./PetForm"; 

import { db } from "../../index";
import { toast } from "react-toastify";

const Test = () => {
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

  const onDeleteLink = async (id) => {
    if (window.confirm("¿Seguro que quieres eliminar el pet?")) {
      await db.collection("pet").doc(id).delete();
      toast("¡Pet borrado con éxito!", {
        type: "error",
        autoClose: 2000
      });
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  const addOrEditLink = async (linkObject) => {
    try {
      if (currentId === "") {
        await db.collection("pet").doc().set(linkObject);
        toast("Pet agregado con éxito", {
          type: "success",
        });
      } else {
        await db.collection("pet").doc(currentId).update(linkObject);
        toast("Pet actualizado con éxito", {
          type: "info",
        });
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="col-md-4 p-2">
       <PetForm {...{ addOrEditLink, currentId, links }} /> 
      </div>
      <div className="col-md-8 p-2">
        {links.map((link) => (
          <div className="card mb-1" key={link.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4>nombre: {link.name}</h4>
                <h4>edad: {link.age}</h4>
                <h4>tipo: {link.kind}</h4>
                <h4>personalidad: {link.personality}</h4>
                <h4>tamaño: {link.size}</h4>
                <h4>género: {link.gender}</h4>
                <h4>castrado: {link.castreted}</h4>

                <div>
                  <i
                    className="material-icons text-danger"
                    onClick={() => onDeleteLink(link.id)}
                  >
                    Eliminar
                  </i>
                  <i
                    className="material-icons"
                    onClick={() => setCurrentId(link.id)}
                  >
                    Actualizar
                  </i>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Test;