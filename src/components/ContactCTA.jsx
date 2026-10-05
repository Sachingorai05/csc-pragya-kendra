import {
  Phone,
  MessageCircle,
  MapPin,
  Clock3,
  ArrowRight,
} from 'lucide-react'

import siteData from '../data/siteData'

function ContactCTA() {
  return (
    <section className="contact-cta">

      <div className="contact-container">

        <div className="contact-content">

          <span className="section-label">
            NEED ASSISTANCE?
          </span>

          <h2>
            Let's Get Your
            <span> Work Done.</span>
          </h2>

          <p>
            Need help with an online application, document,
            digital service or another enquiry? Contact{' '}
            {siteData.businessName} and we'll help you get started.
          </p>

          <div className="contact-buttons">

            <a
              href={`tel:${siteData.phone}`}
              className="contact-btn contact-btn-primary"
            >
              <Phone size={19} />
              Call Now
            </a>

            <a
              href={`https://wa.me/${siteData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn contact-btn-whatsapp"
            >
              <MessageCircle size={19} />
              WhatsApp
            </a>

          </div>

        </div>

        <div className="contact-info">

          <div className="contact-info-item">

            <div className="contact-info-icon">
              <Phone size={20} />
            </div>

            <div>
              <span>Phone</span>

              <a href={`tel:${siteData.phone}`}>
                {siteData.displayPhone}
              </a>
            </div>

          </div>

          <div className="contact-info-item">

            <div className="contact-info-icon">
              <MapPin size={20} />
            </div>

            <div>
              <span>Location</span>

              <p>
                {siteData.address.line1}
                <br />
                {siteData.address.line2}
                <br />
                {siteData.address.city},{' '}
                {siteData.address.district}
              </p>
            </div>

          </div>

          <div className="contact-info-item">

            <div className="contact-info-icon">
              <Clock3 size={20} />
            </div>

            <div>
              <span>Opening Hours</span>

              <p>
                {siteData.openingHours.weekdays}
              </p>
            </div>

          </div>

          <a
            href={`https://wa.me/${siteData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-link"
          >
            Chat with us on WhatsApp
            <ArrowRight size={17} />
          </a>

        </div>

      </div>

    </section>
  )
}

export default ContactCTA