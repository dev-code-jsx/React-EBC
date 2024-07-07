/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useServicio } from '../../shared/hooks/useServicio';
import './ServicioCard.css';

export const ServicioCard = () => {
    const { servicios, obtenerServicios } = useServicio();

    useEffect(() => {
        obtenerServicios();
    }, []);

    if(servicios.length === 0) {
        return <p className='no-servicios'>Cargando servicios...</p>
    }

    const handleSolicitarClick = (servicio) => {
        toast.success(`Solicitud para el servicio ${servicio.nameService} ha sido enviada`);
    };

    return (
        <div className="servicio-card-container">
            <h2 className="h">Servicios</h2>
            {servicios.map((servicio, index) => (
                <div key={index} className="servicio-card">
                    <div>
                        <img src={servicio.imagen} alt={servicio.nameService} className="servicio-imagen" />
                    </div>
                    <div>
                        <label><i className="icon">🏷️</i>Nombre:</label>
                        <div>{servicio.nameService}</div>
                    </div>
                    <div>
                        <label><i className="icon">📝</i>Descripción:</label>
                        <div>{servicio.description}</div>
                    </div>
                    <div>
                        <label><i className="icon">💵</i>Precio:</label>
                        <div>${servicio.price}</div>
                    </div>
                    <button className="solicitar" onClick={() => handleSolicitarClick(servicio)}>Solicitar</button>
                </div>
            ))}
        </div>
    );
}
