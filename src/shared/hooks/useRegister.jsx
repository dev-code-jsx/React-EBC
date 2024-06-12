import { useState } from 'react';
import { register as registerService } from '../../services/api';

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [serverErrors, setServerErrors] = useState([]);

    const register = async (data) => {
        setIsLoading(true);
        setServerErrors([]);
        const response = await registerService(data);
        setIsLoading(false);

        if (response.errors) {
            setServerErrors(response.errors);
            return response;
        } else {
            return response;
        }
    };

    return {
        register,
        isLoading,
        serverErrors,
        setServerErrors,
    };
};  