import { useState, useEffect } from 'react'
import { convertCurrency, getAccountDetails } from '../../services/api'

const useCurrencyConverter = () => {
    const [balance, setBalance] = useState(0);
    const [toCurrency, setToCurrency] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [conversionRate, setConversionRate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserBalance = async () => {
            try {
                const response = await getAccountDetails();
                if (response.error){
                    throw new Error(response.message);
                }
                setBalance(response.data.balance);
            } catch (error) {
                setError(error.message);    
            }
        };
        fetchUserBalance();
    }, []);

    const handleConvert = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await convertCurrency({ to: toCurrency});
            if (response.error) {
                throw new Error(response.message);
            }
            setConvertedAmount(response.data.convertedAmount);
            setConversionRate(response.data.conversionRate)
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        balance,
        toCurrency,
        convertedAmount,
        conversionRate,
        loading,
        error,
        setToCurrency,
        handleConvert,
    };
};

export default useCurrencyConverter;