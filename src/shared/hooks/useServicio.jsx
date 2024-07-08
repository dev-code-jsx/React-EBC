/* eslint-disable no-unused-vars */
import { useState } from "react";
import toast from "react-hot-toast";
import { getServicios as getServiciosRequest } from "../../services/api";

export const useServicio = () => {
    const [servicios, setServicios] = useState([]);

    const obtenerServicios = async () => {
        const servicioData = await getServiciosRequest();
        if (servicioData.error) {
            return toast.error(
                servicioData.e.response?.data || "Error al obtener los servicios"
            );
        }
        setServicios(servicioData.data);
        return servicioData.data;
    };

    return { servicios, obtenerServicios };
};