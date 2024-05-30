import { useState } from "react"
import './dashboardPage.css'
import logo from '../../assets/img/logo.png'

const navItems = ["home"];

export const DashboardPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <aside className={`sidebar ${isOpen ? 'open' : ""}`}>
      <div className="sidebar-inner">
      <header className="sidebar-header">
        <button
          type="button"
          className="sidebar-burger"
          onClick={()=> setIsOpen(!isOpen)}
        >
          <span>
            {isOpen ? "close" : "menu"}
          </span>
        </button>
        <img src={logo} className="sidebar-logo" />
      </header>
      <nav className="siderbar-menu">
        {navItems.map(item =>(
          <button className="sidebar-button">
            <span>{item}</span>
            <p>{item}</p>
          </button>
        ))}
      </nav>
      </div>

    </aside>
  )
}