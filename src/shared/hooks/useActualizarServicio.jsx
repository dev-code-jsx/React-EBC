import { useState } from "react";
import toast from "react-hot-toast";
import { updateService } from "../../services/api";

export const useActualizarServicio = () => {
  const [loading, setLoading] = useState(false);

  const actualizarServicio = async (data) => {
    setLoading(true);
    try {
      const response = await updateService(data);
      if (response.error) {
        toast.error("Error al actualizar el servicio");
      } else {
        toast.success("Servicio actualizado con éxito");
      }
      setLoading(false);
      return response;
    } catch (error) {
      toast.error("Error al procesar la solicitud");
      setLoading(false);
    }
  };

  return { actualizarServicio, loading };
};