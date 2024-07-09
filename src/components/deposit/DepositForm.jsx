import "./depositForm.css"
import { Input } from "../Input"
import { useState } from "react"
import { useDeposit } from "../../shared/hooks/useDeposit"
import { useEffect } from "react"
import useDepositForm from "../../shared/hooks/useDepositForm"
import toast from "react-hot-toast"
export const DepositForm = () => {
    const { formState, handleInputValueChange, handleInputValidationOnBlur, setFormState } = useDepositForm()
    const { depositFunds, isLoading, error } = useDeposit()
    useEffect(() => {
        if (!isLoading) {
            setFormState({
                toAccount: { value: '', isValid: true, showError: false, validationMessage: '' },
                amount: { value: '', isValid: true, showError: false, validationMessage: '' },
            })
        }
    }, [isLoading, error, setFormState])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await depositFunds({
            toAccount: formState.toAccount.value,
            amount: Number(formState.amount.value),
        })
        if (result && result.errors) {
            console.error("Server validation errors: ", result.errors)
            result.errors.forEach(error => {
                const { path, msg } = error;
                setFormState(prevState => ({
                    ...prevState,
                    [path]: {
                        ...prevState[path],
                        isValid: false,
                        showError: true,
                        validationMessage: msg
                    }
                }))
            })
            toast.error("Deposit failed. Couldnt complete the deposit")
        } else {
            toast.success("Deposit succesful")
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }

    }
    return (
        <div className="general-container">
            <div className="header">
                <h2 className="header-text">Formulario para Depositar</h2>
                <p className="subtitle">
                    Deposite una cantidad de dinero a la cuenta seleccionada
                </p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="info-field">
                            <label>Fecha: {new Date().toLocaleDateString()}</label>
                        </div>
                        <div className="input-field">
                            <Input
                                field="amount"
                                label="Amount to Transfer"
                                value={formState.amount.value}
                                onChangeHandler={handleInputValueChange}
                                onBlurHandler={handleInputValidationOnBlur}
                                type="text"
                                showErrorMessage={formState.amount.showError}
                                validationMessage={formState.amount.validationMessage}
                            />
                        </div>
                        <div className="input-field">
                            <Input
                                field="toAccount"
                                label="To Account"
                                value={formState.toAccount.value}
                                onChangeHandler={handleInputValueChange}
                                onBlurHandler={handleInputValidationOnBlur}
                                type="text"
                                showErrorMessage={formState.toAccount.showError}
                                validationMessage={formState.toAccount.validationMessage}
                            />  
                        </div>
                    </div>
                    <div className="button-container">
                        <button type="submit" className="submit-button" disabled={isLoading}>
                            {isLoading ? "Depositando..." : "Depositar"}
                        </button>
                    </div>
                </form>
            </div>
            {error && <div className="error-message">{error}</div>}
        </div>
    )
}