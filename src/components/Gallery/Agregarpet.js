import React, { useEffect } from "react";
import {db, app} from '../../index'

function Agregarpet() {
    
    const [fileUrl, setFileUrl] = React.useState(null);
    const [pets, setPets] = React.useState([]);
  
    const onFileChange = async (e) => {
      const file = e.target.files[0];
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      setFileUrl(await fileRef.getDownloadURL());
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const age = e.target.age.value;
      const kind = e.target.kind.value;
      const personality = e.target.personality.value;
      const size = e.target.size.value;
      const gender = e.target.gender.value;
      const castreted = e.target.castreted.value;
      if (!name || !fileUrl) {
        return;
      }
      await db.collection("pet").doc(name).set({
        name: name,
        age: age,
        avatar: fileUrl,        
        kind: kind,
        personality: personality,
        size: size,
        gender: gender,
        castreted: castreted
      });
    };
  
    useEffect(() => {
      const fetchPets = async () => {
        const petsCollection = await db.collection("pet").get();
        setPets(
          petsCollection.docs.map((doc) => {
            return doc.data();
          })
        );
      };
      fetchPets();
    }, []);
  
    return (
      <>
        <form onSubmit={onSubmit}>
          <input type="file" onChange={onFileChange} />
          <input type="text" name="name" placeholder="Nombre" />
          <input type="number" name="age" placeholder="Edad" />
          <input type="text" name="kind" placeholder="Tipo" />
          <input type="text" name="personality" placeholder="Personalidad" />
          <input type="text" name="size" placeholder="Tamaño" />
          <input type="text" name="gender" placeholder="Género" />
          <input type="text" name="castreted" placeholder="Castrado" />
          
          <button>Submit</button>
        </form>
        <ul>
          {pets.map((pet) => {
            return (
              <li key={pet.name}>
                <img width="100" height="100" src={pet.avatar} alt={pet.name} />
                <br />Nombre: {pet.name}
                <br />Edad: {pet.age}
                <br /> Tipo: {pet.kind}
                <br /> Personalidad: {pet.personality}
                <br /> Tamaño: {pet.size}
                <br /> Género: {pet.gender}
                <br /> Castrado: {pet.castreted}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  
  export default Agregarpet;
  