import { useState } from "react";
import "./dashboardPage.css";
import logo from "../../assets/img/logo.png";

import homeIcon from "../../assets/img/homeIcon.png";
import accountIcon from "../../assets/img/myAccountIcon.png";
import transerIcon from "../../assets/img/ranferIcon.png";
import queriesIcon from '../../assets/img/queriesIcon.png'
import servicesIcon from '../../assets/img/servicesIcon.png';
import historyIcon from '../../assets/img/historyIcon.png';
import currencyIcon from '../../assets/img/currencyIcon.png';
import helpIcon from '../../assets/img/helpIcon.png';

const navItems = [
  { id: "home", label: "Home", icon: homeIcon },
  { id: "my-account", label: "My Account", icon: accountIcon },
  { id: "transfer", label: "Transfer", icon: transerIcon },
  { id: "queries", label: "Queries", icon: queriesIcon},
  { id: "services", label: "Services", icon: servicesIcon},
  { id: "history", label: "History", icon: historyIcon},
  { id: "currency", label: "Currency", icon: currencyIcon},
  { id: "help", label: "Label", icon: helpIcon} 

]

export const DashboardPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
        </header>
        <nav className="sidebar-menu">
          {navItems.map((item) => (
            <button key={item.id} className="sidebar-button">
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
  );
};
