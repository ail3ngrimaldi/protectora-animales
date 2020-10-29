import React, { useState, useEffect } from "react";
import { db } from  "../../../index";

const VoluntarioForm = (props) => {
  const initialStateValues = {
    name: '',
    age: '',
    email: '',
    address: '',
    contribution: ''
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
    const doc = await db.collection("voluntary").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(props.currentId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);

  return (
    <div className="text-center">
        
    <h1>Crear nuevo voluntario</h1>
    <form id="formlogin" className="form-signin justify-content-center" onSubmit={handleSubmit}>
    <div className="form-row">
        <div className="form-group col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="nombre"
          value={values.name}
          name="name"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group col-md-6">
        <input
          type="text"
          value={values.age}
          name="age"
          placeholder="Edad"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
        <div className="form-group col-md-6">
        <input
          type="text"
          value={values.email}
          name="email"
          placeholder="Email"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group col-md-6">
        <input
          type="text"
          value={values.address}
          name="address"
          placeholder="Dirección"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group col-md-12">
        <input
          type="text"
          value={values.contribution}
          name="contribution"
          placeholder="Contribución"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>

      <button className="btn btn-primary btn-block">
        {props.currentId === "" ? "Guardar" : "Actualizar"}
      </button>
      </div>
    </form>
    </div>
  );
};

export default VoluntarioForm;