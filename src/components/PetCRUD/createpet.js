import React, { useEffect } from "react";
import {db, app} from '../../index'
import { useFirebase, useFirestore } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const CreatePet = () => {
    const firebase = useFirebase();
    const firestore = useFirestore();
    const { uid } = useSelector((state) => state.firebase.auth);
    const [fileUrl, setFileUrl] = React.useState(null);
    const [pets, setPets] = React.useState([]);
  
    const onFileChange = async (e) => {
      const file = e.target.files[0];
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      setFileUrl(await fileRef.getDownloadURL());
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();      
      const name = e.target.name.value;
      const age = e.target.age.value;
      const kind = e.target.kind.value;
      const personality = e.target.personality.value;
      const size = e.target.size.value;
      const gender = e.target.gender.value;
      const castreted = e.target.castreted.value;
      if (!name || !fileUrl) {
        return;
        console.log(name, "naaaaaaaaaaaaaaaaaaaaaa")
      }
      await db.collection("pet").doc(name).set({
        name: name,
        age: age,
        avatar: fileUrl,        
        kind: kind,
        personality: personality,
        size: size,
        gender: gender,
        castreted: castreted
      });
      window.location.replace('http://localhost:3000/Gallery')
    };
  
    useEffect(() => {
      const fetchPets = async () => {
        const petsCollection = await db.collection("pet").get();
        setPets(
          petsCollection.docs.map((doc) => {
            return doc.data();
          })
        );
      };
      fetchPets();
    }, []);

    return (
        <div>
            <Container fluid={true}>
                <h3 className="display-6 font-weight-light justify-content py-4 ml-5">CREAR MASCOTA</h3>
                <Row className='justify-content-center'>
                    <Col md={8}>
                        <Form onSubmit={onSubmit}>


                            <Form.Group>

                                <Row>

                                    <Col md={6}>
                                        <Form.Control input id='name' name='name' type='text' placeholder='Nombre' />

                                    </Col>
                                    <Col md={6}>
                                        <Form.Control input id='age' name='age' type='number' placeholder='Edad'  />

                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group>
                                <Row>
                                    <Col md={6}>
                                        <label for="inputState">Genero</label>
                                        <select input name='gender' id="inputState" class="form-control" placeholder="Genero">
                                            <option defaultValue>Seleccione una opción</option>
                                            <option value="Macho">Macho</option>
                                            <option value="Hembra">Hembra</option>
                                        </select>
                                    </Col>
                                    <Col md={6}>
                                        <label for="inputState">Castrado</label>
                                        <select input name='castreted' id="inputState" class="form-control">
                                            <option defaultValue>Seleccione una opción</option>
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </Col>
                                    <Col md={6}>
                                        <label for="inputState">Tipo de mascota</label>
                                        <select input name='kind' id="inputState" class="form-control">
                                            <option defaultValue>Seleccione una opción</option>
                                            <option value="Perro">Perro</option>
                                            <option value="Gato">Gato</option>
                                        </select>

                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group>
                                <Row>

                                    <Col md={6}>
                                        <Form.Control input id='personality' name='personality' type='text' placeholder='Personalidad' />

                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row>

                                    <Col md={6}>
                                        <Form.Control input id='size' name='size' type='number' placeholder='Tamaño' />

                                    </Col>
                                </Row>
                            </Form.Group>

                            <input type="file" onChange={onFileChange} />
                            <button type="submit" class="btn btn-primary">CREAR</button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
