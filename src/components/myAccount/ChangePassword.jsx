import { useState } from 'react';

import {
    passwordConfirmationMessage,
    validatePassword,
    passwordValidationMessage
} from '../../shared/validators';

import { Input } from '../Input';

import { useChangePassword } from '../../shared/hooks';

const inputs = [
    {
        field: 'password',
        label: 'Password',
        validationMessage: passwordValidationMessage,
        type: 'password'
    },
    {
        field: 'newPassword',
        label: 'New Password',
        validationMessage: passwordConfirmationMessage,
        type: 'password'
    },
]

export const ChangePasswordForm = () => {
    const [formState, setFormState] = useState({
        password: {
            isValid: false,
            showError: false,
            value: ''
        },
        newPassword: {
            isValid: false,
            showError: false,
            value: ''
        }
    })

    const { changePassword } = useChangePassword()

    const handelInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value: value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = validatePassword(value)

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const isSubmitButtonDisabled = !formState.password.isValid || !formState.newPassword.isValid

    const handleFormSubmit = (event) => {
        event.preventDefault()

        changePassword(formState.password.value, formState.newPassword.value)
    }

    retunr(
        <form className="pass-form">
            {inputs.map((input) => (
                <Input
                    key={input.field}
                    field={input.field}
                    label={input.label}
                    value={formState[input.field].value}
                    onBlurHandler={handleInputValidationOnBlur}
                    onChangeHandler={handelInputValueChange}
                    showErrorMessage={formState[input.field].showError}
                    validationMessage={input.validationMessage}
                    type={input.type}
                />
            ))}
            <button onClick={handleFormSubmit} disabled={isSubmitButtonDisabled}>
                Update Password
            </button>
        </form>
    )
}