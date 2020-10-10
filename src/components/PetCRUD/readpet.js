import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export const ReadPet = () => {
    return (
        <div>
            <Container fluid={true}>
                <h3 className='display-6 font-weight-light justify-content py-4 ml-5'>Read Screen</h3>



                <Form.Group>

                    <Row>
                        <Col md={6}>
                            <Form.Control id='id' name='id' type='text' placeholder='ID' />

                        </Col>
                    </Row>
                </Form.Group>
                <button type="submit" class="btn btn-primary">BUSCAR</button>
            </Container>
        </div>

    )
}
