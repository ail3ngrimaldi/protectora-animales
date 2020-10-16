import React from "react";
import Container from "react-bootstrap/Container";

const NotFound = () => {
  return (
    <Container id="noexiste">
      <div className="containernoexiste">        
        <h1>
          Uy, llegaste a un lugar conocido sólo por el desarrollador. <br />{" "}
          Vuelve al inicio, por favor.
        </h1>
        <br />
      </div>
    </Container>
  );
};
export default NotFound;
