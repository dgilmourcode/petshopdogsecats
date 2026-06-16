import { Link } from "react-router-dom"
import { PawPrint, Mail, Globe, Phone } from "lucide-react"

const socialLinks = [
  {
    href: "https://www.instagram.com/dgilmourcode/",
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/dgilmourcode/",
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/dgilmourcode/",
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-4">
            <PawPrint className="h-7 w-7 text-amber-500" />
            <span className="text-xl font-bold text-gray-900">
              PetShop <span className="text-amber-500">Dogs&amp;Cats</span>
            </span>
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
            Cuidando do seu pet com amor e dedicação. Produtos e serviços de
            qualidade para o bem-estar do seu melhor amigo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 mb-12">
          <div className="text-center">
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Início" },
                { to: "/produtos", label: "Produtos" },
                { to: "/servicos", label: "Serviços" },
                { to: "/sobre", label: "Sobre" },
                { to: "/contato", label: "Contato" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-500 hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">
              Serviços
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Banho e Tosa", to: "/servicos/banho-e-tosa" },
                { label: "Consultas Veterinárias", to: "/servicos/consultas-veterinarias" },
                { label: "Hotel para Pets", to: "/servicos/hotel-para-pets" },
                { label: "Adestramento", to: "/servicos/adestramento" },
              ].map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    className="text-sm text-gray-500 hover:text-amber-500 transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center gap-2">
                <Globe className="h-4 w-4 text-amber-500 shrink-0" />
                <a
                  href="https://dgilmourcode.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-amber-500 transition-colors"
                >
                  dgilmourcode.vercel.app
                </a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <span className="text-sm text-gray-500">(86) 99493-6797</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <span className="text-sm text-gray-500">
                  dgilmourcode@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-300 transition-all"
                aria-label={s.label}
              >
                {s.svg}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PetShop Dogs&amp;Cats. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
