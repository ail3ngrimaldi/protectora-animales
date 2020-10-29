import React, { useEffect } from "react";
import { db, app } from '../../index'
import { useFirebase, useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const CreatePet = () => {
	const [fileUrl, setFileUrl] = React.useState(null);
	const [pets, setPets] = React.useState([]);
	const [animals, setAnimals] = React.useState({})
	const history = useHistory();

	const handleChange = (e) => {
		setAnimals({
			...animals,
			[e.target.name]: e.target.value
		})
		console.log(e.target.value)
		console.log(animals)
	}
	const onFileChange = async (e) => {
		e.preventDefault();
		e.persist()
		try {
			const file = await e.target.files[0];
			console.log(e.target.files[0])
			const storageRef = await app.storage().ref();
			const fileRef = await storageRef.child(file.name);
			await fileRef.put(file);
			await setFileUrl(await fileRef.getDownloadURL());
			await console.log('ANIMAL AGREGADO')
		} catch (err) {
			console.error('ERROR ' + err)
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!animals.name || !fileUrl) {
			return;
		}
		try {
			await db.collection("pet").doc(animals.name).set(animals)
			await db.collection("pet").doc(animals.name).set({ avatar: fileUrl }, { merge: true })
			await history.push('/Admin/Mascotas')
		} catch (err) {
			console.error(`Error en onSubmit ${err}`)
		}
	};

	const fetchPets = async () => {
		const petsCollection = await db.collection("pet").get();
		setPets(
			petsCollection.docs.map((doc) => {
				return doc.data();
			})
		);
	};

	useEffect(() => {
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
										<Form.Control input id='name' name='name' onChange={handleChange} type='text' placeholder='Nombre' />
									</Col>
									<Col md={6}>
										<Form.Control input id='age' name='age' onChange={handleChange} type='number' placeholder='Edad' />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row>
									<Col md={6}>
										<label htmlFor="inputState">Genero</label>
										<select input name='gender' id="inputState" onChange={handleChange} className="form-control" placeholder="Genero">
											<option defaultValue>Seleccione una opción</option>
											<option value="Macho">Macho</option>
											<option value="Hembra">Hembra</option>
										</select>
									</Col>
									<Col md={6}>
										<label htmlFor="inputState">Castrado</label>
										<select input name='castreted' id="inputState" onChange={handleChange} className="form-control">
											<option defaultValue>Seleccione una opción</option>
											<option value="SI">SI</option>
											<option value="NO">NO</option>
										</select>
									</Col>
									<Col md={6}>
										<label htmlFor="inputState">Tipo de mascota</label>
										<select input name='kind' id="inputState" onChange={handleChange} className="form-control">
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
										<Form.Control input id='personality' name='personality' type='text' onChange={handleChange} placeholder='Personalidad' />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row>
									<Col md={6}>
										<Form.Control input id='size' name='size' type='number' onChange={handleChange} placeholder='Tamaño' />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row>
									<Col md={6}>
										<input type="file" onChange={onFileChange} />
									</Col>
									<Col md={6}>
										<button type="submit" className="btn btn-primary">INGRESAR MASCOTA</button>
									</Col>
								</Row>
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
