import { getUserDetails } from "../../services";
import { useEffect } from "react";
import { useState } from "react";

const useAccountD = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [myAccountDetails, setUserDetails] = useState({});

    useEffect(() => {
        const fetchUserDetails = async () => {
            const response = await getUserDetails();
            if (!response.error) {
                setUserDetails({
                    accountNumber: response.data.accountNumber,
                    balance: response.data.balance,
                    type: response.data.type
                });
            } else {
                setError('Failed to fetch user details');
            }
        };

        fetchUserDetails();
    }, []);

    return { myAccountDetails, isLoading, error };
}


export default useAccountD;