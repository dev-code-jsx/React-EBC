import toast from "react-hot-toast";
import { updateService as updateServiceRequest } from "../../services/api";

export const useActualizarServicio = (obtenerServicios) => {
  const actualizarServicio = async (data) => {
    const response = await updateServiceRequest(data);
    if (response.error) {
      return toast.error(
        response.e.response?.data || "Error al actualizar el servicio"
      );
    }
    obtenerServicios();
    return response.data;
  };

  return { actualizarServicio };
};
