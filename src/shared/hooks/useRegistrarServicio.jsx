import { useState } from "react";
import toast from "react-hot-toast";
import { registerService  } from "../../services/api";

export const useRegistrarServicio = () => {
  const [loading, setLoading] = useState(false);

  const registrarServicio = async (data) => {
    setLoading(true);
    try {
      const response = await registerService(data);
      if (response.error) {
        toast.error("Error al agregar el servicio");
      } else {
        toast.success("Servicio agregado con éxito");
      }
      setLoading(false);
      return response;
    } catch (error) {
      toast.error("Error al procesar la solicitud");
      setLoading(false);
    }
  };

  return { registrarServicio, loading };
};