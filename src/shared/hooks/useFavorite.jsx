import { useState, useEffect } from "react";
import { addFavorite, getAccountDetails } from "../../services";
const useFavorite = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [accountDetails, setAccountDetails] = useState({ accountNumber: '', balance: 0 });

    useEffect(() => {
        const fetchAccountDetails = async () => {
            const response = await getAccountDetails();
            if (!response.error) {
                setAccountDetails({
                    accountNumber: response.data.accountNumber,
                    balance: response.data.balance
                });
            } else {
                setError('Failed to fetch account details');
            }
        };

        fetchAccountDetails();
    }, []);

    const addFavoriteAccount = async (data) => {
        setIsLoading(true);
        try {
            const response = await addFavorite(data);
            setIsLoading(false);
            return response;
        } catch (e) {
            setIsLoading(false);
            setError(e.response ? e.response.data.message : 'Add favorite failed');
            return { error: true, message: e.message };
        }
    };

    return { addFavoriteAccount, isLoading, error, accountDetails };
};

export default useFavorite;