import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { AuthPage } from "./pages/auth";
import { MyAccount } from "./pages/myAccount/MyAccount";
import { Transfer } from './pages/transfer/Transfer';
import { Queries } from './pages/queries/Queries';


const routes = [
  { path: "/*", element: <AuthPage /> },
  { path: "/dashboard", element: <DashboardPage /> },
]

export default routes;
