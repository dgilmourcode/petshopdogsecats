import { Link } from "react-router-dom"
import {
  Scissors,
  Stethoscope,
  Hotel,
  BookOpen,
  Bone,
  ShoppingBag,
} from "lucide-react"
import Gallery from "@/components/Gallery"

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
]

const services = [
  {
    icon: Scissors,
    title: "Banho e Tosa",
    desc: "Serviço completo de higiene com produtos hipoalergênicos. Tosas estilosas e confortáveis para todas as raças.",
    features: ["Banho premium", "Tosa completa", "Hidratação", "Corte de unhas"],
  },
  {
    icon: Stethoscope,
    title: "Consultas Veterinárias",
    desc: "Atendimento clínico geral com veterinários experientes. Prevenção e tratamento para seu pet.",
    features: ["Check-up geral", "Vacinação", "Exames laboratoriais", "Emergência 24h"],
  },
  {
    icon: Hotel,
    title: "Hotel para Pets",
    desc: "Hospedagem com todo conforto e segurança. Seu pet relaxando enquanto você viaja.",
    features: ["Suítes individuais", "Área de lazer", "Monitoramento 24h", "Alimentação inclusa"],
  },
  {
    icon: BookOpen,
    title: "Adestramento",
    desc: "Treinamento profissional com técnicas positivas. Comportamento e obediência para uma convivência harmoniosa.",
    features: ["Adestramento básico", "Correção comportamental", "Socialização", "Aulas individuais"],
  },
  {
    icon: Bone,
    title: "Nutrição Animal",
    desc: "Consultoria nutricional personalizada. A alimentação ideal para cada fase da vida do seu pet.",
    features: ["Rações premium", "Dietas especiais", "Suplementação", "Petiscos naturais"],
  },
  {
    icon: ShoppingBag,
    title: "Pet Shop",
    desc: "Variedade de produtos: brinquedos, acessórios, roupas e muito mais para seu pet.",
    features: ["Brinquedos interativos", "Roupas e acessórios", "Camas e casinhas", "Coleiras e guias"],
  },
]

export default function Services() {
  return (
    <div>
      <section className="pt-16 md:pt-24 pb-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
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
                className="group p-8 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
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
  )
}
