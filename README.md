# Bazar de mudança — Unicco → Grand Mond

Site estático (single-page) para o catálogo de venda dos móveis e eletrodomésticos da mudança de junho/2026.

## Estrutura

```
Catálogo de produtos/
├── index.html              ← o site (HTML + CSS + JS da interface)
├── produtos.js             ← OS DADOS do catálogo (preços, fotos, descrições, config)
├── admin.html              ← painel de edição (gera o produtos.js) — uso local
├── catalogo-curadoria.xlsx ← curadoria interna (NÃO publicada — está no .gitignore)
├── img/                    ← imagens (uma subpasta por produto)
└── README.md               ← este arquivo
```

A interface (`index.html`) é fixa. **O que muda no dia a dia são só os dados em `produtos.js`** — e você nunca precisa abrir esse arquivo na mão: use o `admin.html`.

## Como testar localmente

Dê **duplo-clique no `index.html`** — abre direto no navegador (os dados em `produtos.js` são
carregados por `<script src>`, que funciona em arquivo local). O `admin.html` também abre por duplo-clique.

Se algum navegador bloquear, rode um servidor local: `python -m http.server 8000` na pasta e acesse `http://localhost:8000`.

## Como adicionar / excluir / editar produtos (sem mexer em código)

1. Coloque as fotos novas em `img/<produto>/`.
2. Abra o **`admin.html`** no navegador.
3. Use os botões: **+ Novo produto**, **✎ Editar**, **🗑 excluir**, **↑ ↓** (reordenar),
   **★** (destaque da home) e o seletor de **status** (Disponível / Reservado / Vendido / Aguardando fotos).
4. Clique em **⬇ Baixar produtos.js** e **substitua** o `produtos.js` na pasta do site.
5. Suba a pasta para o GitHub (ou Netlify) — o site atualiza.

> Marcar como **Vendido** deixa o card apagado e o joga para o fim da lista, automaticamente.

As **Configurações do site** (no topo do admin) controlam o número de WhatsApp, o bairro e o
e-mail que recebe os leads — também salvos no `produtos.js`.

## Captação de leads por e-mail (além do WhatsApp)

A seção **"Tenho interesse"** envia o formulário para o seu e-mail via **FormSubmit.co** (grátis, sem backend).

- O destino é o campo `leadEmail` no `produtos.js` (edite pelo admin). Padrão: `bclima7790@gmail.com`.
- **Ativação (uma vez só):** no primeiro envio, o FormSubmit manda um e-mail de confirmação para
  esse endereço. Clique no link de confirmação — depois disso os leads chegam normalmente.
- Tem proteção anti-spam (honeypot) e o assunto chega como *"Novo interesse — Bazar de mudança"*.

## Outras melhorias de experiência

- **Link direto por produto:** abrir um item muda a URL para `...#item=SOF-001`. Botão **🔗 Compartilhar**
  no detalhe copia (ou abre o compartilhamento do celular) esse link — ótimo para mandar no WhatsApp/Instagram.
- **Contador** de itens disponíveis no título do catálogo.
- **Vendidos/reservados** ficam visualmente apagados e vão para o fim.

## Como publicar (GitHub Pages — grátis)

Este projeto já está ligado ao repositório `https://github.com/bclima779017/bazar-mudanca`.
Para publicar uma atualização:

```
git add -A
git commit -m "Atualiza catálogo"
git push
```

Depois, em **Settings → Pages**, selecione branch `main` e pasta `/ (root)`.
Em ~1 minuto: `https://bclima779017.github.io/bazar-mudanca`.

Alternativa sem Git: arraste a pasta inteira em [netlify.com/drop](https://app.netlify.com/drop).

## Domínio amigável (custom domain) no GitHub Pages

O endereço padrão (`bclima779017.github.io/bazar-mudanca`) funciona, mas dá para usar um domínio próprio:

1. **Registre um domínio** (ex.: `bazardamudanca.com.br`) num registrador — Registro.br (.br),
   Namecheap, GoDaddy, Cloudflare etc. Custo típico: ~R$ 40/ano (.com.br) a ~US$ 10/ano (.com).
2. No GitHub: **Settings → Pages → Custom domain**, digite o domínio e salve.
   Isso cria um arquivo `CNAME` no repositório.
3. No painel do registrador, aponte o DNS:
   - **Domínio raiz** (`bazardamudanca.com.br`): registros **A** para os IPs do GitHub Pages —
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - **ou subdomínio** (`www.bazardamudanca.com.br`): um registro **CNAME** apontando para
     `bclima779017.github.io`.
4. Volte em Pages e marque **Enforce HTTPS** (após o DNS propagar, de minutos a ~24 h).

Mais barato/rápido ainda: publicar no **Netlify** e usar um subdomínio grátis bonitinho
(`bazar-mudanca.netlify.app`) — renomeável nas configurações do site, sem comprar domínio.

## Boas práticas já aplicadas

- Mobile-first; lazy-load de imagens; modal acessível (foco, ESC, setas); `alt` em todas as imagens.
- WhatsApp flutuante e mensagens pré-preenchidas por produto.
- Schema.org `Product` (JSON-LD) e Open Graph para SEO/compartilhamento.
- Dados separados da interface (`produtos.js`) e editáveis sem código (`admin.html`).
