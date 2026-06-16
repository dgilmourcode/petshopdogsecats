import { Link } from "react-router-dom"
import {
  ShoppingBag,
  Bone,
  Bed,
  UtensilsCrossed,
  Pill,
  Sparkles,
  Dog,
  ChevronRight,
} from "lucide-react"

const categories = [
  {
    icon: Bone,
    title: "Alimentação",
    items: ["Rações secas e úmidas", "Petiscos e biscoitos", "Comidas naturais", "Suplementos alimentares"],
    image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&h=300&fit=crop&q=80",
  },
  {
    icon: ShoppingBag,
    title: "Brinquedos",
    items: ["Bolas e frisbees", "Mordedores", "Brinquedos interativos", "Pelúcias"],
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=400&h=300&fit=crop&q=80",
  },
  {
    icon: Bed,
    title: "Camas & Conforto",
    items: ["Camas ortopédicas", "Cobertores", "Casinhas", "Almofadas"],
    image: "https://images.unsplash.com/photo-1779126316993-76f6ce9cd8ff?w=400&h=300&fit=crop&q=80",
  },
  {
    icon: UtensilsCrossed,
    title: "Vasilhas & Acessórios",
    items: ["Vasilhas de alimento", "Bebedouros automáticos", "Tapetes higiênicos", "Portas-racão"],
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=300&fit=crop&q=80",
  },
  {
    icon: Pill,
    title: "Medicamentos & Saúde",
    items: ["Antipulgas e carrapatos", "Vermífugos", "Vitaminas", "Produtos veterinários"],
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop&q=80",
  },
  {
    icon: Sparkles,
    title: "Higiene & Beleza",
    items: ["Shampoos e condicionadores", "Perfumes", "Escovas e pentes", "Corta-unhas"],
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&q=80",
  },
  {
    icon: Dog,
    title: "Passeio & Viagem",
    items: ["Coleiras e guias", "Peitorais", "Caixas de transporte", "Roupinhas"],
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop&q=80",
  },
]

export default function Products() {
  return (
    <div>
      <section className="pt-16 md:pt-24 pb-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-sm font-medium text-amber-700 mb-6">
            <ShoppingBag className="h-4 w-4" />
            Nossos Produtos
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Tudo para seu pet
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Alimentação, brinquedos, acessórios e muito mais. Tudo que seu pet
            merece em um só lugar.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-amber-200 transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                      <cat.icon className="h-4 w-4 text-amber-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{cat.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 text-sm text-gray-500"
                      >
                        <ChevronRight className="h-3 w-3 text-amber-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Não encontrou o que procura?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">
              Temos uma variedade ainda maior na loja física. Visite-nos ou
              entre em contato para encomendas especiais.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full px-8 h-11 transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
