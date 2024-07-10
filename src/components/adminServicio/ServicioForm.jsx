/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Input } from "../Input"; // Asegúrate de que la ruta sea correcta
import { registerService, updateService } from "../../services/api";
import "./servicioForm.css";

export const ServicioForm = ({ servicioSeleccionado, onCancelarEdicion }) => {
  const [formulario, setFormulario] = useState({
    imagen: "",
    nameService: "",
    description: "",
    price: ""

  });

  useEffect(() => {
    if (servicioSeleccionado) {
      setFormulario({
        imagen: servicioSeleccionado.imagen,
        nameService: servicioSeleccionado.nameService,
        description: servicioSeleccionado.description,
        price: servicioSeleccionado.price
      });
    } else {
      setFormulario({
        imagen: "",
        nameService: "",
        description: "",
        price: ""
      });
    }
  }, [servicioSeleccionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { imagen, nameService, description, price } = formulario;

    if (!imagen || !nameService || !description || !price) {
      toast.error("Por favor completa todos los campos.");
      return;
    }

    const nuevoServicio = { imagen, nameService, description, price };

    try {
      if (servicioSeleccionado) {
        await updateService(servicioSeleccionado._id, nuevoServicio);
        toast.success("Servicio actualizado correctamente.");
      } else {
        await registerService(nuevoServicio);
        toast.success("Servicio registrado correctamente.");
      }
      setFormulario({
        imagen: "",
        nameService: "",
        description: "",
        price: ""
      });
      onCancelarEdicion();
      window.location.reload();
    } catch (error) {
      console.error("Error al guardar el servicio:", error);
      toast.error("Error al guardar el servicio. Por favor intenta nuevamente.");
    }
  };

  return (
    <div className="servicio-form">
      <h2>{servicioSeleccionado ? "Editar Servicio" : "Registrar Nuevo Servicio"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="imagen"
          value={formulario.imagen}
          onChange={handleChange}
          placeholder="URL de la imagen"
          required
        />
        <input
          type="text"
          name="nameService"
          value={formulario.nameService}
          onChange={handleChange}
          placeholder="Nombre del servicio"
          required
        />
        <textarea
          name="description"
          value={formulario.description}
          onChange={handleChange}
          placeholder="Descripción del servicio"
          required
        />
        <input
          type="number"
          name="price"
          value={formulario.price}
          onChange={handleChange}
          placeholder="Precio del servicio"
          required
        />
        <div className="form-buttons">
          <button type="submit">{servicioSeleccionado ? "Actualizar" : "Registrar"}</button>
          {servicioSeleccionado && (
            <button type="button" onClick={onCancelarEdicion}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};