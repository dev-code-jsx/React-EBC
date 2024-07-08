/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useServicio } from '../../shared/hooks/useServicio';
import './servicioCard.css';

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
            {servicios.map((servicio, index) => (
                <div key={index} className="servicio-card">
                    <img src={servicio.imagen} alt={servicio.nombre} className="servicio-imagen" />
                    <div className="servicio-card-content">
                        <h3 className="servicio-titulo">{servicio.nameService}</h3>
                        <p className="servicio-descripcion">{servicio.description}</p>
                        <button className="solicitar" onClick={() => handleSolicitarClick(servicio)}>Solicitar</button>
                    </div>
                </div>
            ))}
        </div>
    );
};