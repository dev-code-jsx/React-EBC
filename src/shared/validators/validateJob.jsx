export const validateJob = (job) => {
    return job.length <= 100;
};

export const jobValidationMessage = 'El trabajo debe tener hasta 100 caracteres';