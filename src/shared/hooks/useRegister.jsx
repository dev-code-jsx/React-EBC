import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {register as registerRequest } from '../../services/api';
import toast from 'react-hot-toast';

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const register = async (username, names, lastNames, dpi, address, phone,
        email, job, monthlyIncome, type) => {
            setIsLoading(true);

            const response = await registerRequest({
                username,
                names,
                lastNames,
                dpi,
                address,
                phone,
                email,
                job,
                monthlyIncome,
                type
            });

            setIsLoading(false);
            if (response.error) {
                return toast.error(
                    response.e?.response?.data || 'Error al iniciar sesión'
                );
            }

            const { user } = response.data;
            console.log(user, "alñksdjfalkdf")
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            }else {
                localStorage.removeItem('user');
            }
    
            navigate('/')
        }

        return {
            register,
            isLoading
        }
    
}