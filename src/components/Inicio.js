import React from 'react'
import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';

export const Inicio = () => {
    return (
        <div className='home'>
            <h1>Hola, soy <strong>Miguel Silva Rubio</strong> y soy Desarrollador Web especializado
                en Frontend y manejando un poco de Backend. Ofrezco mis servicios de <strong> programacion
                y desarrollo</strong> en proyectos web.
                </h1>

            <h2>
                Te ayudo a crear tu sitio o aplicacion web y cumplir tus metas como negocio
                
            </h2>

            <Link id='contactWithMe' to="/contacto">Contacta Conmigo</Link>

            <section className='lasts-works'>
                <h2 className='heading'>Algunos de mis proyectos</h2>
                <p>Estos son algunos de mis trabajos de desarrollo web</p>

                <ListadoTrabajos  limite="2" />

            </section>
        </div>
    )
}
