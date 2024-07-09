import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getAccountsAsc as getAccountsAscRequest } from "../../services/api";

export const useGetUsersAsc = () => {
    const [accounts, setAccounts] = useState([]);
    const [loading , setLoading] = useState(false);

    const getAccounts = async () => {
        setLoading(true);
        const accountsData = await getAccountsAscRequest(
            "asc"
        );

        if(accountsData.error){
            setLoading(false);
            return toast.error(
                accountsData.error,
                accountsData.e?.response?.data || "Error occurred when reading accounts"
            );
        }
        console.log(accountsData.data);
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
