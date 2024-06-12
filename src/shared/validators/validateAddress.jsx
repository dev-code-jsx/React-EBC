export const validateAddress = (address) => {
    return address.length <= 200;
};

export const addressValidationMessage = 'La dirección debe tener hasta 200 caracteres';