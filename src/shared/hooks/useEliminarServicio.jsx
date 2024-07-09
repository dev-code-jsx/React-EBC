import { useState } from "react";
import toast from "react-hot-toast";
import { deleteService } from "../../services/api";

export const useEliminarServicio = () => {
  const [loading, setLoading] = useState(false);

  const eliminarServicio = async (id) => {
    setLoading(true);
    try {
      const response = await deleteService(id);
      if (response.error) {
        toast.error("Error al eliminar el servicio");
      } else {
        toast.success("Servicio eliminado con éxito");
      }
      setLoading(false);
      return response;
    } catch (error) {
      toast.error("Error al procesar la solicitud");
      setLoading(false);
    }
  };

  return { eliminarServicio, loading };
};