import React from 'react';

export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea,
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field)
    }

    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field)
    }

    return (
        <>
            <div className="login-input-container">
                <label htmlFor={field} className="login-input-label">{label}</label>
                {textarea ? (
                    <textarea
                        id={field}
                        name={field}
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                        rows={5}
                        style={{ maxWidth: '400px' }}
                        className="login-input-field"
                    />
                ) : (
                    <input
                        id={field}
                        name={field}
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                        className="login-input-field"
                    />
                )}
                {showErrorMessage && (
                    <span className="login-error-message">
                        {validationMessage}
                    </span>
                )}
            </div>
        </>
    )
}
