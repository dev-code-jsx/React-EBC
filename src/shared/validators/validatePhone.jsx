export const validatePhone = (phone) => {
    return /^[1-9]\d{7}$/.test(phone);
};

export const phoneValidationMessage = 'El teléfono debe tener 8 dígitos y no puede empezar con 0';