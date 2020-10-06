import React, { useState} from 'react'
import {arrayMascotas} from '../Constants/arrayMascotas'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import './Formulario.css'
import AppNav from '../AppNav/AppNav';

const Formulario = (props) =>{
    
    const {match} = props 
    const { id } = match.params
    console.log(id)
    const mascota = arrayMascotas.filter(a => {
        return a.id == id 
    })[0]
    
    return(
        
            <div>
                <AppNav/>
                <form className='container form-native'>
                    <h2>Datos de la Mascota</h2>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>N° de Id</label>
                        <div  className='col-sm-10'>
                            <input type='text' className='form-control' value={mascota.id} />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>Nombre</label>
                        <div  className='col-sm-10'>
                            <input type='text' className='form-control' value={mascota.Nombre}/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>Categoria</label>
                        <div  className='col-sm-10'>
                            <input type='text' className='form-control' value={mascota.Tipo}/>
                        </div>
                    </div>
                    
                    
                    <h2>Datos del Interesado</h2>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>Nombre</label>
                        <div  className='col-sm-10'>
                            <input type='text' className='form-control' value='' placeholder='Nombre'/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>Edad</label>
                        <div  className='col-sm-10'>
                            <input type='text' className='form-control' value='' placeholder='Edad'/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>Dirección</label>
                        <div  className='col-sm-10'>
                            <input type='text' className='form-control' value='' placeholder='Dirección'/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>Ocupación</label>
                        <div  className='col-sm-10'>
                            <input type='text' className='form-control' value='' placeholder='Ocupación'/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>Telefono</label>
                        <div  className='col-sm-10'>
                            <input type='text' className='form-control' value='' placeholder='Telefono'/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>Email</label>
                        <div  className='col-sm-10'>
                            <input type='text' className='form-control' value='' placeholder='Email'/>
                        </div>
                    </div>
                </form>
            </div>
        
                    
    )
}

export default Formulario;