import "./transferMForm.css"
import { Input } from "../Input"
import { useState } from "react"
export const TransferMForm = () => {
    const [formState, setFormState] = useState({
        amount: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "Amount to transfer is required",
        },
        description: {
            value: "",
            isValid: false,
            showError: false,
            validationMessage: "Description of the transfer is required",
        }
    })
    return (
        <div className="general-container">
            <div className="header">
                <h2 className="header-text">Formulario para Transferir</h2>
                <p className="subtitle">Transfiera una cantidad de dinero a la cuenta seleccionada</p>
            </div>
            <div>
                <form>
                    <div className="input-group">
                        <div className="select-field">
                            <label htmlFor="fromAccount">From Account</label>
                            <select id="fromAccount" name="fromAccount">
                                <option className="select-option">Cuenta 1</option>
                                <option className="select-option">Cuenta 2</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <Input
                                field="accountAmount"
                                label="My Amount"
                                value={""}
                                onChangeHandler={""}
                                onBlurHandler={""}
                                type="text"
                                showErrorMessage={""}
                                validationMessage={""}
                            />
                        </div>
                        <div className="select-field">
                            <label htmlFor="toAccount">To Account</label>
                            <select id="toAccount" name="toAccount">
                                <option className="select-option">Negros</option>
                                <option className="select-option">Negrotes</option>
                            </select>
                        </div>

                        <div className="input-field">
                            <Input
                                field="amount"
                                label="Amount to Transfer"
                                value={""}
                                onChangeHandler={""}
                                onBlurHandler={""}
                                type="text"
                                showErrorMessage={""}
                                validationMessage={""}
                            />
                        </div>
                        <div className="input-field">
                            <Input
                                field="description"
                                label="Description"
                                value={""}
                                onChangeHandler={""}
                                onBlurHandler={""}
                                type="text"
                                showErrorMessage={""}
                                validationMessage={""}
                            />
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="submit-button">Transferir</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
