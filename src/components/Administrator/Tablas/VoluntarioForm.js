import React, { useState, useEffect } from "react";
import { db } from "../../../index";

const PetForm = (props) => {
  const initialStateValues = {
    name: '',
    age: '',
    email: '',
    address: '',
    contribution: '',
    type: ''
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
  }, [props.currentId]);

  return (
    <div className="text-center mt-5">

      <h3>Crear nuevo voluntario</h3>
      <form id="formlogin" class="form-signin justify-content-center" onSubmit={handleSubmit}>
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

          <div className="btn-group mr-2" role="group">
            <div className="dropdown">
              <button class="btn btn-primary btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tipo
        </button>
              <button className="btn btn-primary btn-block">
                {props.currentId === "" ? "Guardar" : "Actualizar"}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button className="dropdown-item">Animales de paso</button>
                <button className="dropdown-item">En el refugio</button>
                <button className="dropdown-item">Rescatando</button>
              </div>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default PetForm;