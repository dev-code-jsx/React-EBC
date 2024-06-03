import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { AuthPage } from "./pages/auth";
import { TestDashboard } from "./pages/dashboard/TestDashboard";
const routes = [
    {path: '/*', element:<AuthPage/>},
    {path: '/dashboard', element: <DashboardPage/>},
    {path:'/dashboardTest', element: <TestDashboard/>}
]

export default routes