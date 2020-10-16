import React, { useEffect, useState } from "react";
import Info from "../Info/Info";

import { db } from "../../index";

const Petimage = () => {
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
        <div className="col-md-8 p-2">
            {links.map((pet) => (
            <div className="card mb-1" key={pet.id[0]}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <img width="100" height="100" src={pet.avatar} alt={pet.name} />
                       
                    </div>
                    <div className="memberInfo">
                        <h2 className="mb-2 font-weight-light h3 ">
                            <Info petId={pet.id} key={pet.id}/>
                        </h2>
                        <span className="d-block mb-2 text-white-opacity-05 h4"></span>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Petimage;
