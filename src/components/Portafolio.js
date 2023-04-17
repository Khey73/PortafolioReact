import React from 'react';
import { trabajos } from "../data/trabajos";
import { Link } from "react-router-dom";
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
