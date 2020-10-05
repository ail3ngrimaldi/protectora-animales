import React, { Component } from 'react';
import { createProject } from '../../Components/Actions/projectActions';
import { connect } from 'react-redux';
class CreateProject extends React.Component {
    state ={
        titulo:'',
        contenido:''
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        this.props.createProject(this.state);
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

const mapDispatchToProps = dispatch => {
    return {
      createProject: (project) => dispatch(createProject(project))
    }
  }
  
  export default connect(null, mapDispatchToProps)(CreateProject)
  