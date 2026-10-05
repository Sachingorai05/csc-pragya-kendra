import {
  Landmark,
  FileBadge,
  Monitor,
  Printer,
  CreditCard,
  ArrowRight,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import siteData from '../data/siteData'

const serviceIcons = [
  Landmark,
  FileBadge,
  Monitor,
  Monitor,
  Monitor,
  Printer,
  CreditCard,
]

function Services() {
  return (
    <section className="services-section">
      <div className="services-container">

        <div className="section-heading">
          <span className="section-label">OUR SERVICES</span>

          <h2>
            Services We
            <span> Provide.</span>
          </h2>

          <p>
            Get convenient assistance for government services,
            online applications, documentation, printing,
            banking and digital payments.
          </p>
        </div>

        <div className="services-grid">
          {siteData.services.map((service, index) => {
            const Icon = serviceIcons[index] || Monitor

            return (
              <div className="service-card" key={service.title}>

                <div className="service-icon">
                  <Icon size={25} />
                </div>

                <h3>{service.title}</h3>

                <p className="service-description">
                  {service.description}
                </p>

                <ul className="service-list">
                  {service.items.map((item) => (
                    <li key={item}>
                      <span className="service-check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(
                    `Hello, I want to enquire about ${service.title} at ${siteData.serviceCentreName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-enquire"
                >
                  Enquire on WhatsApp
                  <ArrowRight size={16} />
                </a>

              </div>
            )
          })}
        </div>

        <div className="services-view-all">
          <Link to="/services" className="view-all-btn">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Services