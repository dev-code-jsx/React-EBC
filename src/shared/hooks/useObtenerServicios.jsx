import { useState } from "react";
import toast from "react-hot-toast";
import { getServicios } from "../../services/api";

export const useObtenerServicios = () => {
  const [servicios, setServicios] = useState([]);

  const obtenerServicios = async () => {
    const servicioData = await getServicios();
    if (servicioData.error) {
      return toast.error(
        servicioData.e.response?.data || "Error al obtener los servicios"
      );
    }
    setServicios(servicioData.data);
  };

  return { servicios, obtenerServicios };
};