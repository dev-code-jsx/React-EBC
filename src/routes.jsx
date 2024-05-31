import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { AuthPage } from "./pages/auth";
import { RegisterPage } from "./pages/register/RegisterPage";

const routes = [
    {path: '/*', element:<AuthPage/>},
    {path: '/dashboard', element: <DashboardPage/>},
    {path: '/register', element: <RegisterPage/>}
]

export default routes