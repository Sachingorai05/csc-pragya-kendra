import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowUp,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import siteData from '../data/siteData'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">

            <Link to="/" className="footer-logo">

              <img
  src="/kajal-store-logo.webp"
  alt={`${siteData.businessName} Logo`}
  className="footer-logo-image"
/>

              <div>
                <h3>{siteData.serviceCentreName}</h3>
                <span>{siteData.businessName}</span>
              </div>

            </Link>

            <p>
              Your local partner for digital, online,
              documentation and government-related services.
            </p>

            <a
              href={`https://wa.me/${siteData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
            </a>

          </div>

          {/* Quick Links */}
          <div className="footer-column">

            <h4>Quick Links</h4>

            {siteData.navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
              >
                {item.name}
              </Link>
            ))}

          </div>

          {/* Services */}
          <div className="footer-column">

            <h4>Services</h4>

            <Link to="/services">
              Government Services
            </Link>

            <Link to="/services">
              Certificates
            </Link>

            <Link to="/services">
              Online Applications
            </Link>

            <Link to="/services">
              Printing & Scanning
            </Link>

          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">

            <h4>Contact</h4>

            <a href={`tel:${siteData.phone}`}>
              <Phone size={16} />
              {siteData.displayPhone}
            </a>

            <div>
              <MapPin size={16} />

              <span>
                {siteData.address.line1}
                <br />
                {siteData.address.line2}
                <br />
                {siteData.address.city},
                {` ${siteData.address.district}`}
                <br />
                {siteData.address.state} -
                {` ${siteData.address.pincode}`}
              </span>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()}{' '}
            {siteData.businessName}.
            All rights reserved.
          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>

    </footer>
  )
}

export default Footer