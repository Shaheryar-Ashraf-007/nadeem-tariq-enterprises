import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import DivisionPage from './pages/DivisionPage'
import GlobalReach from './pages/GlobalReach'
import Quality from './pages/Quality'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    // Updated to use the new --font-body variable for Poppins
    <div className="flex min-h-screen flex-col [font-family:var(--font-body)]">
      <ScrollToTop />
      <Navbar />
      <main className="font-body flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/divisions/:key" element={<DivisionPage />} />
          <Route path="/global-reach" element={<GlobalReach />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}