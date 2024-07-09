import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Input } from "../Input"; // Asegúrate de que la ruta sea correcta
import { useRegistrarServicio } from "../../shared/hooks/useRegistrarServicio";
import { useActualizarServicio } from "../../shared/hooks/useActualizarServicio";
import { useEliminarServicio } from "../../shared/hooks/useEliminarServicio";
import "./servicioForm.css";

export const ServicioForm = ({ servicioSeleccionado, obtenerServicios }) => {
  const [formData, setFormData] = useState({
    nameService: "",
    description: "",
    price: "",
    imagen: "",
  });
  const [showErrors, setShowErrors] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});

  const { registrarServicio } = useRegistrarServicio();
  const { actualizarServicio } = useActualizarServicio();
  const { eliminarServicio } = useEliminarServicio();

  useEffect(() => {
    if (servicioSeleccionado) {
      setFormData(servicioSeleccionado);
    } else {
      setFormData({
        nameService: "",
        description: "",
        price: "",
        imagen: "",
      });
    }
  }, [servicioSeleccionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setShowErrors(false);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrors(true);

    if (!formData.nameService || !formData.description || !formData.price || !formData.imagen) {
      return toast.error("Todos los campos son obligatorios");
    }

    try {
      if (servicioSeleccionado) {
        await actualizarServicio(formData);
        toast.success("Servicio actualizado con éxito");
      } else {
        await registrarServicio(formData);
        toast.success("Servicio agregado con éxito");
      }
      obtenerServicios();
      setFormData({
        nameService: "",
        description: "",
        price: "",
        imagen: "",
      });
      setTouchedFields({});
    } catch (error) {
      toast.error("Error al procesar la solicitud");
    }
  };

  const handleDelete = async () => {
    if (servicioSeleccionado) {
      if (window.confirm("¿Estás seguro de que deseas eliminar este servicio?")) {
        try {
          await eliminarServicio(servicioSeleccionado.id);
          obtenerServicios();
          toast.success("Servicio eliminado con éxito");
          setFormData({
            nameService: "",
            description: "",
            price: "",
            imagen: "",
          });
          setTouchedFields({});
        } catch (error) {
          toast.error("Error al eliminar el servicio");
        }
      }
    }
  };

  return (
    <form className="servicio-form" onSubmit={handleSubmit}>
      <h2 className="form-title">{servicioSeleccionado ? "Editar Servicio" : "Registrar Servicio"}</h2>
      <div className="input-container">
        <label htmlFor="nameService" className="form-label">Nombre del Servicio</label>
        <input
          type="text"
          name="nameService"
          id="nameService"
          value={formData.nameService}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${showErrors && !formData.nameService ? "input-error" : ""}`}
        />
        {showErrors && !formData.nameService && (
          <span className="error-message">Este campo es obligatorio</span>
        )}
      </div>
      <div className="input-container">
        <label htmlFor="description" className="form-label">Descripción</label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${showErrors && !formData.description ? "input-error" : ""}`}
        />
        {showErrors && !formData.description && (
          <span className="error-message">Este campo es obligatorio</span>
        )}
      </div>
      <div className="input-container">
        <label htmlFor="price" className="form-label">Precio</label>
        <input
          type="text"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${showErrors && !formData.price ? "input-error" : ""}`}
        />
        {showErrors && !formData.price && (
          <span className="error-message">Este campo es obligatorio</span>
        )}
      </div>
      <div className="input-container">
        <label htmlFor="imagen" className="form-label">URL de la imagen</label>
        <input
          type="text"
          name="imagen"
          id="imagen"
          value={formData.imagen}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${showErrors && !formData.imagen ? "input-error" : ""}`}
        />
        {showErrors && !formData.imagen && (
          <span className="error-message">Este campo es obligatorio</span>
        )}
      </div>
      <button type="submit" className="form-button">
        {servicioSeleccionado ? "Actualizar" : "Registrar"}
      </button>
      {servicioSeleccionado && (
        <button type="button" onClick={handleDelete} className="form-button delete-button">
          Eliminar
        </button>
      )}
    </form>
  );
};