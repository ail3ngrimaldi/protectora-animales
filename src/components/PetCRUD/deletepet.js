import React from 'react'

export const DeletePet = () => {
    return (
        <div>
            <h3>DELETE Screen</h3>
            <div>
                <input type="Nombre" class="form-control" id="inputNombre" placeholder="ID"></input>
                <button type="submit" class="btn btn-primary">ELIMINAR</button>
            </div>
        </div>
    )
}
