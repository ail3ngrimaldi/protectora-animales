import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';
import Names from './StepForm/Names';
import Contact from './StepForm/Contact';
import Preguntas from './StepForm/Preguntas';
import PreguntasDos from './StepForm/Preguntas2';
import PreguntasTres from './StepForm/Preguntas3';
import Review from './StepForm/Review';
import Submit from './StepForm/Submit';



const defaultData = {
  nombreCompleto: '',
  edad: '',
  profesion: '',
  direccion: '',
  celular: '',
  email: '',
  redesSociales: '',
  pregunta1: '',
  pregunta2: '',
  pregunta3: '',
  pregunta4: '',
  pregunta5: '',
  pregunta6: '',
  pregunta7: '',
  pregunta8: '',
  pregunta9: '',
  pregunta10: '',
  pregunta11: '',
  pregunta12: '',
  pregunta13: '',
  pregunta14: '',
  pregunta15: '',
  pregunta16: '',
  pregunta17: '',
  pregunta18: '',

};

const steps = [
  { id: 'names' },
  { id: 'contact' },
  { id: 'preguntas' },
  { id: 'preguntas2' },
  { id: 'preguntas3' },
  { id: 'review' },
  { id: 'submit' },

]

const Formulario = (props) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  })


  const prop = { formData, setForm, navigation }

  switch (step.id) {
    // case 'mascota': return <Mascota {...props} {...prop} next={step[1]} />;
    case 'names': return <Names {...prop} {...props} />;
    case 'contact': return <Contact {...prop} />;
    case 'preguntas': return <Preguntas {...prop} />;
    case 'preguntas2': return <PreguntasDos {...prop} />;
    case 'preguntas3': return <PreguntasTres {...prop} />;
    case 'review': return <Review {...prop} {...props} />;
    case 'submit': return <Submit {...prop} {...props} />;
    default: break;
  }

  return (
    <div>
      <h1>
        Multi Step Form
      </h1>
    </div>
  )

}

export default Formulario;