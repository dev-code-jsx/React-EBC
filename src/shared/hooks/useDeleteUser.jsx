import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../services'; // Asegúrate de tener el servicio adecuado importado

export const useDeleteUser = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    setError(null);
    try {
      const response = await deleteUser(id);
      console.log('Delete user response:', response);
      if (response.error) {
        setError(response.e.message);
      } else {
        // Implementa acciones después de la eliminación si es necesario
        console.log('User deleted successfully');
        navigate('/dashboardAdmin'); // Redirigir después de la eliminación
      }
    } catch (e) {
      console.error('Error deleting user:', e);
      setError(e.message);
    }
  };

  return { handleDelete, error };
};
