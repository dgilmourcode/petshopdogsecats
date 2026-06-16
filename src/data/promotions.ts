export interface Promotion {
  id: number
  title: string
  description: string
  image: string
  discount: number
  code?: string
  link?: string
}

export const promotions: Promotion[] = [
  {
    id: 1,
    title: "Semana do Pet",
    description: "20% OFF em toda linha de alimentação premium",
    image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=600&h=400&fit=crop&q=80",
    discount: 20,
    code: "PET20",
    link: "/produtos?categoria=Alimenta%C3%A7%C3%A3o",
  },
  {
    id: 2,
    title: "Conforto Total",
    description: "15% OFF em camas, cobertores e casinhas",
    image: "https://images.unsplash.com/photo-1779126316993-76f6ce9cd8ff?w=600&h=400&fit=crop&q=80",
    discount: 15,
    code: "CONFORTO15",
    link: "/produtos?categoria=Camas%20%26%20Conforto",
  },
  {
    id: 3,
    title: "Kit Higiene Completo",
    description: "25% OFF em produtos de higiene e beleza",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop&q=80",
    discount: 25,
    code: "HIGIENE25",
    link: "/produtos?categoria=Higiene%20%26%20Beleza",
  },
  {
    id: 4,
    title: "Brinquedos em Dobro",
    description: "Leve 2 brinquedos e pague 1 — 30% OFF no segundo",
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=600&h=400&fit=crop&q=80",
    discount: 30,
    code: "BRINQ30",
    link: "/produtos?categoria=Brinquedos",
  },
  {
    id: 5,
    title: "Saúde em Primeiro Lugar",
    description: "15% OFF em medicamentos e suplementos",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&q=80",
    discount: 15,
    code: "SAUDE15",
    link: "/produtos?categoria=Medicamentos%20%26%20Sa%C3%BAde",
  },
]

export const headerPromos = [
  "Frete grátis para compras acima de R$ 150,00",
  "Ganhe 10% OFF na primeira compra — cupom: PRIMEIRO10",
  "Parcele em até 6x sem juros no cartão",
  "Assine e economize 15% em rações todo mês",
]
