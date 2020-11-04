import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./SuppliesDonations.css"

const Supplies = () => {
    return (
        <div>
            <Container fluid={true}>
                <h3 className="display-6 font-weight-light justify-content py-4 ml-5">DATOS DEL DONADOR</h3>
                <Row className='justify-content-center'>
                    <Col md={8}>
                        <Form>
                            <Form.Group>
                                <Row>

                                    <Col md={6}>
                                        <label for="inputState">Nombre</label>
                                        <Form.Control id='donatorname' name='donatorname' type='text' placeholder='Escriba aquí su nombre' />
                                    </Col>
                                    <Col md={6}>
                                        <label for="inputState">Correo electrónico</label>
                                        <Form.Control id='donatoremail' name='donatoremail' type='text' placeholder='Escriba aquí su email' />
                                    </Col>
                                    <Col md={6}>
                                        <label for="inputState">Teléfono</label>
                                        <Form.Control id='donatortel' name='donatortel' type='text' placeholder='Escriba aquí su telefono' />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <h3 className="display-6 font-weight-light justify-content py-4 ml-5">DONAR SUMINISTROS</h3>
                <Row className='justify-content-center'>

                    <Col md={8}>
                        <Form.Group>
                            <Row>
                                <Col md={6}>
                                    <label for="inputState">Medicamentos para humanos</label>
                                    <select id="inputState" class="form-control" placeholder="Genero">
                                        <option selected>Seleccione una opción</option>
                                        <option>Cefalexina en comprimidos de 500mg – 1g o suspensión</option>
                                        <option>Rumiclamox 250mg y 500mg</option>
                                        <option>Metronidazol en comprimidos 500 mg o suspensión</option>
                                        <option> Complejo vitamínico del Grupo B (B1, B6, B12) en comprimidos o inyectabl</option>
                                        <option>Vitamina B12 en cápsulas o comprimidos</option>
                                        <option>Tramadol en comprimidos o inyectable</option>
                                        <option>Prednisolona 4, 8 y 40 mg en comprimidos</option>
                                        <option>Acemuk comprimidos, jarabe</option>
                                        <option>Doxiciclina comprimidos</option>

                                    </select>
                                </Col>
                                <Col md={6}>
                                    <label for="inputState">Medicamentos de Veterinaria</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Seleccione una opción</option>
                                        <option >Antiparasitarios en comprimidos o suspensión (Total Full, Meltra, Endofour, Apto Max, Sulfadim, Giacoccide)</option>
                                        <option >Pipetas antipulgas perros y gatos</option>
                                        <option >Front line spray</option>
                                        <option >Comprimidos antipulgas: comfortis, next gard, bravecto</option>
                                        <option >Antiartrósicos: Artrin, Colotrin, Sosten CG, Gerioox, Old Trans</option>
                                        <option >Antibioticos en comprimido o inyectables (cualquier gramaje): Enrofloxacina, Amoxicilina con acido
                                            clavulanico, Clindamicina, Spectryl, Cefalexina, Metronidazol, Doxiciclina, dipenisol, tribiotic</option>
                                        <option >Tramadol 20, 50, 60, 75 u 80mg, en comprimidos</option>
                                        <option >Nogastrol 10mg</option>
                                        <option >Fenobarbital PG</option>
                                        <option >Bro k 300</option>
                                        <option >Kualcovit B</option>
                                        <option >Colirios y gotas óticas</option>
                                        <option >Toltrazol en suspensión o comprimidos</option>
                                        <option >Doramectina</option>
                                        <option >Prednisolona 10 o 20mg comprimidos</option>
                                        <option >Dexametasona inyectable</option>
                                        <option >Contal 60mg</option>
                                        <option >Shampoo con Peroxido de benzoilo</option>
                                        <option >Shampoo con clorexhidina</option>
                                        <option >Shampoo Formula Mac Donald</option>
                                        <option >Curabichera</option>
                                        <option >Piedras para gatos</option>
                                    </select>

                                </Col>



                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col md={6}>
                                    <label for="inputState">Insumos de enfermeria</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Seleccione una opción</option>
                                        <option >Zaleas</option>
                                        <option >Pañales adultos G, XG y XXG</option>
                                        <option >Sueros de solución fisiológica, solución ringer lactato, dextrosa, manitol</option>
                                        <option >Cateteres 20, 22 y 24 G.</option>
                                        <option >Alcohol, pervinox, clorhexidina, agua oxigenada</option>
                                        <option >Guantes de látex</option>
                                        <option >Vendas tipo cambric, coban</option>
                                        <option >Gasas</option>
                                        <option >Jeringas 1, 3 y 5ml.</option>
                                        <option >Tela adhesiva</option>

                                    </select>

                                </Col>

                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col md={6}>
                                    <label for="inputState">Tipo de alimento</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Seleccione una opción</option>
                                        <option >Perro</option>
                                        <option >Gato</option>


                                    </select>

                                </Col>
                                <Col md={6}>
                                    <label for="inputState">Especificaciones</label>
                                    <Form.Control id='Observaciones' name='observaciones' type='text' placeholder='Escriba el tipo, marca y peso del alimento' />

                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>

                                <Col md={6}>
                                    <label for="inputState">Observaciones</label>
                                    <Form.Control id='Observaciones' name='observaciones' type='text' placeholder='Escriba aquí sus observaciones' />

                                </Col>
                            </Row>
                        </Form.Group>

                        <button type="submit" class="btn btn-primary">¡Haz tu donación!</button>

                    </Col>
                </Row>
            </Container >
        </div >
    )
}

export default Supplies