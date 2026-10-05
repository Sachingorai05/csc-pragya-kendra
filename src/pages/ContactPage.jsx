import {
  Phone,
  MessageCircle,
  MapPin,
  Clock3,
  Send,
  CheckCircle,
} from 'lucide-react'

import { useState } from 'react'

import siteData from '../data/siteData'

function ContactPage() {
    const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <main className="contact-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-content">

          <span className="section-label">
            CONTACT US
          </span>

          <h1>
            We're Here to
            <span> Help.</span>
          </h1>

          <p>
            Have a question about our services? Get in touch
            with {siteData.serviceCentreName}.
          </p>

        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-page-content">

        <div className="contact-page-container">

          {/* Contact Information */}
          <div className="contact-details">

            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>
              Contact
              <span> Pragya Kendra.</span>
            </h2>

            <p className="contact-description">
              Reach us by phone or WhatsApp for service enquiries,
              online applications, documentation and other questions.
            </p>

            <div className="contact-detail-list">

              {/* Phone */}
              <a
                href={`tel:${siteData.phone}`}
                className="contact-detail-item"
              >
                <div className="contact-detail-icon">
                  <Phone size={21} />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>{siteData.displayPhone}</strong>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${siteData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail-item"
              >
                <div className="contact-detail-icon">
                  <MessageCircle size={21} />
                </div>

                <div>
                  <span>WhatsApp</span>
                  <strong>Chat with us</strong>
                </div>
              </a>

              {/* Address */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MapPin size={21} />
                </div>

                <div>
                  <span>Address</span>

                  <strong>
                    {siteData.address.line1}
                    <br />
                    {siteData.address.line2}
                    <br />
                    {siteData.address.city},{' '}
                    {siteData.address.district}
                    <br />
                    {siteData.address.state} -{' '}
                    {siteData.address.pincode}
                  </strong>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Clock3 size={21} />
                </div>

                <div>
                  <span>Opening Hours</span>

                  <strong>
                    {siteData.openingHours.weekdays}
                  </strong>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form-card">

            <h3>
              Send Us a Message
            </h3>

            <p>
              Fill in your details and we'll get back to you.
            </p>

           <form
  className="contact-form"
  action="https://formspree.io/f/mdekvrwn"
  method="POST"
  onSubmit={async (event) => {
    event.preventDefault()

    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        form.reset()
        setSubmitted(true)
      } else {
        alert(
          'Something went wrong. Please try again.'
        )
      }
    } catch (error) {
      alert(
        'Unable to send your message. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }}
>

  {submitted && (
  <div className="form-success">
    <CheckCircle size={22} />

    <div>
      <strong>Message Sent Successfully!</strong>
      <p>
        Thank you for contacting {siteData.businessName}.
        We'll get back to you soon.
      </p>
    </div>
  </div>
)}

              {/* Name */}
              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
  id="name"
  name="name"
  type="text"
  placeholder="Enter your name"
  required
/>

              </div>

              {/* Phone */}
              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
  id="phone"
  name="phone"
  type="tel"
  placeholder="Enter your phone number"
  required
/>

              </div>

              {/* Service */}
              <div className="form-group">

                <label htmlFor="service">
                  Service Required
                </label>

                <select
  id="service"
  name="service"
  defaultValue=""
>

                  <option value="" disabled>
                    Select a service
                  </option>

                  {siteData.services.map((service) => (
                    <option
                      key={service.title}
                      value={service.title}
                    >
                      {service.title}
                    </option>
                  ))}

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>

              {/* Message */}
              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
  id="message"
  name="message"
  rows="5"
  placeholder="Tell us what you need help with..."
  required
/>

              </div>

              {/* Submit */}
              <button
  type="submit"
  className="contact-submit"
  disabled={isSubmitting}
>
  {isSubmitting ? 'Sending...' : 'Send Message'}
  {!isSubmitting && <Send size={17} />}
</button>

            </form>

          </div>

        </div>

      </section>

      {/* WhatsApp CTA */}
      <section className="contact-whatsapp-section">

        <div className="contact-whatsapp-container">

          <div>

            <span className="section-label">
              QUICK CONTACT
            </span>

            <h2>
              Prefer WhatsApp?
            </h2>

            <p>
              Send us a message directly on WhatsApp for a
              quicker enquiry.
            </p>

          </div>

          <a
            href={`https://wa.me/${siteData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-large-btn"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>

        </div>

      </section>

      {/* Location Section */}
<section className="contact-location-section">

  <div className="contact-location-container">

    <div className="location-content">

      <span className="section-label">
        FIND US
      </span>

      <h2>
        Visit Our
        <span> Centre.</span>
      </h2>

      <p>
        Visit {siteData.serviceCentreName} for digital,
        government, documentation, banking and other
        services.
      </p>

      <div className="location-address">

        <div className="location-address-icon">
          <MapPin size={22} />
        </div>

        <div>
          <strong>{siteData.serviceCentreName}</strong>

          <p>
            {siteData.address.line1}
            <br />
            {siteData.address.line2}
            <br />
            {siteData.address.city},{' '}
            {siteData.address.district}
            <br />
            {siteData.address.state} -{' '}
            {siteData.address.pincode}
          </p>
        </div>

      </div>

      <div className="location-hours">

        <Clock3 size={19} />

        <div>
          <span>Opening Hours</span>
          <strong>
            {siteData.openingHours.weekdays}
          </strong>
        </div>

      </div>

      <a
        href={siteData.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="directions-button"
      >
        <MapPin size={18} />
        Get Directions
      </a>

    </div>

    <div className="location-map-card">

      <div className="map-placeholder">

        <MapPin size={42} />

        <h3>
          Kajal Digital Seva Kendra
        </h3>

        <p>
          Penada, Main Road Boram
        </p>

        <a
          href={siteData.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps
        </a>

      </div>

    </div>

  </div>

</section>

    </main>
  )
}

export default ContactPage