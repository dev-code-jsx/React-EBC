import { useState } from "react";

const useTransfer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const transferFundsHandler = async (amount, toAccount) => {
      setIsLoading(true);
      setError(null);
  
      const userDetails = JSON.parse(localStorage.getItem('user'));
      const fromAccount = userDetails.accountNumber;
  
      try {
        const response = await transferFunds({ amount, toAccount, fromAccount });
        setIsLoading(false);
  
        if (response.error) {
          setError(response.message);
        } else {
          return response;
        }
      } catch (e) {
        setIsLoading(false);
        setError(e.message);
      }
    };
  
    return {
      transferFunds: transferFundsHandler,
      isLoading,
      error
    };
  };
  
  export default useTransfer;