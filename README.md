# Bazar de mudança — Unicco → Grand Mond

Site estático (single-page) para o catálogo de venda dos móveis e eletrodomésticos da mudança de junho/2026.

## Estrutura

```
Catálogo de produtos/
├── index.html              ← site (autocontido: HTML + CSS + JS inline)
├── catalogo-curadoria.xlsx ← curadoria editável (preços, descrições, atributos)
├── img/                    ← imagens otimizadas (max 1400px, JPEG 82%, EXIF normalizado)
│   ├── sofa-retratil/
│   ├── poltronas/
│   ├── mesa-jantar/
│   └── ...
└── README.md               ← este arquivo
```

## Como testar localmente

1. Dê duplo-clique no `index.html` — abre direto no navegador.
2. Ou rode um servidor local: `python -m http.server 8000` na pasta e acesse `http://localhost:8000`.

## Antes de publicar — ajustes obrigatórios

Edite no topo do `<script>` em `index.html`:

```js
const CONFIG = {
  whatsapp: "5511999999999",     // ← seu número com DDI+DDD, só dígitos
  bairro:   "(seu bairro/cidade)", // ← onde fica o apartamento (para retirada)
};
```

E revise os preços e descrições no array `PRODUCTS` (mesmo arquivo) — ou edite primeiro no `catalogo-curadoria.xlsx` e refaça o array com os valores finais.

## Como publicar (GitHub Pages — grátis)

1. Crie repositório no GitHub: `bazar-mudanca` (público).
2. Suba toda esta pasta (`index.html` + `img/` + `README.md`).
3. Em **Settings → Pages**, selecione branch `main` e pasta `/ (root)`.
4. Em ~1 minuto: `https://<seu-usuário>.github.io/bazar-mudanca`.

Alternativa: arraste a pasta inteira em [netlify.com/drop](https://app.netlify.com/drop) — gera um link em segundos.

## Como adicionar/editar produtos

1. Coloque novas fotos em `img/<categoria>/`.
2. Adicione/edite um objeto em `PRODUCTS` no `index.html`.
3. Campos: `id, title, category, room, price, status, images, description, specs, disclaimer?, priceNote?, featured?`.
4. `status` aceita: `Disponível` | `Reservado` | `Vendido` | `Aguardando fotos`.

Para marcar como vendido, basta alterar `status: "Vendido"` — o card mostra badge.

## Boas práticas já aplicadas

- Mobile-first (testado em larguras de 320px+).
- Lazy-load de imagens (`loading="lazy"`).
- Imagens otimizadas (~150–300 KB cada, EXIF corrigido).
- Modal acessível (foco, ESC para fechar, navegação por setas).
- `alt` em todas as imagens.
- Botão flutuante de WhatsApp persistente.
- Mensagens pré-preenchidas por produto.
- Schema.org `Product` (JSON-LD) para SEO.
- Open Graph para compartilhamento (preview no WhatsApp/Instagram).
