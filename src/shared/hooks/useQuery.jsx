import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { getQueries as getQueriesRequest } from "../../services";

export const useQuery = () => {
    const [queries, setQueries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getQueries = async () => {
        setIsLoading(true);
        const queriesData = await getQueriesRequest();

        if (queriesData.error) {
            setIsLoading(false);
            return toast.error(
                queriesData.error,
                queriesData.e?.response?.data || "Error occurred when reading queries"
            );
        }

        setQueries(queriesData.data);
        setIsLoading(false);
        return queriesData.data;
    }

    useEffect(() => {
        getQueries();
    }, []);

    return { getQueries, isLoading, queries };
}