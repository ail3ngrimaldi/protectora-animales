import React from 'react'
import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const UpdatePet = () => {
    return (        
        <div>
            <Container fluid={true}>
                <h2 className='display-6 font-weight-light justify-content py-4 ml-5'>UPDATE</h2>
                <Form.Group>
                    <Row>
                        <Col md={6}>
                            <Form.Control id='id' name='id' type='text' placeholder='ID' />

                        </Col>
                    </Row>
                </Form.Group>
                <button type="submit" class="btn btn-primary">BUSCAR</button>
                <Row className='justify-content-center'>
                    <Col md={8}>
                        <Form>
                            <Form.Group>
                                <Row>
                                    <Col md={6}>
                                        <Form.Control id='name' name='name' type='text' placeholder='Nombre' />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control id='age' name='age' type='text' placeholder='Edad' />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col md={6}>
                                        <label for="inputState">Genero</label>
                                        <select id="inputState" class="form-control" placeholder="Genero">
                                            <option selected>Seleccione una opción</option>
                                            <option>Macho</option>
                                            <option>Hembra</option>
                                        </select>
                                    </Col>
                                    <Col md={6}>
                                        <label for="inputState">Castrado</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Seleccione una opción</option>
                                            <option>SI</option>
                                            <option>NO</option>
                                        </select>
                                    </Col>
                                    <Col md={6}>
                                        <label for="inputState">Tipo de mascota</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Seleccione una opción</option>
                                            <option >Perro</option>
                                            <option >Gato</option>
                                        </select>

                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group>
                                <Row>

                                    <Col md={6}>
                                        <Form.Control id='personality' name='personality' type='text' placeholder='Personalidad' />

                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row>

                                    <Col md={6}>
                                        <Form.Control id='size' name='size' type='text' placeholder='Tamaño' />

                                    </Col>
                                </Row>
                            </Form.Group>
                            <button type="submit" class="btn btn-primary">CREAR</button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
