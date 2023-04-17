import React from 'react';
import "../css/contacto.css";


export const Contacto = () => {

    //validar correo
    function validarCorreo(email){
        const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        const esValido = expReg.test(email);
        if(esValido===false){
            setError("ERROR, correo invalido");
            return false
        }else{
            setError("");
            return true
        }

    }

    const [error, setError] = React.useState("");
    const [validacion, setValidacion] = React.useState("");
    const [objetoState, setObjetoState] = React.useState({
        nombre: "",
        apellidos: "",
        email: "",
        mensaje: " "
    });

        console.log(objetoState)
        const recogerDatos = (e)=>{
            e.preventDefault();
            
            let target = e.target;
            
            let nombre = target.nombre.value;
            let apellidos = target.apellidos.value;
            let email = target.email.value;
            let mensaje = target.mensaje.value;

                let objetoCreado = {
                    nombre,
                    apellidos,
                    email,
                    mensaje
                }

            let validacion = validarCorreo(objetoCreado.email);
                if(objetoCreado.nombre.length <=2){
                    setError("ERROR! el nombre es invalido");
                    setValidacion("");
                }
                else if(objetoCreado.apellidos <= 5){
                    setError("ERROR, el apellido no es valido");
                    setValidacion("");
                }
                else if(validacion === false){
                    setError("ERROR, correo invalido");
                    setValidacion("");
                }else if(!mensaje){
                    setError("ERROR, debes incluirun mensaje");
                    setValidacion("");
                }
                else{
                    setValidacion("Datos enviados correctamente!")
                    setObjetoState(objetoCreado)

                }
                

                
                
                    
                
        }


    return (
        <div id='formContact'>
            <h1 className='heading'>Contacto</h1>
                    {error && <span className={'error'}>{error}</span>}
                    {validacion && <span className={'validacion'}> {validacion}</span>}
            <form className='contact' onSubmit={ recogerDatos }>

                
                <label>Nombre: </label>
                <input name='nombre' type='text' placeholder='Ingresa tu Nombre'/>

                
                <label>Apellidos: </label>
                <input name='apellidos' type='text' placeholder='Ingresa tus apellidos'/>


                <label>Email: </label>
                <input name='email' type='text' placeholder='Ingresa tu email'/>

                <label>Mensaje: </label>
                <textarea name='mensaje' type='text' placeholder='Ingresa tu mensaje' />

                <input type="submit" value="enviar" id='btn-enviar' />

                
            </form>
        </div>
    )
}
