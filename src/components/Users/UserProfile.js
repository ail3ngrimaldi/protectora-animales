import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const UserProfile = (props) => {
  const { profile } = props
  return (
    <div>
      <h1>Mi Perfil</h1>
      {
        profile.hasOwnProperty('displayName') ?
          <p>{profile.displayName}, necesitas registrar tus datos</p>
          :
          <div>
            <Container>
              <fieldset disabled>
                <Form.Row >
                  <Col xs="auto">
                    <Form.Group controlId="formGridNombre">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="email" placeholder={profile.firstName} />
                    </Form.Group>
                  </Col>

                  <Form.Group controlId="formGridApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="Apellido" placeholder={profile.lastName} />
                  </Form.Group>
                </Form.Row>

                <Form.Row >
                  <Col xs="auto">
                    <Form.Group controlId="formGridEdad">
                      <Form.Label>Edad</Form.Label>
                      <Form.Control type="Edad" placeholder={profile.age} />
                    </Form.Group>
                  </Col>

                  <Col xs="auto">
                    <Form.Group controlId="formBasicFNacimiento">
                      <Form.Label>Fecha de Nacimiento</Form.Label>
                      <Form.Control type="Fecha de Nacimiento" placeholder={profile.birthdate} />
                    </Form.Group>
                  </Col>

                  <Col xl="auto">
                    <Form.Group controlId="formBasicDierccion">
                      <Form.Label>Dirección</Form.Label>
                      <Form.Control type="Dirección" placeholder={profile.address} />
                    </Form.Group>
                  </Col>

                  <Col xs="auto">
                    <Form.Group controlId="formBasicUbicacion">
                      <Form.Label>Ubicación</Form.Label>
                      <Form.Control type="Ubicación" placeholder={profile.location} />
                    </Form.Group>
                  </Col>
                </Form.Row>
              </fieldset>
              <Link to='/EditarPerfil'>
                <Button variant="primary" type="submit">
                  Editar Perfil
                    </Button>
              </Link>
            </Container>
          </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(UserProfile)