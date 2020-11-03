import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { db } from '../../../index'
// import { useSelector } from "react-redux";

const Review = (props) => {
    const { formData, navigation } = props
    // const { uid } = useSelector((state) => state.firebase.auth);
    const { go } = navigation;
    const {
        nombreCompleto,
        edad,
        profesion,
        direccion,
        celular,
        email,
        redesSociales,
        pregunta1,
        pregunta2,
        pregunta3,
        pregunta4,
        pregunta5,
        pregunta6,
        pregunta7,
        pregunta8,
        pregunta9,
        pregunta10,
        pregunta11,
        pregunta12,
        pregunta13,
        pregunta14,
        pregunta15,
        pregunta16,
        pregunta17,
        pregunta18,
    } = formData;

    const onSubmit = () => {
        const date = new Date().toLocaleDateString()
        // db.collection("adoptions").doc(uid).set({ // SOLO UN USUARIO REGISTRADO PUEDE ADOPTAR: ID DE LA PETICION ES EL ID DEL USUARIO LOGUEADO
        db.collection("adoptions").add({
            estadoDeSolicitud: "Pendiente",
            fechaDeSolicitud: date,
            nombreCompleto: nombreCompleto,
            edad: edad,
            profesion: profesion,
            direccion: direccion,
            celular: celular,
            email: email,
            redesSociales: redesSociales,
            pregunta1: pregunta1,
            pregunta2: pregunta2,
            pregunta3: pregunta3,
            pregunta4: pregunta4,
            pregunta5: pregunta5,
            pregunta6: pregunta6,
            pregunta7: pregunta7,
            pregunta8: pregunta8,
            pregunta9: pregunta9,
            pregunta10: pregunta10,
            pregunta11: pregunta11,
            pregunta12: pregunta12,
            pregunta13: pregunta13,
            pregunta14: pregunta14,
            pregunta15: pregunta15,
            pregunta16: pregunta16,
            pregunta17: pregunta17,
            pregunta18: pregunta18,
            nombrepet: props.location.state.name,
            tipopet: props.location.state.kind
        });
    };

    return (
        <Container maxWidth='sm'>
            <h3>Review</h3>
            <RenderAccordion summary='Names' go={go} details={[
                { 'Nombre Completo': nombreCompleto },
                { 'Edad': edad },
                { 'Profesión / Ocupación': profesion },

            ]} />
            <RenderAccordion summary='Contact' go={go} details={[
                { 'Dirección': direccion },
                { 'Celular': celular },
                { 'Email': email },
                { 'Redes Sociales': redesSociales },

            ]} />
            <RenderAccordion summary='Preguntas' go={go} details={[
                { 'Pregunta 1': pregunta1 },
                { 'Pregunta 2': pregunta2 },
                { 'Pregunta 3': pregunta3 },
                { 'Pregunta 4': pregunta4 },
                { 'Pregunta 5': pregunta5 },
                { 'Pregunta 6': pregunta6 },
                { 'Pregunta 7': pregunta7 },
                { 'Pregunta 8': pregunta8 },
                { 'Pregunta 9': pregunta9 },
                { 'Pregunta 10': pregunta10 },
                { 'Pregunta 11': pregunta11 },
                { 'Pregunta 12': pregunta12 },
                { 'Pregunta 13': pregunta13 },
                { 'Pregunta 14': pregunta14 },
                { 'Pregunta 15': pregunta15 },
                { 'Pregunta 16': pregunta16 },
                { 'Pregunta 17': pregunta17 },
                { 'Pregunta 18': pregunta18 },


            ]} />
            {/*  <Button
                color='primary'
                variant = 'contained'
                className='mt-4'
              
                onSubmit={onSubmit}
            > 
                Enviar
            </Button> */}
            <input type="submit" className="btn btn-outline-dark" onClick={(e) => {
                e.preventDefault(); onSubmit(); go('submit')
            }} value='Enviar' />
        </Container>
    )
};

export const RenderAccordion = ({ summary, details, go }) => (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
        >
            {summary}
        </AccordionSummary>
        <AccordionDetail>
            <div>
                {details.map((data, index) => {
                    const objKey = Object.keys(data)[0];
                    const objValue = data[Object.keys(data)[0]];
                    return <ListItemText key={index}>{`${objKey}: ${objValue} `}</ListItemText>
                })}
                <IconButton
                    color='primary'
                    component='span'
                    onClick={() => go(`${summary.toLowerCase()}`)}
                >
                    <EditIcon />
                </IconButton>
            </div>
        </AccordionDetail>
    </Accordion>
)

export default Review;