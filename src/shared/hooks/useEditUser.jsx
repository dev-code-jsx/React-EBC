import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userEdit } from '../../services';

export const useEditUser = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const editUser = async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await userEdit(id, data);
      console.log('Edit user response:', response);
      if (response.error) {
        setError(response.e.message);
      } else {
        navigate('/dashboardAdmin'); // Redirigir después de la edición
      }
    } catch (e) {
      console.error('Error editing user:', e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { editUser, loading, error };
};
