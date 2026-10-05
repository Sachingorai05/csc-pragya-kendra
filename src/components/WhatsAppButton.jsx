import { MessageCircle } from 'lucide-react'
import siteData from '../data/siteData'

function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hello, I want to enquire about the services at ${siteData.serviceCentreName}.`
  )

  return (
    <a
      href={`https://wa.me/${siteData.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />

      <span>
        WhatsApp
      </span>
    </a>
  )
}

export default WhatsAppButton