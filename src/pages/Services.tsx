import { Link } from "react-router-dom";
import {
  Scissors,
  Stethoscope,
  Hotel,
  BookOpen,
  Bone,
  ShoppingBag,
} from "lucide-react";
import Gallery from "@/components/Gallery";

const servicePhotos = [
  {
    src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&q=80",
    alt: "Banho e tosa",
  },
  {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop&q=80",
    alt: "Consultas veterinárias",
  },
  {
    src: "https://images.unsplash.com/photo-1779126316993-76f6ce9cd8ff?w=400&h=300&fit=crop&q=80",
    alt: "Hotel para pets",
  },
  {
    src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop&q=80",
    alt: "Adestramento",
  },
  {
    src: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&h=300&fit=crop&q=80",
    alt: "Nutrição animal",
  },
  {
    src: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=300&fit=crop&q=80",
    alt: "Pet shop",
  },
  {
    src: "https://images.unsplash.com/photo-1543721691-b328903d3d9d?w=400&h=300&fit=crop&q=80",
    alt: "Hospedagem animal",
  },
];

const services = [
  {
    icon: Scissors,
    title: "Banho e Tosa",
    desc: "Serviço completo de higiene com produtos hipoalergênicos. Tosas estilosas e confortáveis para todas as raças.",
    features: [
      "Banho premium",
      "Tosa completa",
      "Hidratação",
      "Corte de unhas",
    ],
  },
  {
    icon: Stethoscope,
    title: "Consultas Veterinárias",
    desc: "Atendimento clínico geral com veterinários experientes. Prevenção e tratamento para seu pet.",
    features: [
      "Check-up geral",
      "Vacinação",
      "Exames laboratoriais",
      "Emergência 24h",
    ],
  },
  {
    icon: Hotel,
    title: "Hotel para Pets",
    desc: "Hospedagem com todo conforto e segurança. Seu pet relaxando enquanto você viaja.",
    features: [
      "Suítes individuais",
      "Área de lazer",
      "Monitoramento 24h",
      "Alimentação inclusa",
    ],
  },
  {
    icon: BookOpen,
    title: "Adestramento",
    desc: "Treinamento profissional com técnicas positivas. Comportamento e obediência para uma convivência harmoniosa.",
    features: [
      "Adestramento básico",
      "Correção comportamental",
      "Socialização",
      "Aulas individuais",
    ],
  },
  {
    icon: Bone,
    title: "Nutrição Animal",
    desc: "Consultoria nutricional personalizada. A alimentação ideal para cada fase da vida do seu pet.",
    features: [
      "Rações premium",
      "Dietas especiais",
      "Suplementação",
      "Petiscos naturais",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Pet Shop",
    desc: "Variedade de produtos: brinquedos, acessórios, roupas e muito mais para seu pet.",
    features: [
      "Brinquedos interativos",
      "Roupas e acessórios",
      "Camas e casinhas",
      "Coleiras e guias",
    ],
  },
];

export default function Services() {
  return (
    <div>
      <section className="pt-16 md:pt-24 pb-20 bg-linear-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-sm font-medium text-amber-700 mb-6">
            <Scissors className="h-4 w-4" />
            Nossos Serviços
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Tudo que seu pet precisa
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Do banho ao check-up, oferecemos cuidados completos para a saúde e
            felicidade do seu melhor amigo.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-sm border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-200 transition-colors">
                  <service.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery
        images={servicePhotos}
        title="Nossos serviços em ação"
        subtitle="Veja como cuidamos do seu pet com dedicação e carinho."
        carousel
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Formas de pagamento
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Parcele em até 12x ou pague à vista com desconto.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              {
                label: "Visa",
                svg: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 md:h-10 w-auto"
                    fill="currentColor"
                  >
                    <path d="M9.5 4.5l-2.2 6.5h2.2l2.2-6.5H9.5z" />
                    <path d="M17.5 7.2c-.7-.3-1.8-.6-3.2-.6-3.5 0-6 1.8-6 4.3 0 1.9 1.7 2.9 3 3.5 1.4.6 1.8 1 1.8 1.5 0 .8-.9 1.2-1.7 1.2-1.1 0-1.7-.2-2.6-.5l-.4-.2-.4 2.3c.8.3 2.3.6 3.8.6 3.6 0 6-1.7 6-4.4 0-1.5-.9-2.6-2.8-3.5-1.2-.5-1.9-.9-1.9-1.4 0-.5.6-1 1.9-1 1.1 0 1.9.2 2.5.4l.3.1.4-2.2z" />
                    <path d="M22.5 5.3l-1.5 8.7h1.9l1.5-8.7h-1.9z" />
                    <path
                      d="M20.7 2.8c-1.7 0-2.8.8-3.4 2.3l1.8.7c.4-.7.8-1 1.6-1 .5 0 1.2.2 1.2.7 0 .4-.3.6-.8 1-.6.5-1.4 1.1-2 1.9-.6.8-.9 1.7-.9 2.7 0 1.2.8 2 2.1 2 1 0 1.8-.5 2.3-.9l.1 2h2l1.5-8.7h-1.6l-.3 1.7c-.4-.5-1.1-.9-2.1-.9-1.3 0-2.1.7-2.1 1.7 0 .5.2.9.6 1.2.2.2.5.4.9.6.3.1.7.3 1.1.5.7.3 1.3.7 1.8 1.2.4.5.7 1.1.7 1.9 0 1.7-1.4 2.9-3.5 2.9-1.5 0-2.8-.5-3.7-1.2l.5-2.4c.7.6 1.6 1 2.6 1 .9 0 1.4-.4 1.4-1s-.5-1-1.2-1.4c-.3-.1-.7-.3-1.2-.5-1.8-.8-2.9-1.9-2.9-3.6 0-1.7 1.4-3.1 3.8-3.1 1.4 0 2.4.4 3.1.9l-.7 2.5z"
                      opacity="0.3"
                    />
                  </svg>
                ),
              },
              {
                label: "Mastercard",
                svg: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 md:h-10 w-auto"
                    fill="currentColor"
                    opacity="0.6"
                  >
                    <circle cx="9" cy="12" r="7" />
                    <circle cx="15" cy="12" r="7" opacity="0.5" />
                  </svg>
                ),
              },
              {
                label: "Elo",
                svg: (
                  <svg
                    viewBox="0 0 32 24"
                    className="h-8 md:h-10 w-auto"
                    fill="currentColor"
                    opacity="0.7"
                  >
                    <rect
                      x="2"
                      y="4"
                      width="28"
                      height="16"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <text
                      x="16"
                      y="15.5"
                      textAnchor="middle"
                      fontSize="7"
                      fontWeight="bold"
                      fill="currentColor"
                    >
                      ELO
                    </text>
                  </svg>
                ),
              },
              {
                label: "Pix",
                svg: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 md:h-10 w-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    opacity="0.7"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      d="M8.5 12l2.5 2.5 4.5-4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                label: "Boleto",
                svg: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 md:h-10 w-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    opacity="0.7"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <line x1="7" y1="9" x2="7" y2="15" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                    <line x1="17" y1="9" x2="17" y2="15" />
                  </svg>
                ),
              },
            ].map((pm) => (
              <div key={pm.label} className="flex flex-col items-center gap-1">
                {pm.svg}
                <span className="text-xs text-gray-400 font-medium">
                  {pm.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Preços especiais para pacotes
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">
              Contrate um combo de serviços e ganhe descontos exclusivos.
              Consulte nossas ofertas!
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full px-8 h-11 transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
