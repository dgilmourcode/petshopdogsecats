import { useParams, Link } from "react-router-dom"
import { ChevronLeft, Check, Clock, DollarSign, Camera } from "lucide-react"
import { servicesData } from "@/data/services"
import { Scissors, Stethoscope, Hotel, BookOpen, Bone, ShoppingBag } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Scissors,
  Stethoscope,
  Hotel,
  BookOpen,
  Bone,
  ShoppingBag,
}

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>()
  const service = servicesData.find((s) => s.id === id)

  if (!service) {
    return (
      <div className="pt-16 md:pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Serviço não encontrado</h1>
          <p className="text-gray-500 mb-8">O serviço que você procura não existe ou foi removido.</p>
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full px-8 h-11 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Voltar para Serviços
          </Link>
        </div>
      </div>
    )
  }

  const Icon = iconMap[service.icon] || ShoppingBag

  return (
    <div>
      <section className="pt-16 md:pt-24 pb-12 bg-linear-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-amber-600 transition-colors mb-6"
          >
            <ChevronLeft className="h-4 w-4" />
            Voltar para Serviços
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-sm text-sm font-medium text-amber-700">
                <Icon className="h-4 w-4" />
                {service.title}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.longDescription}
              </p>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-amber-600 font-semibold text-lg">
                  <DollarSign className="h-5 w-5" />
                  {service.price}
                </span>
              </div>
              <a
                href={`https://wa.me/5586994936797?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-sm px-8 h-12 transition-colors text-base"
              >
                Contratar Serviço
              </a>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src={service.photos[0]}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-amber-500" />
                  Como funciona
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.howItWorks}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5 text-amber-500" />
                  O que inclui
                </h2>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="w-5 h-5 rounded-sm bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-amber-600" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Camera className="h-5 w-5 text-amber-500" />
                Galeria
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {service.photos.map((photo, i) => (
                  <div
                    key={i}
                    className={`aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden border border-gray-200 ${
                      i === 0 ? "row-span-2" : ""
                    }`}
                  >
                    <img
                      src={photo}
                      alt={`${service.title} - Foto ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm border border-gray-100 p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Interessado neste serviço?
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Entre em contato conosco para agendar ou solicitar um
                  orçamento personalizado. Respondemos em até 24 horas úteis.
                </p>
                <a
                  href={`https://wa.me/5586994936797?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-sm px-8 h-12 transition-colors"
                >
                  Contratar Serviço
                </a>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "Parcele em até 12x", desc: "No cartão de crédito" },
                  { label: "Desconto à vista", desc: "5% OFF no dinheiro ou Pix" },
                  { label: "Agende online", desc: "Sem sair de casa" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex-1 min-w-[140px] p-4 bg-gray-50 rounded-sm border border-gray-100 text-center"
                  >
                    <p className="text-sm font-semibold text-gray-900">
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Outros serviços
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((s) => {
                const ItemIcon = iconMap[s.icon] || ShoppingBag
                return (
                  <Link
                    key={s.id}
                    to={`/servicos/${s.id}`}
                    className="group p-6 rounded-sm border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-amber-100 rounded-sm flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                      <ItemIcon className="h-5 w-5 text-amber-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {s.shortDesc}
                    </p>
                  </Link>
                )
              })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-sm px-10 h-12 transition-all text-base shadow-sm hover:shadow-md hover:scale-105 active:scale-100"
            >
              <ChevronLeft className="h-5 w-5" />
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
