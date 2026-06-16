import { Link } from "react-router-dom";
import {
  PawPrint,
  Target,
  Users,
  Award,
  Heart,
  Shield,
  Star,
} from "lucide-react";

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
];

const values = [
  {
    icon: Heart,
    title: "Amor aos Animais",
    desc: "Cada pet é único e especial. Tratamos todos com o carinho que merecem.",
  },
  {
    icon: Target,
    title: "Compromisso",
    desc: "Honramos nossa palavra e entregamos o melhor em cada serviço.",
  },
  {
    icon: Users,
    title: "Família",
    desc: "Valorizamos a conexão entre pets e seus tutores como nossa própria família.",
  },
  {
    icon: Award,
    title: "Excelência",
    desc: "Buscamos constantemente a mais alta qualidade em produtos e atendimento.",
  },
];

export default function About() {
  return (
    <div>
      <section className="pt-16 md:pt-24 pb-20 bg-linear-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-sm font-medium text-amber-700">
                <PawPrint className="h-4 w-4" />
                Nossa História
              </div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Mais que um pet shop,{" "}
                <span className="text-amber-500">uma família</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                O PetShop Dogs&amp;Cats nasceu da paixão por animais. Desde
                2014, nos dedicamos a oferecer produtos e serviços que promovem
                a saúde e felicidade dos pets.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Acreditamos que cada animal merece cuidado personalizado. Nossa
                equipe é formada por profissionais apaixonados que entendem as
                necessidades únicas do seu pet.
              </p>
            </div>
            <div className="relative">
              <div className="w-full aspect-square rounded-sm overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=600&fit=crop&crop=center&q=80"
                  alt="Cachorro feliz"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { number: "+500", label: "Pets atendidos" },
              { number: "10+", label: "Anos de mercado" },
              { number: "50+", label: "Produtos premium" },
              { number: "98%", label: "Satisfação" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <p className="text-4xl font-bold text-amber-500 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
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

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Princípios que guiam cada ação do nosso time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="h-5 w-5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Quer fazer parte dessa história?
            </h2>
            <p className="text-amber-50 max-w-xl mx-auto mb-8">
              Venha nos conhecer e descubra por que somos referência em cuidado
              animal.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-white text-amber-600 font-semibold px-8 py-3 rounded-full hover:bg-amber-50 transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
