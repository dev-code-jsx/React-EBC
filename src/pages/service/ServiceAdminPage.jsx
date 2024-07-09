/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useObtenerServicios } from "../../shared/hooks/useObtenerServicios";
import { useEliminarServicio } from "../../shared/hooks/useEliminarServicio";
import { ServicioForm } from "../../components/adminServicio/ServicioForm";
import { ServicioCardAdmin } from "../../components/adminServicio/ServicioCardAdmin";

export const ServiciosAdminPage = () => {
  const { servicios, obtenerServicios } = useObtenerServicios();
  const { eliminarServicio } = useEliminarServicio(obtenerServicios);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  useEffect(() => {
    obtenerServicios();
  }, []);

  const seleccionarServicio = (servicio) => {
    setServicioSeleccionado(servicio);
  };

  return (
    <div>
      <h1>Administración de Servicios</h1>
      <ServicioForm
        servicioSeleccionado={servicioSeleccionado}
        obtenerServicios={obtenerServicios}
      />
      <ServicioCardAdmin
        servicios={servicios}
        seleccionarServicio={seleccionarServicio}
        eliminarServicio={eliminarServicio}
      />
    </div>
  );
};
