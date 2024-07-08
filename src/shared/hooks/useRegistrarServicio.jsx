import toast from "react-hot-toast";
import { registerService as registerServiceRequest } from "../../services/api";

export const useRegistrarServicio = (obtenerServicios) => {
  const registrarServicio = async (data) => {
    const response = await registerServiceRequest(data);
    if (response.error) {
      return toast.error(
        response.e.response?.data || "Error al registrar el servicio"
      );
    }
    obtenerServicios();
    return response.data;
  };

  return { registrarServicio };
};
