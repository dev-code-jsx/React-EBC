export const validateUsername = (username) => {
    return username.length >= 3 && username.length <= 12;
};

export const usernameValidationMessage = 'El nombre de usuario debe tener entre 3 y 12 caracteres';