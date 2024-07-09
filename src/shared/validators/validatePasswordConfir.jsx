export const validatePasswordConfir = (password, confPassword) => {
    return password === confPassword
}

export const passwordConfirmationMessage = 'Passwords do not match.'