import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Pelusa</h4>
                <p>
                    <ul>
                        <li>Alimentación: alimento balanceado</li>
                        <li>Castrado: no</li>
                        <li>Edad: 7</li>
                        <li>Género: femenino</li>
                        <li>Personalidad: muy cariñosa</li>
                        <li>Tamaño: 20cm</li>
                        <li>Tipo de animal: gato</li>
                    </ul>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Link to='/Adoptions/Form/1'>
                    <Button >Adoptar</Button>
                </Link>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function Info() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Button variant="warning" onClick={() => setModalShow(true)}>
                Ver Más
        </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

