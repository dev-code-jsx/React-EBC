/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { ServicioCard } from '../../components/servicio/ServicioCard'; // Asegúrate de que la ruta sea correcta
import { getServicios as getServiciosRequest } from '../../services';

export const ServiciosPage = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await getServiciosRequest();
        if (!response.error) {
          setServicios(response.data.servicios || []);
        } else {
          console.log('Error:', response.data);
        }
      } catch (error) {
        console.log('Error fetching servicios:', error);
      }
    };

    fetchServicios();
  }, []);

  return (
    <div>
      <h1>Servicios</h1>
      <ServicioCard servicios={servicios} />
    </div>
  );
};