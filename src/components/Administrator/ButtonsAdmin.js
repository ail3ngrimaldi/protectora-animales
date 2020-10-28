import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ButtonsAdmin () {
    const [booleano, setBooleano] = useState(true);

    const handleclick = () => {
         if (!booleano) {
             setBooleano(true)
             console.log("TRUE", booleano);
         } else {
             setBooleano(false)
             console.log("FALSE", booleano);
         }         
    } 

    useEffect(() => {
        handleclick(true);
    }, [])

    return(
        <div className="container text-center h-100 bg-light d-flex justify-content-center align-items-center">
        {/* // <div className="container bg-light"> */}
            <div className="col-md-6 w-50 p-3 center-block">
                <Link to="/Admin/Usuarios">
                    <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded">Usuarios</button>
                </Link>
                <Link to="/Admin/Mascotas">
                <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded">Mascotas</button>
                </Link>
                <Link to="/Admin/Adopciones">
                <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded">Adopciones</button>
                </Link>
                <Link to="/Admin/Voluntarios">
                <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded">Voluntarios</button>
                </Link>
                <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded" onClick={handleclick}>
                   Desactivar Cartel Atención.
                </button>
                </div>
            </div>
    );
}