import React from 'react';
import { trabajos } from "../data/trabajos";
import { Link } from "react-router-dom";
import "../css/listadoTrabajos.css";

import "../css/portafolio.css"

export const ListadoTrabajos = ({limite}) => {

    return (
            <section className='works'>
                {
                    trabajos.slice(0, limite).map(trabajo =>(
                        <article key={trabajo.id} className='work-item'>
                            <div className='mask'>
                                <img src={"/images/"+trabajo.id+".jpg"}/>
                            </div>
                            <span>{trabajo.categorias}</span>
                            <h2><Link to={"/proyecto/"+trabajo.nombre}>{trabajo.nombre}</Link></h2>
                            <h3>{trabajo.tecnologias}</h3>

                        </article>
                    ))
                }
            </section>
    )
}
