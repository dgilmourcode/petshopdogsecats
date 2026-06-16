import { Routes, Route } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Services from "@/pages/Services"
import ServiceDetail from "@/pages/ServiceDetail"
import Contact from "@/pages/Contact"
import Products from "@/pages/Products"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-[100px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/servicos/:id" element={<ServiceDetail />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/produtos" element={<Products />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
