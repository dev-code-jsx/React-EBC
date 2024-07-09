import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { usersGet as usersGetRequest } from "../../services/api";

export const useGetUsers = () => {
    const [accounts, setAccounts] = useState([]);
    const [loading , setLoading] = useState(false);

    const getAccounts = async () => {
        setLoading(true);
        const accountsData = await usersGetRequest();

        if(accountsData.error){
            setLoading(false);
            return toast.error(
                accountsData.error,
                accountsData.e?.response?.data || "Error occurred when reading accounts"
            );
        }

        setAccounts(accountsData.data);
        setLoading(false);
        return accountsData.data;
    };

    useEffect(() => {
        getAccounts();
    }, []);

    return {
        accounts,
        getAccounts,
        loading
    };
};
