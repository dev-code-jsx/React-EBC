import React from "react";
import toast from "react-hot-toast";
import "./servicioCardAdmin.css";

export const ServicioCardAdmin = ({
  servicios,
  seleccionarServicio,
  eliminarServicio,
}) => {
  const handleEliminarClick = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este servicio?")) {
      eliminarServicio(id);
      toast.success("Servicio eliminado con éxito");
    }
  };

  return (
    <div className="servicio-card-admin-container">
      {servicios.map((servicio) => (
        <div key={servicio.id} className="servicio-card-admin">
          <img
            src={servicio.imagen}
            alt={servicio.nameService}
            className="servicio-imagen-admin"
          />
          <div className="servicio-card-content-admin">
            <h3 className="servicio-titulo-admin">{servicio.nameService}</h3>
            <p className="servicio-descripcion-admin">{servicio.description}</p>
            <p className="servicio-precio-admin">Precio: {servicio.price}</p>
            <button
              className="editar"
              onClick={() => seleccionarServicio(servicio)}
            >
              Editar
            </button>
            <button
              className="eliminar"
              onClick={() => handleEliminarClick(servicio.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};