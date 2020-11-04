import React, { useState, useEffect } from "react";
import { db } from "../../index";
// import { toast } from "react-toastify";

const PetForm = (props) => {
  const initialStateValues = {
    name: '',
    age: '',
    kind: '',
    personality: '',
    size: '',
    gender: '',
    castreted: ''
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();



    props.addOrEditLink(values);
    setValues({ ...initialStateValues });
  };

  const getLinkById = async (id) => {
    const doc = await db.collection("pet").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(props.currentId);
    }
  }, [props.currentId]);

  return (
    <form onSubmit={handleSubmit} className="card card-body border-primary">
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">nombre</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="nombre"
          value={values.name}
          name="name"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">Edad</i>
        </div>
        <input
          type="text"
          value={values.age}
          name="age"
          placeholder="Edad"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">Tipo</i>
        </div>
        <input
          type="text"
          value={values.kind}
          name="kind"
          placeholder="Tipo"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">Personalidad</i>
        </div>
        <input
          type="text"
          value={values.personality}
          name="personality"
          placeholder="Personalidad"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">Tamaño</i>
        </div>
        <input
          type="number"
          value={values.size}
          name="size"
          placeholder="Tamaño"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">Género</i>
        </div>
        <input
          type="text"
          value={values.gender}
          name="gender"
          placeholder="Género"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">Castrado</i>
        </div>
        <input
          type="text"
          value={values.castreted}
          name="castreted"
          placeholder="Castrado"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>

      <button className="btn btn-primary btn-block">
        {props.currentId === "" ? "Save" : "Update"}
      </button>
    </form>
  );
};

export default PetForm;