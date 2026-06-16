import { useState } from "react"
import { Mail, MapPin, Phone, Clock, Send, PawPrint, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    details: ["Rua dos Animais, 123", "Jardim Pet - São Paulo, SP"],
  },
  {
    icon: Phone,
    title: "Telefone",
    details: ["(11) 99999-8888", "(11) 3333-4444"],
  },
  {
    icon: Mail,
    title: "E-mail",
    details: ["contato@petshopdogsandcats.com.br", "vendas@petshopdogsandcats.com.br"],
  },
  {
    icon: Clock,
    title: "Horários",
    details: ["Seg-Sex: 8h às 19h", "Sáb: 9h às 17h"],
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section className="pt-16 md:pt-24 pb-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-sm font-medium text-amber-700 mb-6">
            <Mail className="h-4 w-4" />
            Fale Conosco
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Entre em contato
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Tire suas dúvidas, agende serviços ou dê sugestões. Estamos
            prontos para atender você.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="h-5 w-5 text-amber-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    {item.details.map((d) => (
                      <p key={d} className="text-sm text-gray-500">
                        {d}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-start gap-3">
                  <PawPrint className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Respondemos em até 24 horas úteis. Para emergências,
                    ligue para (11) 99999-8888.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Redes Sociais
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com/petshopdogsandcats"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-300 transition-all"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/petshopdogsandcats"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-300 transition-all"
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@petshopdogsandcats"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-300 transition-all"
                    aria-label="YouTube"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/5511999998888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-300 transition-all"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mensagem enviada!
                  </h3>
                  <p className="text-gray-500">
                    Recebemos sua mensagem e entraremos em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        required
                        className="rounded-xl border-gray-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="rounded-xl border-gray-200"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      placeholder="(11) 99999-8888"
                      className="rounded-xl border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      placeholder="Ex: Agendamento de banho"
                      required
                      className="rounded-xl border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Conte como podemos ajudar..."
                      required
                      className="min-h-32 rounded-xl border-gray-200"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full py-6"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
