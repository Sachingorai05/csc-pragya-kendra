import { NavLink } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import siteData from '../data/siteData'
import logo from '../../public/kajal-store-logo.webp'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Brand */}
        <NavLink
          to="/"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt={`${siteData.businessName} Logo`}
            className="navbar-logo"
          />

          <div className="logo-text">
            <h2>{siteData.serviceCentreName}</h2>
            <span>{siteData.businessName}</span>
          </div>
        </NavLink>

        {/* Navigation */}
        <nav
          className={
            menuOpen
              ? 'nav-links active'
              : 'nav-links'
          }
        >
          {siteData.navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${siteData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-whatsapp"
            onClick={() => setMenuOpen(false)}
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>
        </nav>

        {/* Mobile Menu */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>
    </header>
  )
}

export default Navbar