import { useState, useEffect, useRef, useCallback } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

interface Testimonial {
  name: string
  city: string
  text: string
  rating: number
  photo: string
}

const testimonials: Testimonial[] = [
  {
    name: "Ana Beatriz",
    city: "São Paulo, SP",
    text: "Meu cachorro simplesmente amou o banho e tosa! Volta pra casa cheiroso e feliz toda vez. Atendimento nota 10.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=100&h=100&fit=crop&crop=center&q=80",
  },
  {
    name: "Carlos Eduardo",
    city: "Campinas, SP",
    text: "Comprei ração e brinquedos por um preço muito melhor que em outras lojas. Entrega rápida e produtos de qualidade.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=100&h=100&fit=crop&crop=center&q=80",
  },
  {
    name: "Juliana Martins",
    city: "São Bernardo, SP",
    text: "A equipe é muito atenciosa e cuidadosa. Deixei minha gatinha para um banho e fiquei tranquila sabendo que estava em boas mãos.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=100&h=100&fit=crop&crop=center&q=80",
  },
  {
    name: "Rafael Oliveira",
    city: "Santo André, SP",
    text: "Levo meus dois cachorros há mais de um ano e nunca tive nenhuma reclamação. Profissionais qualificados e preço justo.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=100&h=100&fit=crop&crop=center&q=80",
  },
  {
    name: "Fernanda Costa",
    city: "Osasco, SP",
    text: "O serviço de banho e tosa é impecável! Meu shih-tzu ficou lindo e o atendimento foi maravilhoso do início ao fim.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=100&h=100&fit=crop&crop=center&q=80",
  },
  {
    name: "Lucas Almeida",
    city: "São Paulo, SP",
    text: "Ótima variedade de produtos e preços competitivos. A loja é bem organizada e os funcionários estão sempre prontos pra ajudar.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=100&h=100&fit=crop&crop=center&q=80",
  },
]

const VISIBLE = 3

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const total = testimonials.length
  const totalPages = total - VISIBLE + 1

  const goTo = useCallback((idx: number) => {
    setCurrentIndex((idx + totalPages) % totalPages)
  }, [totalPages])

  const goNext = useCallback(() => {
    goTo(currentIndex + 1)
  }, [currentIndex, goTo])

  const goPrev = useCallback(() => {
    goTo(currentIndex - 1)
  }, [currentIndex, goTo])

  const cardH = 140
  const trackOffset = -currentIndex * cardH

  useEffect(() => {
    if (isHovered) {
      if (autoRef.current) {
        clearInterval(autoRef.current)
        autoRef.current = null
      }
      return
    }

    autoRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages)
    }, 5000)

    return () => {
      if (autoRef.current) {
        clearInterval(autoRef.current)
        autoRef.current = null
      }
    }
  }, [isHovered, totalPages])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    viewport.addEventListener("mouseenter", handleMouseEnter)
    viewport.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      viewport.removeEventListener("mouseenter", handleMouseEnter)
      viewport.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Depoimentos
            </span>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              O que dizem nossos{" "}
              <span className="text-amber-500">clientes</span>
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-md">
              A satisfação dos nossos clientes é o que nos motiva a oferecer
              sempre o melhor para seu pet.
            </p>
          </div>

          <div className="relative">
            <div
              ref={viewportRef}
              className="overflow-hidden relative h-[420px]"
            >
              <div
                ref={trackRef}
                className="flex flex-col transition-transform duration-700 ease-out will-change-transform"
                style={{ transform: `translateY(${trackOffset}px)` }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-full px-1 py-2"
                    style={{ height: `${100 / VISIBLE}%` }}
                  >
                    <div className="h-full border border-gray-100 bg-white p-5 md:p-6 transition-all duration-300 hover:border-amber-200 hover:shadow-sm">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-amber-100 flex-shrink-0 bg-amber-50">
                          <img
                            src={t.photo}
                            alt={t.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 pt-1 min-w-0">
                          <h4 className="text-gray-900 font-semibold text-sm truncate">
                            {t.name}
                          </h4>
                          <p className="text-gray-400 text-xs truncate">
                            {t.city}
                          </p>
                          <div className="flex gap-0.5 mt-1">
                            {Array.from({ length: 5 }, (_, j) => (
                              <span
                                key={j}
                                className={`text-[10px] ${
                                  j < t.rating
                                    ? "text-amber-400"
                                    : "text-gray-200"
                                }`}
                              >
                                &#9733;
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <span className="text-amber-200/40 text-2xl absolute -top-1 -left-1 select-none">
                          &ldquo;
                        </span>
                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed italic relative z-10 line-clamp-3 pl-4">
                          {t.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="absolute inset-x-0 top-0 h-10 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to bottom, #ffffff, transparent)",
                }}
              />
              <div
                className="absolute inset-x-0 bottom-0 h-10 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to top, #ffffff, transparent)",
                }}
              />
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={goPrev}
                type="button"
                aria-label="Depoimento anterior"
                className="w-9 h-9 rounded-full border border-gray-200 bg-white text-gray-400 hover:text-amber-500 hover:border-amber-300 transition-all duration-300 flex items-center justify-center group"
              >
                <ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "w-8 bg-amber-400"
                        : "w-1.5 bg-amber-200 hover:bg-amber-300"
                    }`}
                    aria-label={`Ir para depoimento ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                type="button"
                aria-label="Próximo depoimento"
                className="w-9 h-9 rounded-full border border-gray-200 bg-white text-gray-400 hover:text-amber-500 hover:border-amber-300 transition-all duration-300 flex items-center justify-center group"
              >
                <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
