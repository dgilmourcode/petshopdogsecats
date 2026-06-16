import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PawPrint, Tag } from "lucide-react";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import { promotions } from "@/data/promotions";

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
];

export default function Home() {
  const [promoIdx, setPromoIdx] = useState(0);
  const [visibleIdx, setVisibleIdx] = useState(0);

  useEffect(() => {
    if (promotions.length <= 1) return;
    const id = setInterval(() => {
      setPromoIdx((prev) => (prev + 1) % promotions.length);
      setVisibleIdx((prev) => 1 - prev);
    }, 5000);
    return () => clearInterval(id);
  }, []);

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
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-xs font-semibold mb-4">
                <Tag className="h-3 w-3" />
                Ofertas da Semana
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                Promoções <span className="text-amber-500">imperdíveis</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Aproveite descontos especiais em produtos selecionados. Ofertas
                por tempo limitado para cuidar do seu pet com o melhor preço.
              </p>
              <Link
                to="/produtos"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg px-6 h-11 transition-colors"
              >
                Ver Todas as Ofertas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-sm bg-gray-900 min-h-[280px]">
              {[0, 1].map((slot) => {
                const isVisible = slot === visibleIdx;
                const idx =
                  slot === 0 ? promoIdx : (promoIdx + 1) % promotions.length;
                const promo = promotions[idx];
                return (
                  <Link
                    key={slot}
                    to={promo.link || "/produtos"}
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      transform: isVisible
                        ? "translateX(0)"
                        : "translateX(100%)",
                      opacity: isVisible ? 1 : 0,
                      zIndex: isVisible ? 1 : 0,
                    }}
                  >
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900/65 to-transparent z-10" />
                      <img
                        src={promo.image}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative z-20 h-full flex items-center px-6 sm:px-10">
                      <div className="flex items-center justify-between w-full gap-4">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full text-amber-300 text-[11px] font-semibold uppercase tracking-wider mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            Oferta Especial
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {promo.title}
                          </h3>
                          <p className="text-sm text-white/60 mt-1">
                            {promo.description}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-4xl sm:text-5xl font-bold text-amber-400 block leading-none">
                            -{promo.discount}%
                          </span>
                          {promo.code && (
                            <span className="text-xs text-white/50 border border-white/10 bg-white/5 px-2 py-1 inline-block mt-2 font-mono rounded">
                              {promo.code}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                {promotions.map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1.5 rounded-full transition-all ${
                      i === promoIdx ? "w-5 bg-amber-400" : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=300&h=300&fit=crop&q=80"
                  alt="Brinquedos para pets"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden border border-gray-200 mt-6">
                <img
                  src="https://images.unsplash.com/photo-1568572933382-74d440642117?w=300&h=300&fit=crop&q=80"
                  alt="Alimentação"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden border border-gray-200 -mt-6">
                <img
                  src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=300&h=300&fit=crop&q=80"
                  alt="Conforto"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=300&fit=crop&q=80"
                  alt="Higiene"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4">
                Produtos
              </span>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                Tudo que seu pet <span className="text-amber-500">merece</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                De rações premium a brinquedos interativos, passando por camas
                confortáveis, vasilhas, medicamentos e acessórios para passeio.
                Trabalhamos com as melhores marcas para garantir a saúde e
                felicidade do seu melhor amigo.
              </p>
              <Link
                to="/produtos"
                className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition-colors"
              >
                Ver todos os produtos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4">
                Como trabalhamos
              </span>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                Amor e profissionalismo{" "}
                <span className="text-amber-500">em cada detalhe</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Nossa equipe é formada por profissionais apaixonados por
                animais. Cada banho, cada atendimento, cada produto selecionado
                passa pelo nosso cuidado para garantir a melhor experiência para
                você e seu pet.
              </p>
              <ul className="space-y-3">
                {[
                  "Equipe treinada e certificada",
                  "Produtos de marcas confiáveis",
                  "Ambiente limpo e seguro",
                  "Atendimento personalizado",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=450&fit=crop&q=80"
                alt="Equipe PetShop Dogs&Cats"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
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

      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-white to-orange-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4">
                Vem nos visitar
              </span>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                Pronto para cuidar{" "}
                <span className="text-amber-500">do seu pet?</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Agende uma visita, conheça nossa estrutura e descubra por que
                somos a escolha certa para quem ama seu pet.
              </p>
              <div className="flex flex-wrap gap-4">
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
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=450&fit=crop&q=80"
                  alt="PetShop Dogs&Cats"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
