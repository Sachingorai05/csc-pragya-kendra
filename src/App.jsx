import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import WhatsAppButton from './components/WhatsAppButton'
import PaymentsPage from './pages/PaymentsPage'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/services"
          element={<ServicesPage />}
        />

<Route 
path="/payments" 
element={<PaymentsPage />} 
/>

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

      </Routes>

      <Footer />
      <WhatsAppButton />

    </BrowserRouter>
  )
}

export default App