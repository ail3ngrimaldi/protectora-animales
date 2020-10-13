// import React from "react";
// import { arrayMascotas } from "../Constants/arrayMascotas";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import $ from "jquery";
// // import Popper from "popper.js";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

// const Formulario = (props) => {
//   const { match } = props;
//   const { id } = match.params;
//   console.log(id);
//   const mascota = arrayMascotas.filter((a) => {
//     return a.id === id;
//   })[0];

//   return (
//     <div>
//       <Container fluid={true}>
//         <h2 className="display-6 font-weight-light justify-content py-4 ml-5">
//           Datos de la Mascota
//         </h2>
//         <Row className="justify-content-center">
//           <Col md={8}>
//             <Form>
//               <Form.Group>
//                 <Form.Label htmlFor="n-id">N° de Id</Form.Label>
//                 <Form.Control
//                   id="id-mascota"
//                   name="id-mascota"
//                   type="text"
//                   value={mascota.id}
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="name">Nombre</Form.Label>
//                 <Form.Control
//                   id="name-mascota"
//                   name="name-mascota"
//                   type="text"
//                   value={mascota.Nombre}
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="categoria">Categoria</Form.Label>
//                 <Form.Control
//                   id="categoria"
//                   name="categoria"
//                   type="text"
//                   value={mascota.Tipo}
//                 />
//               </Form.Group>
//             </Form>
//           </Col>
//         </Row>
//         <h2 className="display-6 font-weight-light justify-content py-4 ml-5">
//           Datos del Interesado
//         </h2>
//         <Row className="justify-content-center">
//           <Col md={8}>
//             <Form>
//               <Form.Group>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Control
//                       id="name"
//                       name="name"
//                       type="text"
//                       value=""
//                       placeholder="Nombre"
//                     />
//                   </Col>
//                   <Col md={6}>
//                     <Form.Control
//                       id="last-name"
//                       name="last-name"
//                       type="text"
//                       placeholder="Apellido"
//                     />
//                   </Col>
//                 </Row>
//               </Form.Group>
//               <Form.Group>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Control
//                       id="edad"
//                       name="edad"
//                       type="text"
//                       value=""
//                       placeholder="Edad"
//                     />
//                   </Col>
//                   <Col md={6}>
//                     <Form.Control
//                       id="ocupacion"
//                       name="ocupacion"
//                       type="text"
//                       placeholder="Ocupación"
//                     />
//                   </Col>
//                 </Row>
//               </Form.Group>
//               <Form.Group>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Control
//                       id="email"
//                       name="email"
//                       type="email"
//                       value=""
//                       placeholder="Email"
//                     />
//                   </Col>
//                   <Col md={6}>
//                     <Form.Control
//                       id="telefono"
//                       name="telefono"
//                       type="text"
//                       placeholder="Teléfono"
//                     />
//                   </Col>
//                 </Row>
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-1">
//                   ¿Por qué le interesa este animal en particular?
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-1"
//                   name="pregunta-1"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-2">
//                   {" "}
//                   ¿Qué función desempeñaría en su hogar (compañía, guardia,
//                   etc). Especificar lo más posible a fin de evaluar según el
//                   carácter del perro/gato elegido su validez para lo que se
//                   busca.
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-2"
//                   name="pregunta-2"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-3">
//                   ¿La casa en donde vive es de su propiedad? Si es inquilino,
//                   ¿el propietario le permite tener una mascota?Si vive en
//                   propiedad horizontal, ¿el reglamento del consorcio permite la
//                   tenencia de mascotas?
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-3"
//                   name="pregunta-3"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-4">
//                   {" "}
//                   ¿La casa tiene patio, jardín, balcón? En caso de tener patio o
//                   jardín, ¿está tapialado o alambrado?
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-4"
//                   name="pregunta-4"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-5">
//                   ¿Al cuidado de quién quedaría el animal cuando vaya de
//                   vacaciones?
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-5"
//                   name="pregunta-5"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-6">
//                   {" "}
//                   ¿Cuántas horas por día estaría solo el animal?
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-6"
//                   name="pregunta-6"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-7">
//                   (En caso de querer adoptar un perro)¿Cuántas veces lo sacarían
//                   al día? ¿Quién se encargaría de hacerlo?
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-7"
//                   name="pregunta-7"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-8">
//                   {" "}
//                   ¿Dónde estaría el animal durante el día? ¿Dónde dormiría?
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-8"
//                   name="pregunta-8"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-9">
//                   ¿Cuántas personas viven en la casa y qué edades tienen?
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-9"
//                   name="pregunta-9"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-10">
//                   {" "}
//                   ¿Están de acuerdo TODOS los integrantes del grupo familiar con
//                   adoptar una mascota?
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-10"
//                   name="pregunta-10"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-11">
//                   ¿Tiene otras mascotas? En caso de respuesta afirmativa:
//                   especificar especie y edad, especificar si están esterilizados
//                   ¿Tiene espacio/ recursos/ tiempo para tener otro?¿Qué
//                   veterinario atiende a sus mascotas?
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-11"
//                   name="pregunta-11"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-12">
//                   {" "}
//                   ¿Ya ha tenido mascotas? ¿De qué murieron?
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-12"
//                   name="pregunta-12"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-13">
//                   (Si el animalito es cachorro) ¿Está de acuerdo con
//                   esterilizarlo a los 6 meses de edad? En caso de respuesta
//                   negativa, especificar el motivo:
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-13"
//                   name="pregunta-13"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-14">
//                   {" "}
//                   ¿Tiene recursos económicos para mantenerlo, aplicarle las
//                   vacunas anuales correspondientes y afrontar cualquier eventual
//                   inconveniente relativo a la salud del animal?
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-14"
//                   name="pregunta-14"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-15">
//                   ¿Qué motivo haría que no pudiera hacerse más cargo del animal?
//                   En el caso de que por X razón, no pudiera hacerse más cargo de
//                   la mascota en algún determinado momento, ¿qué haría?
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-15"
//                   name="pregunta-15"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-16">
//                   {" "}
//                   Realizamos una entrevista previa a la adopción y seguimientos
//                   posteriores, ¿Está dispuesto a recibir una visita nuestra, con
//                   el objetivo de conocer la familia y el futuro posible hogar
//                   del animal?
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-16"
//                   name="pregunta-16"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label htmlFor="pregunta-16">
//                   {" "}
//                   La adopción es para TODA la vida del animal, ¿Ud. es
//                   consciente de la responsabilidad que esto significa?
//                 </Form.Label>
//                 <Form.Control
//                   id="pregunta-16"
//                   name="pregunta-16"
//                   as="textarea"
//                   rows="3"
//                   value=""
//                 />
//               </Form.Group>

//               <Button
//                 className="d-inline-block"
//                 variant="primary"
//                 type="submit"
//               >
//                 Send
//               </Button>

//               {/* {this.state.emailSent === true && <p className='d-inline success-msg'>Email Sent</p> }
//                                     {this.state.emailSent === false && <p className='d-inline error-msg'>Email Not Sent</p> } */}
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Formulario;


import React from 'react'
import { arrayMascotas } from '../Constants/arrayMascotas'
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
// import './Formulario.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Formulario = (props) => {

  const { match } = props
  const { id } = match.params
 // console.log(id)
  const mascota = arrayMascotas.filter(a => {
    return a.id === id
  })[0]

  return (

    <div>      
      <Container fluid={true}>
        <h2 className='display-6 font-weight-light justify-content py-4 ml-5'>Datos de la Mascota</h2>
        <Row className='justify-content-center'>
          <Col md={8}>
            <Form>


              <Form.Group>
                <Form.Label htmlFor='n-id'>N° de Id</Form.Label>
                <Form.Control id='id-mascota' name='id-mascota' type='text' value={mascota.id} />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='name'>Nombre</Form.Label>
                <Form.Control id='name-mascota' name='name-mascota' type='text' value={mascota.Nombre} />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='categoria'>Categoria</Form.Label>
                <Form.Control id='categoria' name='categoria' type='text' value={mascota.Tipo} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <h2 className='display-6 font-weight-light justify-content py-4 ml-5'>Datos del Interesado</h2>
        <Row className='justify-content-center'>
          <Col md={8}>
            <Form>

              <Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Control id='name' name='name' type='text' value='' placeholder='Nombre' />
                  </Col>
                  <Col md={6}>
                    <Form.Control id='last-name' name='last-name' type='text' placeholder='Apellido' />

                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Control id='edad' name='edad' type='text' value='' placeholder='Edad' />
                  </Col>
                  <Col md={6}>
                    <Form.Control id='ocupacion' name='ocupacion' type='text' placeholder='Ocupación' />

                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Control id='email' name='email' type='email' value='' placeholder='Email' />
                  </Col>
                  <Col md={6}>
                    <Form.Control id='telefono' name='telefono' type='text' placeholder='Teléfono' />

                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-1'>¿Por qué le interesa este animal en particular?</Form.Label>
                <Form.Control id='pregunta-1' name='pregunta-1' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-2' > ¿Qué función desempeñaría en su hogar (compañía, guardia, etc). Especificar lo más posible a fin de evaluar según el carácter del perro/gato elegido su validez para lo que se busca.
                                    </Form.Label>
                <Form.Control id='pregunta-2' name='pregunta-2' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-3'>¿La casa en donde vive es de su propiedad? Si es inquilino, ¿el propietario le permite tener una mascota?Si vive en propiedad horizontal, ¿el reglamento del consorcio permite la tenencia de mascotas?</Form.Label>
                <Form.Control id='pregunta-3' name='pregunta-3' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-4' > ¿La casa tiene patio, jardín, balcón? En caso de tener patio o jardín, ¿está tapialado o alambrado?
                                    </Form.Label>
                <Form.Control id='pregunta-4' name='pregunta-4' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-5'>¿Al cuidado de quién quedaría el animal cuando vaya de vacaciones?</Form.Label>
                <Form.Control id='pregunta-5' name='pregunta-5' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-6' > ¿Cuántas horas por día estaría solo el animal?
                                    </Form.Label>
                <Form.Control id='pregunta-6' name='pregunta-6' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-7'>(En caso de querer adoptar un perro)¿Cuántas veces lo sacarían al día? ¿Quién se encargaría de hacerlo?</Form.Label>
                <Form.Control id='pregunta-7' name='pregunta-7' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-8' > ¿Dónde estaría el animal durante el día? ¿Dónde dormiría?
                                    </Form.Label>
                <Form.Control id='pregunta-8' name='pregunta-8' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-9'>¿Cuántas personas viven en la casa y qué edades tienen?</Form.Label>
                <Form.Control id='pregunta-9' name='pregunta-9' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-10' > ¿Están de acuerdo TODOS los integrantes del grupo familiar con adoptar una mascota?
                                    </Form.Label>
                <Form.Control id='pregunta-10' name='pregunta-10' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-11'>¿Tiene otras mascotas? En caso de respuesta afirmativa: especificar especie y edad, especificar si están esterilizados ¿Tiene espacio/ recursos/ tiempo para tener otro?¿Qué veterinario atiende a sus mascotas?</Form.Label>
                <Form.Control id='pregunta-11' name='pregunta-11' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-12' > ¿Ya ha tenido mascotas? ¿De qué murieron?
                                    </Form.Label>
                <Form.Control id='pregunta-12' name='pregunta-12' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-13'>(Si el animalito es cachorro) ¿Está de acuerdo con esterilizarlo a los 6 meses de edad? En caso de respuesta negativa, especificar el motivo:</Form.Label>
                <Form.Control id='pregunta-13' name='pregunta-13' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-14' > ¿Tiene recursos económicos para mantenerlo, aplicarle las vacunas anuales correspondientes y afrontar cualquier eventual inconveniente relativo a la salud del animal?
                                    </Form.Label>
                <Form.Control id='pregunta-14' name='pregunta-14' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-15'>¿Qué motivo haría que no pudiera hacerse más cargo del animal? En el caso de que por X razón, no pudiera hacerse más cargo de la mascota en algún determinado momento, ¿qué haría?</Form.Label>
                <Form.Control id='pregunta-15' name='pregunta-15' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-16' > Realizamos una entrevista previa a la adopción y seguimientos posteriores, ¿Está dispuesto a recibir una visita nuestra, con el objetivo de conocer la familia y el futuro posible hogar del animal?
                                    </Form.Label>
                <Form.Control id='pregunta-16' name='pregunta-16' as='textarea' rows='3' value='' />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='pregunta-16' > La adopción es para TODA la vida del animal, ¿Ud. es consciente de la responsabilidad que esto significa?
                                    </Form.Label>
                <Form.Control id='pregunta-16' name='pregunta-16' as='textarea' rows='3' value='' />
              </Form.Group>

              <Button className='d-inline-block' variant='primary' type='submit' >
                Send
                                </Button>

              {/* {this.state.emailSent === true && <p className='d-inline success-msg'>Email Sent</p> }
                                    {this.state.emailSent === false && <p className='d-inline error-msg'>Email Not Sent</p> } */}
            </Form>

          </Col>
        </Row>

      </Container>
    </div>


  )
}

export default Formulario;