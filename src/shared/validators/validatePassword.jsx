export const validatePassword = (password) =>{
    const regex = /^\S{6,12}$/

    return regex.test(password)
}

export const passwordValidationMessage = 'Password must be 8 characters long and contain no spaces.'