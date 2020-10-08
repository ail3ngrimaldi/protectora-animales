import React from 'react'

export const UpdatePet = () => {
    return (
        <div>
        <h3>CREATE Screen</h3>
        <div>
            <input type="Nombre" class="form-control" id="inputNombre" placeholder="ID"></input>
            <button type="submit" class="btn btn-primary">Buscar</button>
        </div>

        <form>

        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputNombre">Nombre</label>
            <input type="Nombre" class="form-control" id="inputNombre" placeholder="Nombre"></input>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputEdad">Nombre</label>
                <input type="Edad" class="form-control" id="inputEdad" placeholder="Edad"></input>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputState">Genero</label>
                <select id="inputState" class="form-control" placeholder="Genero">
                    <option selected>...</option>
                    <option>Macho</option>
                    <option>Hembra</option>
                </select>
            </div>
            <div class="form-group col-md-4">
            <label for="inputState">Castrado</label>
                <select id="inputState" class="form-control">
                    <option selected>...</option>
                    <option>SI</option>
                    <option>NO</option>
                </select>
            </div>
            <div class="form-group col-md-4">
            <label for="inputState">Tipo de mascota</label>
                <select id="inputState" class="form-control">
                    <option selected>...</option>
                    <option >Perro</option>
                    <option >Gato</option>
                </select>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputPersonalidad">Personalidad</label>
            <input type="Nombre" class="form-control" id="inputPersonalidad" placeholder="Nombre"></input>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputTamaño">Tamaño</label>
                <input type="Edad" class="form-control" id="inputTamaño" placeholder="Edad"></input>
            </div>
        </div>

        <button type="submit" class="btn btn-primary">EDITAR</button>

        </form>
    </div>
    )
}
