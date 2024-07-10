/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { ServicioCardAdmin } from "../../components/adminServicio/ServicioCardAdmin";
import { ServicioForm } from "../../components/adminServicio/ServicioForm";
import { useObtenerServicios } from "../../shared/hooks/useObtenerServicios";

export const ServiciosAdminPage = () => {
  const { servicios, loading, obtenerServicios } = useObtenerServicios();
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const handleServicioDeleted = async (id) => {
      try {
          // Llamar a la API para eliminar el servicio por su ID
          const response = await deleteService(id);
          if (response.error) {
              toast.error(response.message || 'Error al eliminar el servicio');
              return;
          }

          // Si la eliminación es exitosa, actualizar la lista de servicios
          obtenerServicios();

          toast.success('Servicio eliminado exitosamente');
      } catch (error) {
          console.error('Error al eliminar el servicio:', error);
          toast.error('Error al eliminar el servicio');
      }
  };

  const handleEditarServicio = (servicio) => {
      setServicioSeleccionado(servicio);
  };

  const handleCancelarEdicion = () => {
      setServicioSeleccionado(null);
  };

  return (
      <div className="admin-servicios-page">
          <h1>Administración de Servicios</h1>
          <div className="servicios-container">
              <ServicioForm
                  servicioSeleccionado={servicioSeleccionado}
                  onCancelarEdicion={handleCancelarEdicion}
              />
              <ServicioCardAdmin
                  servicios={servicios}
                  onServicioDeleted={handleServicioDeleted}
                  onEditarServicio={handleEditarServicio}
                  loading={loading}
                  obtenerServicios={obtenerServicios} 
              />
          </div>
      </div>
  );
};