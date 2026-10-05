import {
  Landmark,
  FileBadge,
  Monitor,
  FileText,
  Printer,
  CreditCard,
  MessageCircle,
} from 'lucide-react'

import siteData from '../data/siteData'

const serviceIcons = [
  Landmark,
  FileBadge,
  Monitor,
  FileText,
  Printer,
  CreditCard,
  Monitor,
]

function ServicesPage() {
  return (
    <main className="services-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-content">

          <span className="section-label">
            OUR SERVICES
          </span>

          <h1>
            Services We
            <span> Provide.</span>
          </h1>

          <p>
            Explore the digital, government, education,
            employment, documentation, banking and other
            services available at {siteData.serviceCentreName}.
          </p>

        </div>
      </section>


      {/* Services */}
      <section className="services-page-content">

        <div className="services-page-container">

          {siteData.services.map((service, index) => {

            const Icon = serviceIcons[index] || Monitor

            return (
              <div
                className="service-category"
                key={service.title}
              >

                {/* Category Header */}
                <div className="service-category-header">

                  <div className="service-category-icon">
                    <Icon size={28} />
                  </div>

                  <div>

                    <h2>
                      {service.title}
                    </h2>

                    <p>
                      {service.description}
                    </p>

                  </div>

                </div>


                {/* Service Items */}
                <div className="service-items-grid">

                  {service.items.map((item) => (

                    <div
                      className="service-item"
                      key={item}
                    >

                      <div className="service-item-check">
                        ✓
                      </div>

                      <div>

                        <h3>
                          {item}
                        </h3>

                        <span>
                          Available at {siteData.businessName}
                        </span>

                      </div>

                    </div>

                  ))}

                </div>


                {/* Apply Online */}
                {service.formUrl && (
                  <a
                    href={service.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-apply-button"
                  >
                    Apply Online
                  </a>
                )}


                {/* Print & Document WhatsApp Banner */}
                {service.title === 'Print & Document Services' && (

                  <div className="document-whatsapp-banner">

                    <div className="document-banner-content">

                      <span className="document-banner-brand">
                        KAJAL DIGITAL SEVA KENDRA
                      </span>

                      <h3>
                        Send Your Documents
                        <span> on WhatsApp</span>
                      </h3>

                      <p>
                        Need printing, scanning, photocopy,
                        lamination or document services?
                        Send your files directly to us on WhatsApp.
                      </p>

                      <div className="document-banner-actions">

                        <a
                          href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(
                            `Hello, I want to send documents for Print & Document Services at ${siteData.serviceCentreName}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="document-whatsapp-button"
                        >
                          <MessageCircle size={19} />
                          Click Here to Send Documents
                        </a>

                      </div>

                      <small>
                        PDF • JPG • PNG • Documents
                      </small>

                    </div>


                    {/* QR Code */}
                    <div className="document-banner-qr">

                      <div className="qr-frame">

                        <img
                          src="/whatsapp-print-documents-qr.png"
                          alt="Scan QR code to send documents on WhatsApp"
                        />

                      </div>

                      <strong>
                        SCAN TO SEND
                      </strong>

                      <span>
                        Documents on WhatsApp
                      </span>

                    </div>

                  </div>

                )}


                {/* WhatsApp Enquiry */}
                {service.title !== 'Print & Document Services' && (
  <a
  href={`https://wa.me/${siteData.whatsapp}`}
  target="_blank"
  rel="noopener noreferrer"
  className="category-whatsapp"
  
>
  <MessageCircle size={18} />
  Enquire About This Category
</a>
)}

              </div>
            )
          })}

        </div>

      </section>


      {/* Bottom CTA */}
      <section className="services-bottom-cta">

        <div>

          <span className="section-label">
            NEED ASSISTANCE?
          </span>

          <h2>
            Not Sure Which Service
            <span> You Need?</span>
          </h2>

          <p>
            Contact {siteData.businessName} and tell us what
            you need help with. We'll guide you.
          </p>

        </div>


        <a
          href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(
            `Hello, I need help regarding a service at ${siteData.serviceCentreName}.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="services-cta-button"
        >

          <MessageCircle size={19} />

          Ask on WhatsApp

        </a>

      </section>

    </main>
  )
}

export default ServicesPage