import {
  ShieldCheck,
  UserRound,
  MapPin,
  Clock3,
  MessageCircle,
} from 'lucide-react'

import siteData from '../data/siteData'

function AboutPage() {
  return (
    <main className="about-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <span className="section-label">ABOUT US</span>

          <h1>
            About
            <span> {siteData.serviceCentreName}.</span>
          </h1>

          <p>
            Your local partner for digital, government,
            documentation, banking and online services.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-page-content">
        <div className="about-page-container">

          <div className="about-main-card">

            <div className="about-main-content">
              <span className="section-label">
                KAJAL STORE
              </span>

              <h2>
                Making Digital Services
                <span> Easier for You.</span>
              </h2>

              <p>
                {siteData.serviceCentreName} is a local digital
                service centre operated under {siteData.businessName}.
                We provide assistance with government-related
                services, online applications, certificates,
                document services, banking and digital payments.
              </p>

              <p>
                Our goal is to make commonly needed digital and
                documentation services more convenient and
                accessible for people in the local community.
              </p>

              <a
                href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(
                  `Hello, I want to know more about the services at ${siteData.serviceCentreName}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="about-whatsapp-btn"
              >
                <MessageCircle size={18} />
                Contact Us on WhatsApp
              </a>
            </div>

            <div className="about-info-card">

              <div className="about-info-item">
                <div className="about-info-icon">
                  <UserRound size={21} />
                </div>

                <div>
                  <span>Owner</span>
                  <strong>{siteData.owner}</strong>
                </div>
              </div>

              <div className="about-info-item">
                <div className="about-info-icon">
                  <MapPin size={21} />
                </div>

                <div>
                  <span>Location</span>
                  <strong>
                    {siteData.address.city}, {siteData.address.state}
                  </strong>
                </div>
              </div>

              <div className="about-info-item">
                <div className="about-info-icon">
                  <Clock3 size={21} />
                </div>

                <div>
                  <span>Opening Hours</span>
                  <strong>{siteData.openingHours.weekdays}</strong>
                </div>
              </div>

            </div>

          </div>

          {/* Why Choose Us */}
          <div className="about-values">

            <div className="section-heading">
              <span className="section-label">
                WHY KAJAL STORE
              </span>

              <h2>
                A Convenient Place for
                <span> Digital Services.</span>
              </h2>
            </div>

            <div className="about-values-grid">

              <div className="about-value-card">
                <div className="about-value-icon">
                  <ShieldCheck size={25} />
                </div>

                <h3>Reliable Assistance</h3>

                <p>
                  Get personal assistance with forms,
                  documents and digital services.
                </p>
              </div>

              <div className="about-value-card">
                <div className="about-value-icon">
                  <UserRound size={25} />
                </div>

                <h3>Personal Support</h3>

                <p>
                  We help you understand the process and
                  assist you with your service requirements.
                </p>
              </div>

              <div className="about-value-card">
                <div className="about-value-icon">
                  <MapPin size={25} />
                </div>

                <h3>Local & Convenient</h3>

                <p>
                  Access multiple digital and documentation
                  services at your local service centre.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}

export default AboutPage