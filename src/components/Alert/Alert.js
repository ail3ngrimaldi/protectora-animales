import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

export default function Alert () {
    return (
        <div>
            <Navbar bg="danger" >
                <Navbar.Brand>Lamentamos informar que por el momento no contamos con recursos para aceptar mascotas nuevas en el refugio</Navbar.Brand>
            </Navbar>
        </div>
    );
}