
import { createDeposit } from "../../services"
import { useEffect } from "react"
import { useState } from "react"
export const useDeposit = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const depositFunds = async (data) =>{
        setIsLoading(true)
        try {
            const response = await createDeposit(data)
            setIsLoading(false)
            return response.data
        } catch (e) {
            setIsLoading(false)
            setError(e.response ? e.response.data.message : "Transfer failed");   
            return {error: true, message: e.message}
        }
    }
  return {depositFunds, isLoading, error}
}
