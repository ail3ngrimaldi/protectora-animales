import React, { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Alert(props) {
    const { auth, profile } = props;    
    const [booleano, setBooleano] = useState(true);

    const handleclick = () => {
         if (!booleano) {
             setBooleano(true)
             console.log("TRUE", booleano);
         } else {
             setBooleano(false)
             console.log("FALSE", booleano);
         }         
    } 

    useEffect(() => {
        handleclick(true);
    }, [])

    return ( 
      <div>          
            <section>        
            <div class="alert alert-success" role="alert">
             <h4 class="alert-heading">¡Atención!</h4>
                <p>El refugio Sarmiento es una ONG (Organización No Gubernamental).</p>
                <p>La protectora no recibe animales hoy en día porque estamos trabajando al límite de nuestra capacidad. Los animales que eventualmente ingresan son los que están en extrema emergencia, para  que el refugio no sea un lugar de depósito...</p>
                <hr></hr>
                <p class="mb-0">El principal objetivo consiste en cuidar y asistir en la adopción para entonces reubicar a nuestros animales..</p>     
            </div>
                { profile.isAdmin === true && 
                  <Link className='nav-link' to='/Admin'>Administrador</Link>?
                    <button class="btn btn-primary btn-block" type="button" id="Button" onClick={handleclick}>
                    Habilitar/Desabilitar
                    </button>
                 : null }
            </section>                     
      </div>      
    );
}

const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }

export default connect(mapStateToProps)(Alert);
