import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { arrayMascotas } from "../Constants/arrayMascotas";
import Mascotas from "../Mascotas/Mascotas";

const Adoptions = () => {

  return (
    <div>
      <div className="container">
        <table className="table table-striped table-dark table-bordered">
          <thead>
            <tr>
              <h1 className="user">Lista de animales</h1>
            </tr>
          </thead>
        </table>
      </div>

      <div className="container">
        <di className="row">
          {arrayMascotas.map((a) => {
            return (
              <Mascotas
                nombre={a.Nombre}
                especie={a.Tipo}
                img={a.Imagen}
                id={a.id}
              />
            );
          })}
        </di>
      </div>
    </div>
  );
};

export default Adoptions;
