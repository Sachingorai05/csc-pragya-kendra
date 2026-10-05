import {
  Copy,
  Check,
  MessageCircle,
  Smartphone,
  ShieldCheck,
} from 'lucide-react'

import { useState } from 'react'
import siteData from '../data/siteData'

function PaymentsPage() {
  const [copied, setCopied] = useState(false)

  const upiId = '8521836678@okbizaxis'

  const upiLink =
    `upi://pay?pa=${upiId}` +
    `&pn=${encodeURIComponent('Kajal Store Penada')}`

  const whatsappLink =
    `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(
      `Hello, I have completed a payment to ${siteData.businessName}. I am sending the payment screenshot for confirmation.`
    )}`

  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(upiId)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error('Unable to copy UPI ID:', error)
    }
  }

  return (
    <main className="payments-page">

      {/* Page Hero */}
      <section className="payment-hero">

        <div className="payment-hero-content">

          <span className="section-label">
            ONLINE PAYMENT
          </span>

          <h1>
            Pay <span>Online.</span>
          </h1>

          <p>
            Make your payment to {siteData.businessName}
            quickly and conveniently using any supported
            UPI app.
          </p>

        </div>

      </section>


      {/* Payment Section */}
      <section className="payment-section">

        <div className="payment-container">

          <div className="payment-card">

            {/* Left Content */}
            <div className="payment-info">

              <span className="payment-small-label">
                KAJAL DIGITAL SEVA KENDRA
              </span>

              <h2>
                Scan & Pay
              </h2>

              <p className="payment-description">
                Scan the QR code using Google Pay, PhonePe,
                Paytm, BHIM or any other supported UPI app.
              </p>


              {/* UPI ID */}
              <div className="upi-box">

                <span>
                  UPI ID
                </span>

                <div className="upi-value">

                  <strong>
                    {upiId}
                  </strong>

                  <button
                    type="button"
                    onClick={copyUpiId}
                    className="copy-upi-button"
                    aria-label="Copy UPI ID"
                  >

                    {copied ? (
                      <>
                        <Check size={17} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={17} />
                        Copy
                      </>
                    )}

                  </button>

                </div>

              </div>


              {/* UPI Button */}
              <a
                href={upiLink}
                className="upi-pay-button"
              >
                <Smartphone size={19} />
                Pay via UPI App
              </a>


              {/* WhatsApp */}
              <div className="payment-confirmation">

                <div className="payment-confirmation-icon">
                  <ShieldCheck size={20} />
                </div>

                <div>

                  <h3>
                    Payment completed?
                  </h3>

                  <p>
                    Send your payment screenshot on
                    WhatsApp for confirmation.
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="payment-whatsapp-button"
                  >
                    <MessageCircle size={17} />
                    Send Screenshot on WhatsApp
                  </a>

                </div>

              </div>

            </div>


            {/* QR */}
            <div className="payment-qr-section">

              <div className="payment-qr-card">

                <img
                  src="/upi-payment-qr.png"
                  alt="Kajal Store Penada UPI payment QR code"
                  className="payment-qr"
                />

              </div>

              <strong>
                SCAN & PAY
              </strong>

              <span>
                UPI payments accepted
              </span>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default PaymentsPage