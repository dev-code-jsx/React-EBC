import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { deleteService, updateService  } from "../../services/api";
import './servicioCardAdmin.css';

export const ServicioCardAdmin = ({ servicios, obtenerServicios }) => {
  const [editandoServicio, setEditandoServicio] = useState(null); // Estado para almacenar el servicio que se está editando

  const handleActualizarClick = async (servicioActualizado) => {
      try {
          const response = await updateService(servicioActualizado._id, servicioActualizado);
          if (response.error) {
              toast.error(response.message || 'Error al actualizar el servicio');
              return;
          }
          obtenerServicios(); // Actualizar la lista de servicios después de la actualización
          setEditandoServicio(null); // Dejar de editar después de la actualización
          toast.success('Servicio actualizado exitosamente');
      } catch (error) {
          console.error('Error al actualizar el servicio:', error);
          toast.error('Error al actualizar el servicio');
      }
  };

  const handleCancelarEdicion = () => {
      setEditandoServicio(null); // Cancelar la edición actual
  };

  const handleEliminarClick = async (id) => {
      try {
          const response = await deleteService(id);
          if (response.error) {
              toast.error(response.message || 'Error al eliminar el servicio');
              return;
          }
          obtenerServicios(); // Actualizar la lista de servicios después de la eliminación
          toast.success('Servicio eliminado exitosamente');
      } catch (error) {
          console.error('Error al eliminar el servicio:', error);
          toast.error('Error al eliminar el servicio');
      }
  };

  if (!servicios || servicios.length === 0) {
      return <p className='no-servicios'>Cargando servicios...</p>;
  }

  return (
      <div className="servicio-card-container">
          {servicios.map((servicio, index) => (
              <div key={index} className="servicio-card">
                  <img src={servicio.imagen} alt={servicio.nombre} className="servicio-imagen" />
                  <div className="servicio-card-content">
                      {editandoServicio && editandoServicio._id === servicio._id ? (
                          <div className="edicion-servicio">
                              <input
                                  type="text"
                                  value={editandoServicio.nameService}
                                  onChange={(e) => setEditandoServicio({ ...editandoServicio, nameService: e.target.value })}
                              />
                              {/* Otros campos editables */}
                              <button onClick={() => handleActualizarClick(editandoServicio)}>Guardar</button>
                              <button onClick={handleCancelarEdicion}>Cancelar</button>
                          </div>
                      ) : (
                          <>
                              <h3 className="servicio-titulo">{servicio.nameService}</h3>
                              <p className="servicio-descripcion">{servicio.description}</p>
                              <p className="servicio-precio">Precio: Q {servicio.price}</p>
                              <div className="acciones">
                                  <button className="actualizar" onClick={() => setEditandoServicio(servicio)}>Editar</button>
                                  <button className="eliminar" onClick={() => handleEliminarClick(servicio._id)}>Eliminar</button>
                              </div>
                          </>
                      )}
                  </div>
              </div>
          ))}
      </div>
  );
};