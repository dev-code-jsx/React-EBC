import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { AuthPage } from "./pages/auth";
import { MyAccount } from "./pages/myAccount/MyAccount";
import { TestDashboard } from "./pages/dashboard/TestDashboard";
import { Transfer } from "./pages/transfer/Transfer";
import { Queries } from "./pages/queries/Queries";
import { RegisterPage } from "./pages/register/RegisterPage";
import { DashboardAdmin } from "./pages/dashboardAdmin/DashboardAdmin";
import { Help } from "./pages/help/Help";
const routes = [
  { path: "/*", element: <AuthPage /> },
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/help", element: <Help/>},
  { path:"/queries", element:<Queries/>},
  { path: "/dashboardTest", element: <TestDashboard /> },
  { path: "/dashboardAdmin", element: <DashboardAdmin /> },
]

export default routes;
