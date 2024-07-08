import React, { useState, useEffect } from "react";
import { Input } from "../Input"; // Asegúrate de que la ruta sea correcta
import { useRegistrarServicio } from "../../shared/hooks/useRegistrarServicio";
import { useActualizarServicio } from "../../shared/hooks/useActualizarServicio";
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

  const handleChange = (value, field) => {
    setFormData({
      ...formData,
      [field]: value,
    });
    setShowErrors(false);
  };

  const handleBlur = (value, field) => {
    setTouchedFields({
      ...touchedFields,
      [field]: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrors(true);

    if (
      !formData.nameService ||
      !formData.description ||
      !formData.price ||
      !formData.imagen
    ) {
      return toast.error("Todos los campos son obligatorios");
    }

    try {
      if (servicioSeleccionado) {
        await updatuseActualizarServicioeServicio(servicioSeleccionado.id, formData);
        toast.success("Servicio actualizado con éxito");
      } else {
        await addServicio(formData);
        toast.success("Servicio agregado con éxito");
      }
      obtenerServicios();
      setFormData({
        nameService: "",
        description: "",
        price: "",
        imagen: "",
      });
    } catch (error) {
      toast.error("Error al procesar la solicitud");
    }
  };

  return (
    <form className="servicio-form" onSubmit={handleSubmit}>
      <h2>{servicioSeleccionado ? "Editar Servicio" : "Registrar Servicio"}</h2>
      <div className="input-container">
        <Input
          field="nameService"
          label="Nombre del Servicio"
          value={formData.nameService}
          onChangeHandler={handleChange}
          type="text"
          showErrorMessage={showErrors && !formData.nameService}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleBlur}
        />
      </div>
      <div className="input-container">
        <Input
          field="description"
          label="Descripción"
          value={formData.description}
          onChangeHandler={handleChange}
          type="text"
          showErrorMessage={showErrors && !formData.description}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleBlur}
          textarea
        />
      </div>
      <div className="input-container">
        <Input
          field="price"
          label="Precio"
          value={formData.price}
          onChangeHandler={handleChange}
          type="text"
          showErrorMessage={showErrors && !formData.price}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleBlur}
        />
      </div>
      <div className="input-container">
        <Input
          field="imagen"
          label="URL de la imagen"
          value={formData.imagen}
          onChangeHandler={handleChange}
          type="text"
          showErrorMessage={showErrors && !formData.imagen}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleBlur}
        />
      </div>
      <button type="submit" className="submit-button">
        {servicioSeleccionado ? "Actualizar" : "Registrar"}
      </button>
    </form>
  );
};