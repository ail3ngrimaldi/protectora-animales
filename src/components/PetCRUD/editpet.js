import React, { useEffect } from "react";
import { db, app } from '../../index'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Editpet = (props) => {
	const pet = props.location.state.pet
	const [fileUrl, setFileUrl] = React.useState(null);
	const [pets, setPets] = React.useState({});

	const handleChange = (e) => {
		setPets({
			...pets,
			[e.target.name]: e.target.value
		})
	}
	const onFileChange = async (e) => {
		e.preventDefault();
		e.persist()
		try {
			if (e.target.files[0]) {
				const file = await e.target.files[0];
				console.log(e.target.files[0])
				const storageRef = await app.storage().ref();
				const fileRef = await storageRef.child(file.name);
				await fileRef.put(file);
				await setFileUrl(await fileRef.getDownloadURL());
				await console.log('ANIMAL ACTUALIZADO')
			} else {
				await setFileUrl(pet.avatar)
			}
		} catch (err) {
			console.error('ERROR ' + err)
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			await console.log('Linea 52')
			if (!pet.avatar || (pet.avatar === fileUrl)) {
				await console.log('Linea 54')
				await db.collection("pet").doc(pets.name).update(pets)
				await db.collection("pet").doc(pets.name).update({ avatar: fileUrl })
				await console.log('Animal actualizado + foto')
				// await history.push('/Admin/Mascotas')
			} else {
				await console.log('Linea 60')
				await db.collection("pet").doc(pets.name).update(pets)
				await console.log('Animal actualizado sin foto')
				// await history.push('/Admin/Mascotas')
			}
		} catch (err) {
			console.error(`Error en onSubmit ${err}`)
		}
		await console.log('Linea 68')
	};

	useEffect(() => {
		setPets(pet)
	}, [pet]);

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
										<Form.Control input id='name' name='name' onChange={handleChange} value={pets.name} type='text' placeholder='Nombre' />
									</Col>
									<Col md={6}>
										<Form.Control input id='age' name='age' onChange={handleChange} value={pets.age} type='number' placeholder='Edad' />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row>
									<Col md={6}>
										<label htmlFor="inputState">Genero</label>
										<select input name='gender' id="inputState" onChange={handleChange} value={pets.gender} className="form-control" placeholder="Genero">
											<option >Seleccione una opción</option>
											<option value="Macho">Macho</option>
											<option value="Hembra">Hembra</option>
										</select>
									</Col>
									<Col md={6}>
										<label htmlFor="inputState">Castrado</label>
										<select input name='castreted' id="inputState" onChange={handleChange} value={pets.castreted} className="form-control">
											<option >Seleccione una opción</option>
											<option value="SI">SI</option>
											<option value="NO">NO</option>
										</select>
									</Col>
									<Col md={6}>
										<label htmlFor="inputState">Tipo de mascota</label>
										<select input name='kind' id="inputState" onChange={handleChange} value={pets.kind} className="form-control">
											<option >Seleccione una opción</option>
											<option value="Perro">Perro</option>
											<option value="Gato">Gato</option>
										</select>
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row>
									<Col md={6}>
										<Form.Control input id='personality' name='personality' type='text' onChange={handleChange} value={pets.personality} placeholder='Personalidad' />
									</Col>
								</Row>
							</Form.Group>

							<Form.Group>
								<Row>
									<Col md={6}>
										<Form.Control input id='history' name='history' type='text' onChange={handleChange} value={pets.history} placeholder='Historia' />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row>
									<Col md={6}>
										{ /* Cambie de numero a texto predeterminado*/}
										<label htmlFor="inputState">Tamaño</label>
										<select input name='size' id="inputState" onChange={handleChange} value={pets.size} class="form-control">
											<option >Seleccione una opción</option>
											<option value="Pequeño">Pequeño</option>
											<option value="Mediano">Mediano</option>
											<option value="Mediano">Grande</option>
										</select>
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row>
									<Col md={6}>
										<input type="file" onChange={onFileChange} />
									</Col>
									<Col md={6}>
										<button type="submit" className="btn btn-primary">Actualizar</button>
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row>
									<Col md={6}>
										<Link to="/Admin/Mascotas">
											<button type="button" className="btn-danger p-2 mt-3 rounded">Volver</button>
										</Link>
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

export default Editpet
