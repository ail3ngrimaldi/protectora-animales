import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from "../../index";


const Volunteering = () => {
    const initialStateValues = { 
          name: '',
          age: '',
          email: '',
          address: '',
          contribution: '',                     
          state: 'Pendiente'
        };
    const [values, setValues] = useState(initialStateValues);
    const history = useHistory();
         
    
      const handleInputChange = (e) => {
       setValues(
           { ...values,   
             [e.target.name]: e.target.value   
            }
           );
           console.log("TARGET", e.target.value);
           console.log("VALUES",values);
      };        
      
      const handleSubmit = async (e) => {
		    e.preventDefault();		
        try {
        	await db.collection("voluntary").add(values)			
        	await history.push('/')
        } catch (err) {
        	console.error(`Error en onSubmit ${err}`)
            }        
	    };
    
      useEffect(() => { 
          setValues(initialStateValues);
      }, []);

    return (
        <div className="text-center mt-5">
      <h3>Crear nuevo voluntario</h3>
      <form id="formlogin" 
            className="form-signin justify-content-center" 
            onSubmit={handleSubmit}
            >
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="nombre"             
              name="name"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"              
              name="age"
              placeholder="Edad"
              className="form-control"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"              
              name="email"
              placeholder="Email"
              className="form-control"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group col-md-6">
            <input
              type="text"              
              name="address"
              placeholder="Dirección"
              className="form-control"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group col-md-12">
            <input
              type="text"              
              name="contribution"
              placeholder="Contribución"
              className="form-control"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group col-md-12">
            <input
              type="text"             
              value={values.state}                           
              className="form-control"
              style={{display: "none"}}          
            />
          </div>

          <div className="btn-group mr-2" role="group">
            <div className="dropdown">              
                <select 
                        input name='size' 
                        id="inputState" 
                        onChange={handleInputChange} 
                        className="form-control"
                >
                  <option defaultValue>Seleccione una opción</option>
                  <option value="Animales de paso">Animales de paso</option>
                  <option value="En el refugio">En el refugio</option>
                  <option value="Rescatando">Rescatando</option>          
                </select>
              <button className="btn btn-primary btn-block">
                Enviar Solicitud
              </button>               
            </div>
          </div>
        </div>
      </form>
    </div>
    )
}

export default Volunteering;