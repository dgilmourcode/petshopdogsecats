import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, PawPrint } from "lucide-react"

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <PawPrint className="h-6 w-6 text-amber-500 group-hover:text-amber-600 transition-colors" />
            <span className="text-lg font-semibold text-gray-900">
              PetShop{" "}
              <span className="text-amber-500">Dogs&amp;Cats</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  pathname === link.href
                    ? "text-amber-500"
                    : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`block text-sm font-medium transition-colors hover:text-amber-500 ${
                  pathname === link.href
                    ? "text-amber-500"
                    : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
