import toast from 'react-hot-toast';
import { changePassword as changePasswordRequest } from '../../services';

export const useChangePassword = () => {
    const changePassword = async (password, newPassword) => {

        const responseData = await changePasswordRequest({ password, newPassword });

        if (responseData.error) {
            return toast.error(responseData.e?.response?.data || 'An error occurred while changing password. Please try again later.')
        }

        toast.success('Password changed successfully.')
    }
    return { changePassword }
}