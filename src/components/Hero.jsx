import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import siteData from '../data/siteData'
import logo from '../../public/kajal-store-logo.webp'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <div className="hero-badge">
            <CheckCircle size={16} />
            Trusted Digital Service Centre
          </div>

          <h1>
            Digital Services,
            <span> Made Simple.</span>
          </h1>

          <p>
            Welcome to {siteData.serviceCentreName}.
            Get assistance with online applications,
            documentation, government-related services,
            printing, scanning and other digital services.
          </p>

          <div className="hero-buttons">

            <Link to="/services" className="btn btn-primary">
              Explore Services
              <ArrowRight size={18} />
            </Link>

            <a
              href={`https://wa.me/${siteData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={19} />
              WhatsApp Us
            </a>

          </div>

          <div className="hero-stats">

            <div className="stat">
              <strong>4+</strong>
              <span>Service Categories</span>
            </div>

            <div className="stat">
              <strong>8 AM</strong>
              <span>Opening Time</span>
            </div>

            <div className="stat">
              <strong>8 PM</strong>
              <span>Closing Time</span>
            </div>

          </div>

        </div>

        {/* Right Visual */}
        <div className="hero-visual">

          <div className="hero-logo-card">

            <div className="hero-logo-glow"></div>

            <img
              src={logo}
              alt={`${siteData.businessName} - ${siteData.serviceCentreName}`}
              className="hero-logo"
            />

            <div className="hero-logo-info">
              <h3>{siteData.businessName}</h3>
              <p>{siteData.serviceCentreName}</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero