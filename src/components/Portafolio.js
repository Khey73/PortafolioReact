import React from 'react';

import { ListadoTrabajos } from "../components/ListadoTrabajos";

import "../css/portafolio.css"

export const Portafolio = () => {

    return (
        <div className='page'>
            <h1 className='heading'>Portafolio</h1>

            <ListadoTrabajos />
        
        </div>
    )
}
