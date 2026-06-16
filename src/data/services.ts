export interface ServiceItem {
  id: string
  title: string
  shortDesc: string
  longDescription: string
  howItWorks: string
  price: string
  icon: string
  photos: string[]
  features: string[]
}

export const servicesData: ServiceItem[] = [
  {
    id: "banho-e-tosa",
    title: "Banho e Tosa",
    shortDesc: "Serviço completo de higiene com produtos hipoalergênicos. Tosas estilosas e confortáveis para todas as raças.",
    longDescription: "Nosso serviço de banho e tosa é pensado para oferecer higiene, saúde e bem-estar ao seu pet. Utilizamos produtos hipoalergênicos de alta qualidade, adequados para cada tipo de pele e pelagem. Nossa equipe é treinada para lidar com animais de todos os portes e temperamentos, garantindo uma experiência tranquila e agradável.",
    howItWorks: "Ao chegar, seu pet passa por uma avaliação para identificar necessidades específicas. O banho é feito com água morna e produtos adequados, seguido de secagem, escovação e tosa personalizada. Finalizamos com hidratação, corte de unhas e limpeza de ouvidos. O serviço leva em média 1h a 2h dependendo do porte e pelagem.",
    price: "A partir de R$ 59,90",
    icon: "Scissors",
    photos: [
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800&h=600&fit=crop&q=80",
    ],
    features: [
      "Banho premium com produtos hipoalergênicos",
      "Tosa completa para todas as raças",
      "Hidratação profunda da pelagem",
      "Corte de unhas e limpeza de ouvidos",
      "Escovação e desembaraço",
      "Perfume suave com duração prolongada",
    ],
  },
  {
    id: "consultas-veterinarias",
    title: "Consultas Veterinárias",
    shortDesc: "Atendimento clínico geral com veterinários experientes. Prevenção e tratamento para seu pet.",
    longDescription: "Contamos com uma equipe de veterinários experientes e apaixonados por animais. Realizamos consultas clínicas gerais, exames laboratoriais, vacinação e atendimento de emergência. Nosso objetivo é manter seu pet saudável com prevenção e diagnósticos precisos.",
    howItWorks: "Agende uma consulta pelo telefone ou WhatsApp. Na chegada, o veterinário realiza uma anamnese completa, exame físico detalhado e, se necessário, solicita exames complementares. Ao final, você recebe orientações personalizadas e a prescrição do tratamento adequado.",
    price: "A partir de R$ 89,90",
    icon: "Stethoscope",
    photos: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582755333440-5d4c1b5a4c3a?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&h=600&fit=crop&q=80",
    ],
    features: [
      "Check-up geral completo",
      "Vacinação com imunizantes de qualidade",
      "Exames laboratoriais (sangue, urina, fezes)",
      "Atendimento de emergência 24h",
      "Orientações nutricionais",
      "Receituário e atestados",
    ],
  },
  {
    id: "hotel-para-pets",
    title: "Hotel para Pets",
    shortDesc: "Hospedagem com todo conforto e segurança. Seu pet relaxando enquanto você viaja.",
    longDescription: "Nosso hotel oferece acomodações confortáveis e seguras para seu pet. Cada hóspede tem sua suíte individual com cama macia, cobertores e brinquedos. Contamos com área de lazer monitorada e alimentação de acordo com a rotina do seu pet.",
    howItWorks: "Faça a reserva com antecedência. Na chegada, seu pet passa por uma avaliação e você informa a rotina alimentar, medicamentos e preferências. Durante a estadia, enviamos fotos e atualizações. O check-out é flexível e seu pet sai banhado e pronto para voltar para casa.",
    price: "A partir de R$ 79,90/dia",
    icon: "Hotel",
    photos: [
      "https://images.unsplash.com/photo-1779126316993-76f6ce9cd8ff?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop&q=80",
    ],
    features: [
      "Suítes individuais com cama e cobertor",
      "Área de lazer com playground",
      "Monitoramento por câmeras 24h",
      "Alimentação conforme rotina do pet",
      "Envio de fotos e atualizações diárias",
      "Banho incluso no check-out",
    ],
  },
  {
    id: "adestramento",
    title: "Adestramento",
    shortDesc: "Treinamento profissional com técnicas positivas. Comportamento e obediência para uma convivência harmoniosa.",
    longDescription: "Nosso adestramento é baseado em reforço positivo, respeitando o tempo e as características de cada animal. Trabalhamos desde comandos básicos até correção de comportamentos indesejados, fortalecendo o vínculo entre tutor e pet.",
    howItWorks: "Primeiro, fazemos uma avaliação comportamental para entender as necessidades do seu pet. As aulas podem ser individuais ou em grupo, com duração de 45 minutos. Você aprende técnicas para aplicar no dia a dia, com suporte contínuo da nossa equipe. O programa tem duração média de 8 a 12 sessões.",
    price: "A partir de R$ 99,90/aula",
    icon: "BookOpen",
    photos: [
      "https://images.unsplash.com/photo-1553882809-a4f57e595701?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800&h=600&fit=crop&q=80",
    ],
    features: [
      "Adestramento básico (senta, fica, vem)",
      "Correção de comportamentos indesejados",
      "Socialização com outros cães",
      "Aulas individuais ou em grupo",
      "Técnicas de reforço positivo",
      "Suporte contínuo entre as aulas",
    ],
  },
  {
    id: "nutricao-animal",
    title: "Nutrição Animal",
    shortDesc: "Consultoria nutricional personalizada. A alimentação ideal para cada fase da vida do seu pet.",
    longDescription: "Oferecemos consultoria nutricional completa para cães e gatos. Nossa equipe avalia as necessidades específicas do seu pet e recomenda a alimentação ideal, seja ração premium, dieta natural ou suplementação. Trabalhamos com as melhores marcas do mercado.",
    howItWorks: "Agende uma consulta nutricional. O veterinário avalia idade, peso, raça, nível de atividade e condições de saúde do seu pet. Com base nessa análise, elaboramos um plano alimentar personalizado com recomendações de marcas, porções e horários.",
    price: "A partir de R$ 69,90",
    icon: "Bone",
    photos: [
      "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800&h=600&fit=crop&q=80",
    ],
    features: [
      "Avaliação nutricional completa",
      "Plano alimentar personalizado",
      "Recomendação de rações premium",
      "Dietas naturais e caseiras",
      "Suplementação vitamínica",
      "Acompanhamento mensal",
    ],
  },
  {
    id: "pet-shop",
    title: "Pet Shop",
    shortDesc: "Variedade de produtos: brinquedos, acessórios, roupas e muito mais para seu pet.",
    longDescription: "Nossa loja física oferece uma ampla variedade de produtos para cães e gatos. Trabalhamos com marcas reconhecidas e garantimos a procedência de cada item. De rações premium a brinquedos interativos, passando por camas, roupas e acessórios para passeio.",
    howItWorks: "Visite nossa loja de segunda a sábado. Nossa equipe está pronta para ajudar na escolha dos produtos ideais para seu pet. Aceitamos todas as formas de pagamento e oferecemos entrega para a região metropolitana de São Paulo em até 24h.",
    price: "Consulte nossos preços",
    icon: "ShoppingBag",
    photos: [
      "https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop&q=80",
    ],
    features: [
      "Rações premium nacionais e importadas",
      "Brinquedos interativos e educativos",
      "Roupas e acessórios da moda pet",
      "Camas, casinhas e cobertores",
      "Coleiras, guias e peitorais",
      "Produtos de higiene e beleza",
    ],
  },
]
