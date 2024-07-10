import { useState } from "react";
import { useEffect } from "react";
import { listFavorites } from "../../services";
export const useGetFavorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchFavorites = async () => {
        try {
          const response = await listFavorites();
          if (response && Array.isArray(response.favorites)) {
            setFavorites(response.favorites);
          } else {
            setError('Invalid data format');
          }
        } catch (err) {
          setError(err.message || 'Error fetching favorites');
        } finally {
          setLoading(false);
        }
      };
  
      fetchFavorites();
    }, []);
  
    return { favorites, loading, error };
};