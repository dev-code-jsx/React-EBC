import { useState } from "react";
import "./dashboardAdmin.css";
import logo from "../../assets/img/logo.png";

import homeIcon from "../../assets/img/homeIcon.png";
import accountIcon from "../../assets/img/accounts.png";
import transerIcon from "../../assets/img/ranferIcon.png";
import registerIcon from "../../assets/img/register.jpg";
import helpIcon from '../../assets/img/helpIcon.png';
import serviceIcon from '../../assets/img/servicesIcon.png'

import { Help } from "../help/Help";
import { Register } from "../../components/register/Register";
import { ServiciosAdminPage } from "../service/ServiceAdminPage";
import { AccountAdmin } from "../accountAdmin";
import { DepositForm } from "../../components/deposit/DepositForm";
const navItems = [
  { id: "home", label: "Home", icon: homeIcon },
  { id: "accounts", label: "Accounts", icon: accountIcon },
  { id: "register", label: "Register", icon: registerIcon },
  { id: "help", label: "Help", icon: helpIcon },
  { id: "services", label: "Services", icon: serviceIcon},
  { id: "deposit", label: "Deposit", icon: accountIcon}
];

const componentMap = {
  "home": <div>Home</div>,
  "accounts": <AccountAdmin />,
  "register": <Register />,
  "help": <Help />,
  "services": <ServiciosAdminPage />,
  "deposit": <DepositForm />
};

export const DashboardAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("home");

  const handleNavClick = (id) => {
    if (id === "home") {
      window.location.reload();
    } else {
      setActiveComponent(id);
    }
  };

  return (
    <div className="dashboard">
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-inner">
          <header className="sidebar-header">
            <button
              type="button"
              className="sidebar-burger"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>{isOpen ? "×" : "☰"}</span>
            </button>
            <img src={logo} className="sidebar-logo" alt="logo" />
            <p>Easy Bank Code</p>
          </header>
          <nav className="sidebar-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`sidebar-button ${activeComponent === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <img
                  src={item.icon}
                  alt={`${item.label} icon`}
                  className="sidebar-icon"
                />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>
      <main className="content">
        {componentMap[activeComponent]}
      </main>
    </div>
  );
};
