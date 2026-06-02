/* ============================================================
 * DADOS DO CATÁLOGO — Bazar de mudança
 * ------------------------------------------------------------
 * Você NÃO precisa editar este arquivo na mão.
 * Abra o "admin.html" no navegador: ele tem formulários para
 * adicionar, editar, excluir e reordenar produtos, e gera este
 * arquivo prontinho para você subir no GitHub.
 *
 * (Se quiser editar à mão mesmo assim, cuidado com vírgulas e aspas.)
 * ============================================================ */
window.CATALOGO = {
  config: {
    whatsapp:  "5511991393072",          // número com DDI+DDD, só dígitos. Ex: 5511987654321
    bairro:    "Vila Romana — São Paulo/SP",    // ex.: "Pinheiros — São Paulo/SP"
    leadEmail: "bclima7790@gmail.com"     // e-mail que recebe os leads do formulário "Tenho interesse"
  },
  produtos: [
  {
    id: "SOF-001", featured: true,
    title: "Sofá retrátil Clami — 3 módulos · 2,95 m",
    category: "Sofá", room: "Sala de estar",
    price: 12000, status: "Disponível",
    images: [
      "img/sofa-retratil/sofa-retratil-01.jpg","img/sofa-retratil/sofa-retratil-02.jpg",
      "img/sofa-retratil/sofa-retratil-03.jpg","img/sofa-retratil/sofa-retratil-04.jpg",
      "img/sofa-retratil/sofa-retratil-05.jpg","img/sofa-retratil/sofa-retratil-06.jpg",
      "img/sofa-retratil/sofa-retratil-07.jpg","img/sofa-retratil/sofa-retratil-08.jpg",
      "img/sofa-retratil/sofa-retratil-09.jpg","img/sofa-retratil/sofa-retratil-10.jpg",
      "img/sofa-retratil/sofa-retratil-11.jpg","img/sofa-retratil/sofa-retratil-12.jpg",
      "img/sofa-retratil/sofa-retratil-13.jpg","img/sofa-retratil/sofa-retratil-14.jpg",
      "img/sofa-retratil/sofa-retratil-15.jpg","img/sofa-retratil/sofa-retratil-16.jpg"
    ],
    description: "A estrela do bazar. Sofá de alto padrão da Clami: três módulos retráteis e reclináveis, 2,95 m de frente e assento que abre até 1,55 m. Conforto de showroom, acabamento premium e estrutura impecável — a peça que ancora a sala inteira.",
    specs: { "Marca": "Clami", "Dimensões": "295 × 155 × 95 cm", "Estado": "Ótimo · 2 anos de uso", "Material": "Tecido premium", "Cômodo": "Sala de estar" }
  },
  {
    id: "POL-001",
    title: "Par de poltronas",
    category: "Poltrona", room: "Sala de estar",
    price: 1200, status: "Disponível", priceNote: "par",
    images: ["img/poltronas/poltronas-01.jpg","img/poltronas/poltronas-02.jpg","img/poltronas/poltronas-03.jpg"],
    description: "Par de poltronas de base baixa e estofamento estruturado: firmeza, conforto e uma simetria elegante ao lado do sofá. Duas peças idênticas — combinação rara de achar no usado.",
    specs: { "Dimensões (cada)": "82 × 82 × 65 cm", "Estado": "Ótimo · 2 anos de uso", "Quantidade": "2 unidades (par)", "Cômodo": "Sala de estar" }
  },
  {
    id: "MCE-001",
    title: "Mesas de centro — tampo orgânico e bases esfera",
    category: "Mesa de centro", room: "Sala de estar",
    price: 1900, status: "Disponível",
    images: ["img/mesas-centro/mesas-centro-01.jpg","img/mesas-centro/mesas-centro-02.jpg","img/mesas-centro/mesas-centro-03.jpg","img/mesas-centro/mesas-centro-04.jpg","img/mesas-centro/mesas-centro-05.jpg","img/mesas-centro/mesas-centro-06.jpg","img/mesas-centro/mesas-centro-07.jpg","img/mesas-centro/mesas-centro-08.jpg"],
    description: "Peça escultural: tampo de formato orgânico em madeira maciça sobre bases esfera. Cada veio é único — design autoral que vira o ponto de destaque do living.",
    specs: { "Dimensões": "Medir no local", "Estado": "Ótimo · 2 anos de uso", "Material": "Madeira maciça", "Cômodo": "Sala de estar" },
    disclaimer: "Dimensões e conjunto exato a confirmar no contato."
  },
  {
    id: "TV-001",
    title: "Smart TV Samsung 65\" 4K",
    category: "Eletrônico", room: "Sala de estar",
    price: 2200, status: "Disponível",
    images: ["img/televisao/televisao-01.jpg"],
    description: "Smart TV Samsung 65\" 4K UHD: tela ampla e imersiva que transforma a sala em cinema, com sistema Tizen e seus apps favoritos (Netflix, YouTube, Prime, Globoplay). Acompanha controle, em ótimo estado.",
    specs: { "Marca": "Samsung", "Tela": "65\" · 4K", "Estado": "Ótimo · 2 anos de uso", "Cômodo": "Sala de estar", "Tipo": "Smart TV" }
  },
  {
    id: "MJA-001",
    title: "Mesa de jantar 2,20 m · 8 lugares",
    category: "Mesa", room: "Sala de jantar",
    price: 1800, status: "Disponível",
    images: ["img/mesa-jantar/mesa-jantar-01.jpg","img/mesa-jantar/mesa-jantar-02.jpg","img/mesa-jantar/mesa-jantar-03.jpg","img/mesa-jantar/mesa-jantar-04.jpg","img/mesa-jantar/mesa-jantar-05.jpg","img/mesa-jantar/mesa-jantar-06.jpg","img/mesa-jantar/mesa-jantar-07.jpg","img/mesa-jantar/mesa-jantar-08.jpg","img/mesa-jantar/mesa-jantar-09.jpg"],
    description: "Mesa de jantar robusta de 2,20 m, lugar de sobra para 8 — feita para casa cheia e almoços demorados. Sólida e bem conservada, ancora a sala com presença.",
    specs: { "Dimensões": "220 × 110 × 77 cm", "Lugares": "8", "Estado": "Ótimo · 2 anos de uso", "Cômodo": "Sala de jantar" }
  },
  {
    id: "CAD-001",
    title: "Cadeira com encosto em palhinha",
    category: "Cadeira", room: "Sala de jantar",
    price: 350, status: "Disponível", priceNote: "cada", qty: 2,
    images: ["img/cadeira-palhinha/cadeira-palhinha-01.jpg","img/cadeira-palhinha/cadeira-palhinha-02.jpg","img/cadeira-palhinha/cadeira-palhinha-03.jpg"],
    description: "Clássico atemporal de volta à moda: encosto em palhinha natural e estrutura de madeira, com leveza visual e charme imediato. 2 unidades em ótimo estado.",
    specs: { "Dimensões": "46 × 52 × 81 cm", "Estado": "Ótimo · 2 anos de uso", "Material": "Madeira + palhinha", "Cômodo": "Sala de jantar" }
  },
  {
    id: "CAD-002",
    title: "Cadeira de couro",
    category: "Cadeira", room: "Sala de jantar",
    price: 500, status: "Disponível", priceNote: "cada", qty: 6,
    images: ["img/cadeira-couro/cadeira-couro-01.jpg","img/cadeira-couro/cadeira-couro-02.jpg","img/cadeira-couro/cadeira-couro-03.jpg","img/cadeira-couro/cadeira-couro-04.jpg","img/cadeira-couro/cadeira-couro-05.jpg"],
    description: "Cadeiras em couro autêntico e madeira — sofisticação que dura e fica ainda mais bonita com o tempo. Conjunto de 6, raro de achar combinando, em ótimo estado.",
    specs: { "Dimensões": "46 × 49 × 85 cm", "Estado": "Ótimo · 2 anos de uso", "Material": "Couro", "Cômodo": "Sala de jantar" }
  },
  {
    id: "BAN-001",
    title: "Banqueta alta de madeira",
    category: "Banqueta", room: "Cozinha",
    price: 200, status: "Disponível", priceNote: "cada", qty: 4,
    images: ["img/banquetas/banquetas-01.jpg","img/banquetas/banquetas-02.jpg"],
    description: "Banqueta alta em madeira maciça com encosto, assento a ~75 cm — altura certa para bancada e ilha, com o conforto do apoio nas costas. 4 unidades; leve quantas precisar.",
    specs: { "Dimensões (cada)": "43 × 42 × 103 cm", "Estado": "Ótimo · 2 anos de uso", "Material": "Madeira maciça", "Cômodo": "Cozinha / bancada" }
  },
  {
    id: "GEL-001",
    title: "Geladeira Electrolux Multidoor 590 L · Inverter Inox",
    category: "Eletrodoméstico", room: "Cozinha",
    price: 4500, status: "Disponível",
    images: ["img/geladeira/geladeira-01.jpg","img/geladeira/geladeira-02.jpg","img/geladeira/geladeira-03.jpg"],
    description: "Geladeira Electrolux Multidoor de 590 litros (3 portas), acabamento Inox Look. Frost Free e Inverter para refrigeração silenciosa e econômica (classe A), com AutoSense que ajusta a temperatura sozinho e conserva os alimentos frescos por mais tempo. Espaço de sobra para a família — em ótimo estado.",
    specs: { "Modelo": "Electrolux IM8S", "Capacidade": "590 L", "Portas": "3 (Multidoor)", "Dimensões": "190 × 83,5 × 74 cm", "Eficiência": "Classe A · Inverter", "Voltagem": "220V", "Estado": "Ótimo · 2 anos de uso", "Cômodo": "Cozinha" }
  },
  {
    id: "FRE-001",
    title: "Freezer horizontal Electrolux 143 L · dupla função",
    category: "Eletrodoméstico", room: "Cozinha / área de serviço",
    price: 1200, status: "Disponível",
    images: ["img/freezer/freezer-01.jpg","img/freezer/freezer-02.jpg","img/freezer/freezer-03.jpg","img/freezer/freezer-04.jpg","img/freezer/freezer-05.jpg","img/freezer/freezer-06.jpg","img/freezer/freezer-07.jpg"],
    description: "Freezer horizontal Electrolux de 143 litros com Dual Function: use como freezer ou como conservador/geladeira, conforme a necessidade. Tem Turbo Freezer para congelar mais rápido, iluminação LED interna, fechadura de segurança e dreno de degelo. Compacto e econômico (classe A) — em ótimo estado.",
    specs: { "Modelo": "Electrolux HE150", "Capacidade": "143 L", "Dimensões": "85 × 63 × 60 cm", "Eficiência": "Classe A", "Degelo": "Cycle Defrost (manual)", "Voltagem": "127V", "Estado": "Ótimo · 2 anos de uso", "Cômodo": "Cozinha / área de serviço" }
  },
  {
    id: "MIC-001",
    title: "Micro-ondas Electrolux 31 L · espelhado",
    category: "Eletrodoméstico", room: "Cozinha",
    price: 450, status: "Disponível",
    images: ["img/microondas/microondas-01.jpg"],
    description: "Micro-ondas Electrolux 31 L espelhado, com painel integrado que se esconde quando a porta fecha — visual clean. Função tira-odor, manter aquecido e receitas guiadas por QR Code. Em ótimo estado.",
    specs: { "Dimensões": "52 × 43 × 33 cm (referência)", "Capacidade": "31 L", "Estado": "Ótimo · 2 anos de uso", "Modelo": "Electrolux MI41S (referência)", "Cômodo": "Cozinha" },
    disclaimer: "Voltagem a confirmar no contato."
  }
  ]
};
