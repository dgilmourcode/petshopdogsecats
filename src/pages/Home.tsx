import { Link } from "react-router-dom"
import { ArrowRight, PawPrint, Shield, Heart, Star } from "lucide-react"
import Gallery from "@/components/Gallery"
import Testimonials from "@/components/Testimonials"

const petPhotos = [
  {
    src: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=300&fit=crop&q=80",
    alt: "Cachorro e gato juntos",
  },
  {
    src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop&q=80",
    alt: "Cachorro feliz",
  },
  {
    src: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&h=300&fit=crop&q=80",
    alt: "Filhote de cachorro",
  },
  {
    src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop&q=80",
    alt: "Gato",
  },
  {
    src: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=400&h=300&fit=crop&q=80",
    alt: "Cachorro ao ar livre",
  },
  {
    src: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop&q=80",
    alt: "Gato relaxando",
  },
  {
    src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&q=80",
    alt: "Cachorro sendo tosado",
  },
]

const benefits = [
  {
    icon: Shield,
    title: "Produtos Premium",
    desc: "Selecionamos apenas o melhor para a saúde do seu pet.",
  },
  {
    icon: Heart,
    title: "Amor e Cuidado",
    desc: "Tratamos cada animal como se fosse da nossa família.",
  },
  {
    icon: Star,
    title: "Profissionais Expert",
    desc: "Equipe qualificada e apaixonada pelo que faz.",
  },
]

export default function Home() {
  return (
    <div>
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-sm font-medium text-amber-700">
                <PawPrint className="h-4 w-4" />
                Bem-vindo ao PetShop Dogs&amp;Cats
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                O melhor amigo
                <br />
                <span className="text-amber-500">merece o melhor</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Cuidamos do seu pet com excelência, oferecendo produtos e
                serviços que garantem saúde, bem-estar e muita felicidade.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/servicos"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full px-8 h-11 transition-colors"
                >
                  Nossos Serviços
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 border border-gray-300 bg-background hover:bg-muted text-foreground font-medium rounded-full px-8 h-11 transition-colors"
                >
                  Fale Conosco
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&h=600&fit=crop&crop=center&q=80"
                    alt="Cachorro e gato juntos"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-6 py-4">
                  <p className="text-3xl font-bold text-amber-500">+500</p>
                  <p className="text-sm text-gray-500">Pets felizes</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-6 py-4">
                  <p className="text-3xl font-bold text-amber-500">10+</p>
                  <p className="text-sm text-gray-500">Anos de experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a gente?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Nos dedicamos a oferecer a melhor experiência para você e seu pet.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-200 transition-colors">
                  <item.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery
        images={petPhotos}
        title="Pets bem cuidados"
        subtitle="Momentos especiais dos nossos clientes de quatro patas."
        carousel
      />

      <Testimonials />

      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pronto para cuidar do seu pet?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">
              Agende uma visita ou entre em contato. Estamos prontos para
              receber você e seu melhor amigo.
            </p>
              <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full px-8 h-11 transition-colors"
              >
                Agendar Visita
              </Link>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 border border-gray-300 bg-background hover:bg-muted text-foreground font-medium rounded-full px-8 h-11 transition-colors"
              >
                Conheça Nossa História
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
