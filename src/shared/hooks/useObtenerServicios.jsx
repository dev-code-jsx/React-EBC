import { useState, useEffect } from "react";
import { getServicios } from "../../services/api"; // Ajusta la ruta según tu estructura de archivos
import toast from "react-hot-toast";

export const useObtenerServicios = () => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(false);

  const obtenerServicios = async () => {
    setLoading(true);
    try {
      const servicioData = await getServicios(); // Llama a tu función de API para obtener servicios
      if (servicioData.error) {
        toast.error(
          servicioData.e.response?.data || "Error al obtener los servicios"
        );
      } else {
        setServicios(servicioData.data);
      }
    } catch (error) {
      console.error("Error al obtener los servicios:", error);
      toast.error("Error al obtener los servicios");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerServicios();
  }, []);

  return { servicios, loading, obtenerServicios };
};