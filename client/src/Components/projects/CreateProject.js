import React from 'react'

class CreateProject extends React.Component {
    state ={
        titulo:'',
        contenido:''
    }

    handleChange = e => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = e => {
        e.prevent.Default()
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5>Probando la conexión con banco de datos</h5>
                    <div className="input-field">
                        <label htmlFor="titulo">Título</label>
                        <input onChange={this.handleChange} type="text" id='titulo' />
                    </div>
                    <div className="input-field">
                        <label htmlFor="contenido">Contenido</label>                        
                        <textarea id="contenido" onChange={this.handleChange} className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-1">Enviar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject