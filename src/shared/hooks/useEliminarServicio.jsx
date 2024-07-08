import toast from "react-hot-toast";
import { deleteService } from "../../services/api";

export const useEliminarServicio = (obtenerServicios) => {
  const eliminarServicio = async (id) => {
    try {
      await deleteService(id);
      toast.success("Servicio eliminado con éxito");
      obtenerServicios();
    } catch (error) {
      toast.error("Error al eliminar el servicio");
    }
  };

  return { eliminarServicio };
};