import { Link } from "react-router-dom"
import { PawPrint, Mail, MapPin, Phone } from "lucide-react"

const socialLinks = [
  {
    href: "https://instagram.com/petshopdogsandcats",
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
    href: "https://facebook.com/petshopdogsandcats",
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://youtube.com/@petshopdogsandcats",
    label: "YouTube",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <PawPrint className="h-5 w-5 text-amber-500" />
              <span className="text-base font-semibold text-gray-900">
                PetShop{" "}
                <span className="text-amber-500">Dogs&amp;Cats</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Cuidando do seu pet com amor e dedicação. Produtos e serviços de
              qualidade para o bem-estar do seu melhor amigo.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
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

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Serviços
            </h3>
            <ul className="space-y-2">
              {[
                "Banho e Tosa",
                "Consultas Veterinárias",
                "Hotel para Pets",
                "Adestramento",
              ].map((s) => (
                <li key={s}>
                  <span className="text-sm text-gray-500">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-500">
                  Rua dos Animais, 123
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <span className="text-sm text-gray-500">(11) 99999-8888</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <span className="text-sm text-gray-500">
                  contato@petshopdogsandcats.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 order-2 sm:order-1">
            &copy; {new Date().getFullYear()} PetShop Dogs&amp;Cats. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-3 order-1 sm:order-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label={s.label}
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
