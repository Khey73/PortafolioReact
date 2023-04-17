import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { trabajos } from "../data/trabajos";
import "../css/proyectos.css";

export const Proyecto = () => {
    //estado para mostrar proyecto FILTRADO
    const [proyecto, setProyecto] = useState({});

    //hook pararecibir los parametros de la url
    const params = useParams(); //params.id params...

    useEffect(()=>{
            let proyecto = trabajos.filter(trabajo => trabajo.nombre === params.nombre);

            console.log(proyecto)
            setProyecto(proyecto[0]);
    },[])

    return (
        <div className='page page-work'>
            <div className='mask'>
                <img src={"/images/"+proyecto.id+".jpg"}/>
            </div>
            <h1 className='heading'>{proyecto.nombre}</h1>
            <p className='tecnologies'>{proyecto.tecnologias}</p>
            <p>{proyecto.Descripccion}</p>
            <a href={"https:/"+proyecto.url} target='blank'>Ir al proyecto</a> 
        </div>
    )
}
