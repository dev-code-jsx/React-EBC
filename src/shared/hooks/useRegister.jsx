import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerRequest } from '../../services/api';
import toast from 'react-hot-toast';

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [serverErrors, setServerErrors] = useState([]);

    const navigate = useNavigate();

    const register = async (username, names, lastNames, dpi, address, phone, email, job, monthlyIncome, type) => {
        setIsLoading(true);

        try {
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
            
            if (response.errors) {
                setServerErrors(response.errors);
                toast.error('Error al registrar: ' + response.errors.map(err => err.msg).join(', '));
            } else if (response.error) {
                setServerErrors([{ msg: response.message }]);
                toast.error('Error al registrar: ' + response.message);
            } else {
                const { user } = response;
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user));
                    navigate('/');
                } else {
                    localStorage.removeItem('user');
                }
            }
        } catch (error) {
            setIsLoading(false);
            setServerErrors([{ msg: 'Server error' }]);
            toast.error('Server error');
        }
    }

    return {
        register,
        isLoading,
        serverErrors
    }
}