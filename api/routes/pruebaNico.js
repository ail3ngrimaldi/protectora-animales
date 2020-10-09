// const firebase = require('firebase/app');
var admin = require('firebase-admin');
var app = admin.initializeApp();

// 
const firebaseConfig = {
  "type": "service_account",
  "project_id": "protectoraanimales-9c9db",
  "private_key_id": "2bd481c31eedb7acdeccc39fcb44311129233150",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDj+npzlJ5wRVBV\nkptzd8KBgyzbM+cJ3Mu45v8/vr+kDXZeOAKXSX071haWbbZI9qi2OQzjqF0dG+vT\nPLugLHe1VJIzcaI0l95oUTTA7MzuAw/gcy3Y973ej3eqfajk30yal+is0zgpS0Jv\nDOk8/fVQtbm3AYH2WQBZ40P25h0wbLO6F++OpLBrfha7k/AH43tvcr1I48VKPfSJ\nSo8fMHEsSWM+yMayqomPbIoN3spZcgo97aNnPNKptwC+0bhhVGkHwZ7wVjqhBH+r\nKGWf2/Bx84E8HvhUc1dY42gk1ORB05sIa/4ogWSJq18rLpuSDRElYvbU586W/QB7\n1WAFjCbVAgMBAAECggEAEis5LRLwGZR8lYVMnEQ0HSw+G+4kAJY3KjJGr2bdUQ69\nmz6tfi8eKvGh9TUjLOdzhKpBS7d0TEiYX8pcTaSdmbb2u+DXg4eC8x9dq+5zWpil\n4EZtpfgAisc2S0Eef7cIHN30bimbNTdJQR5vTCwVK+x/s4UMPXzUWVWSag/mzaAF\nmYQfNOqvRsjAzrjfcNrKxkQqq4VtCIXv5JSal4KEBi3wm5e3Tm1oIn3A6NDUU6C6\nfkcO3b2jgHz7mLuPpq/SQKxQAEACyYwukL9Z5THS4b8nMHRfJrSsOzdtXCjM5jdk\nuX28brf82RgJpEIo9eupXTy0V7DZAnUq8etAvyiAAQKBgQD9lOVSVgN1bt1n1g70\nzx+KDUNIcGho6UzyD6kWvdtlon4a35PRtgAy4s+QHwN2gDP79d5mgPyeWy7DyG4W\njok1uTHR/zlxxQ8y1aS2/k+Ilg01uPz705iy3PCFUxlcZXdbJx9PXYn7jTbY3jtK\n7SAh/eZHeWjE44lKje5rl3AgAQKBgQDmJxLqapSTSXrp1kqyGzLUqJKETOKntzUe\nY0GKm5rECrPdTJ1cmHIkGMrh/H7UyC7Odwlye0cN7C+2+OGUSI0aSRftp9YBsCQm\n5pNJPk8V4TD+0xiYUKII0jrohnBwPDejlIVlTHDWxgGZjG7q4ySNFQ3vGu99mqRp\nK06WNIGG1QKBgGAe8pY1OHZpIc/cWir94AyqXli1Ez7BQIN44DVYnjN2VqrFGPkj\nLgwb4WXV+7ANhKb7WeQs/JTiJ2XbMa+nM+eDXZkmT5YKhmpUhW1AFNHHXxaAGpUy\nbe1OxnUjPLfDVmzc9YdWA5mwu5uVEZCjNczsuz9YjBglz8LM7hUmgEABAoGAWgrf\nc6bPCfCtjd6wyo2pjVmGOQx7gHJE7eaXNcs6+YfWZrYauqdJwKWSemd2l3jaFxyr\nLYbdfazx3fvxBTp9OdNu8SPArlhjTHTZGsat2jmIGaos7SpeumTFd0NhqgdlHTJ2\nHfOSEfTVm2U939eN7URXdzxqhhGCUUMIM+vG4SECgYBtRYYWn+RcwV39zTMn5nQ6\nNP+5raoiTsoXwtWac04F5jTy3hTvRv4vB1qhEEQxnpcwvPk1mfW04sw6fefdZK8j\naiBgNoCy084U0GIKFPe7VaHXqOH6OLFONotwywiUPDYZGmy2i5owkO6/ZA5W59RV\nulfddtctmr5CeWachc1LaA==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-idqea@protectoraanimales-9c9db.iam.gserviceaccount.com",
  "client_id": "115589493995276777112",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-idqea%40protectoraanimales-9c9db.iam.gserviceaccount.com"
}

// Inicializo Firebase en la web app
firebase.initializeApp(firebaseConfig); 

// Inicializo el SDK 
// var serviceAccount = require('../protectoraanimales-9c9db-firebase-adminsdk-idqea-2bd481c31e.json');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://protectoraanimales-9c9db.firebaseio.com/'
})





class Animal {
	constructor( ){
		this.db = firebase.firestore()
		const settings = {
			timestampsInSnapshots: true
		}
		this.db.settings(settings)
	}

	crearAnimal(uid, tipo, tamaño, edad, personalidad, genero, castrado, nombre, descripcion, alimentacion){
		return this.db.collection('animal').add({
			uid,
			tipo, 
			tamaño, 
			edad, 
			personalidad, 
			genero, 
			castrado, 
			nombre, 
			descripcion, 
			alimentacion
		}).then(refDoc =>  console.log(`Id del animal ${refDoc.id}`))
		.catch(error => console.error(`Error al crear animal: ${error}`))
	}
}