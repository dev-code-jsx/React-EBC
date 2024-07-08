import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login as loginRequest} from "../../services/api";
import toast from "react-hot-toast";

export const useLogin = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    
    
    const login = async (codeUser, password) => {
        setIsLoading(true);

        const response = await loginRequest({
            codeUser,
            password
        });

        setIsLoading(false);
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrió un error al iniciar sesión'
            );
        }

        const { userDetails } = response.data;

        localStorage.setItem('user', JSON.stringify(userDetails));

        switch (userDetails.role) {
            case 'USER':
                navigate('/dashboard');
                break;
            case 'ADMIN':
                navigate('/dashboardAdmin');
                break;
            default:
                navigate('/dashboard');
        }
    };

    return {
        login,
        isLoading
    };

}