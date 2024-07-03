export const validateDPI = (dpi) => {
    return /^\d{1,13}$/.test(dpi);
};

export const dpiValidationMessage = 'El DPI debe tener hasta 13 dígitos';