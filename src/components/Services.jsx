import { Link } from 'react-router-dom'

const services = [
  {
    icon: '✓',
    title: 'Government & ID Services',
    description:
      'Assistance with various government and identity-related online services.',
  },
  {
    icon: '▣',
    title: 'Certificates & Documents',
    description:
      'Online assistance for certificates, documents and other applications.',
  },
  {
    icon: '◎',
    title: 'Online Applications',
    description:
      'Apply for government schemes, forms, registrations and online services.',
  },
  {
    icon: '₹',
    title: 'Banking & Digital Payments',
    description:
      'Digital payment assistance and selected banking-related services.',
  },
  {
    icon: '▤',
    title: 'Printing & Scanning',
    description:
      'Print, scan, photocopy and document formatting services.',
  },
  {
    icon: '▱',
    title: 'Education & Other Services',
    description:
      'Online forms, exam applications, registrations and other digital services.',
  },
]

function Services() {
  return (
    <section className="services-section" id="services">

      <div className="section-container">

        <div className="section-heading">

          <span className="section-label">
            OUR SERVICES
          </span>

          <h2>
            Digital Services Made
            <span> Simple.</span>
          </h2>

          <p>
            Get assistance with essential online, government and
            digital services from one convenient place.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service) => (
            <div
              className="service-card"
              key={service.title}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link
                to="/services"
                className="service-link"
              >
                Learn More →
              </Link>

            </div>
          ))}

        </div>

        <div className="services-bottom">

          <Link
            to="/services"
            className="view-all-services"
          >
            View All Services →
          </Link>

        </div>

      </div>

    </section>
  )
}

export default Services