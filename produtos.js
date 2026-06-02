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
    description: "A estrela do bazar — e que estrela. Sofá de alto padrão da Clami, que custou R$ 25.000 novo. São três módulos retráteis e reclináveis somando 2,95 m de frente: lugar de sobra para a família inteira se esparramar, com o assento abrindo até 1,55 m de profundidade. Conforto de showroom, estrutura impecável e acabamento premium, com apenas 2 anos de uso e em ótimo estado. É a peça que ancora a sala inteira — agora por menos da metade do valor original.",
    specs: { "Marca": "Clami", "Dimensões": "295 × 155 × 95 cm", "Valor de nova": "R$ 25.000", "Estado": "Ótimo · 2 anos de uso", "Material": "Tecido premium", "Cômodo": "Sala de estar" }
  },
  {
    id: "POL-001",
    title: "Par de poltronas",
    category: "Poltrona", room: "Sala de estar",
    price: 1200, status: "Disponível", priceNote: "par",
    images: ["img/poltronas/poltronas-01.jpg","img/poltronas/poltronas-02.jpg","img/poltronas/poltronas-03.jpg"],
    description: "Conjunto com duas poltronas idênticas, base baixa e estofamento estruturado. Combinam com o sofá retrátil ou formam um canto de leitura próprio. Vendidas como par.",
    specs: { "Dimensões (cada)": "82 × 82 × 65 cm", "Estado": "Ótimo · 2 anos de uso", "Quantidade": "2 unidades (par)", "Cômodo": "Sala de estar" }
  },
  {
    id: "MCE-001",
    title: "Mesas de centro — tampo orgânico e bases esfera",
    category: "Mesa de centro", room: "Sala de estar",
    price: 1900, status: "Disponível",
    images: ["img/mesas-centro/mesas-centro-01.jpg","img/mesas-centro/mesas-centro-02.jpg","img/mesas-centro/mesas-centro-03.jpg","img/mesas-centro/mesas-centro-04.jpg","img/mesas-centro/mesas-centro-05.jpg","img/mesas-centro/mesas-centro-06.jpg","img/mesas-centro/mesas-centro-07.jpg","img/mesas-centro/mesas-centro-08.jpg"],
    description: "Design escultural: tampo em formato orgânico em madeira maciça e bases esfera. Peça com presença, traz personalidade ao living.",
    specs: { "Dimensões": "Medir no local", "Estado": "Ótimo · 2 anos de uso", "Material": "Madeira maciça", "Cômodo": "Sala de estar" },
    disclaimer: "Dimensões e conjunto exato a confirmar no contato."
  },
  {
    id: "TV-001",
    title: "Smart TV Samsung 65\" 4K",
    category: "Eletrônico", room: "Sala de estar",
    price: 2200, status: "Disponível",
    images: ["img/televisao/televisao-01.jpg"],
    description: "Smart TV Samsung de 65 polegadas, 4K, em ótimo estado. Tela ampla, ideal para a sala — estava instalada em painel. Acompanha controle.",
    specs: { "Marca": "Samsung", "Tela": "65\" · 4K", "Estado": "Ótimo · 2 anos de uso", "Cômodo": "Sala de estar", "Tipo": "Smart TV" }
  },
  {
    id: "MJA-001",
    title: "Mesa de jantar 2,20 m · 8 lugares",
    category: "Mesa", room: "Sala de jantar",
    price: 1800, status: "Disponível",
    images: ["img/mesa-jantar/mesa-jantar-01.jpg","img/mesa-jantar/mesa-jantar-02.jpg","img/mesa-jantar/mesa-jantar-03.jpg","img/mesa-jantar/mesa-jantar-04.jpg","img/mesa-jantar/mesa-jantar-05.jpg","img/mesa-jantar/mesa-jantar-06.jpg","img/mesa-jantar/mesa-jantar-07.jpg","img/mesa-jantar/mesa-jantar-08.jpg","img/mesa-jantar/mesa-jantar-09.jpg"],
    description: "Mesa de jantar ampla, 220 × 110 cm, ideal para 8 pessoas. Centro do ambiente social, pronta para receber. Tampo e estrutura em ótimo estado.",
    specs: { "Dimensões": "220 × 110 × 77 cm", "Lugares": "8", "Estado": "Ótimo · 2 anos de uso", "Cômodo": "Sala de jantar" }
  },
  {
    id: "CAD-001",
    title: "Cadeira com encosto em palhinha",
    category: "Cadeira", room: "Sala de jantar",
    price: 350, status: "Disponível", priceNote: "cada", qty: 2,
    images: ["img/cadeira-palhinha/cadeira-palhinha-01.jpg"],
    description: "Clássico atemporal. Estrutura em madeira e encosto em palhinha natural — combina com qualquer mesa de jantar.",
    specs: { "Dimensões": "46 × 52 × 81 cm", "Estado": "Ótimo · 2 anos de uso", "Material": "Madeira + palhinha", "Cômodo": "Sala de jantar" }
  },
  {
    id: "CAD-002",
    title: "Cadeira de couro",
    category: "Cadeira", room: "Sala de jantar",
    price: 500, status: "Disponível", priceNote: "cada", qty: 6,
    images: ["img/cadeira-couro/cadeira-couro-01.jpg","img/cadeira-couro/cadeira-couro-02.jpg","img/cadeira-couro/cadeira-couro-03.jpg","img/cadeira-couro/cadeira-couro-04.jpg","img/cadeira-couro/cadeira-couro-05.jpg"],
    description: "Cadeira em couro autêntico, conforto e elegância. Combina com a mesa de jantar ou como cadeira de apoio.",
    specs: { "Dimensões": "46 × 49 × 85 cm", "Estado": "Ótimo · 2 anos de uso", "Material": "Couro", "Cômodo": "Sala de jantar" }
  },
  {
    id: "BAN-001",
    title: "Banqueta alta de madeira",
    category: "Banqueta", room: "Cozinha",
    price: 200, status: "Disponível", priceNote: "cada", qty: 4,
    images: ["img/banquetas/banquetas-01.jpg","img/banquetas/banquetas-02.jpg"],
    description: "Banquetas em madeira maciça com encosto. Altura de assento adequada para bancadas/ilhas de 90 cm. Vendidas por unidade — 4 disponíveis.",
    specs: { "Dimensões (cada)": "43 × 42 × 103 cm", "Estado": "Ótimo · 2 anos de uso", "Material": "Madeira maciça", "Cômodo": "Cozinha / bancada" }
  },
  {
    id: "GEL-001",
    title: "Geladeira Electrolux Inverter 431 L · Platinum",
    category: "Eletrodoméstico", room: "Cozinha",
    price: 2100, status: "Disponível",
    images: ["img/geladeira/geladeira-01.jpg","img/geladeira/geladeira-02.jpg","img/geladeira/geladeira-03.jpg"],
    description: "Geladeira Electrolux Inverter, 431 L, acabamento platinum. Frost-free, prateleiras retráteis, Ice Max e painel digital. Economia de até 45% no consumo. Modelo de referência: IF55S.",
    specs: { "Dimensões": "70 × 76 × 176 cm (referência)", "Capacidade": "431 L", "Estado": "Ótimo · 2 anos de uso", "Modelo": "Electrolux IF55S (referência)", "Cômodo": "Cozinha" },
    disclaimer: "Voltagem a confirmar no contato."
  },
  {
    id: "FRE-001",
    title: "Freezer horizontal Electrolux 305 L · dupla ação",
    category: "Eletrodoméstico", room: "Cozinha / área de serviço",
    price: 1100, status: "Disponível",
    images: ["img/freezer/freezer-01.jpg","img/freezer/freezer-02.jpg","img/freezer/freezer-03.jpg","img/freezer/freezer-04.jpg","img/freezer/freezer-05.jpg","img/freezer/freezer-06.jpg","img/freezer/freezer-07.jpg"],
    description: "Freezer horizontal Electrolux, branco, 305 L. Função dupla ação: pode operar como freezer ou refrigerador. Etiqueta A de eficiência. Modelo de referência: H300.",
    specs: { "Dimensões": "105 × 76 × 92 cm (referência)", "Capacidade": "305 L", "Estado": "Ótimo · 2 anos de uso", "Modelo": "Electrolux H300 (referência)", "Cômodo": "Cozinha / área de serviço" },
    disclaimer: "Voltagem a confirmar no contato."
  },
  {
    id: "MIC-001",
    title: "Micro-ondas Electrolux 31 L · espelhado",
    category: "Eletrodoméstico", room: "Cozinha",
    price: 450, status: "Disponível",
    images: ["img/microondas/microondas-01.jpg"],
    description: "Micro-ondas Electrolux 31 L com acabamento espelhado e painel digital. Função tira-odor e capacidade familiar. Modelo de referência: MI41S.",
    specs: { "Dimensões": "52 × 43 × 33 cm (referência)", "Capacidade": "31 L", "Estado": "Ótimo · 2 anos de uso", "Modelo": "Electrolux MI41S (referência)", "Cômodo": "Cozinha" },
    disclaimer: "Voltagem a confirmar no contato."
  }
  ]
};
