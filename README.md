# 📌 TecBoard

Mural de eventos de tecnologia feito em **React**. Você cadastra um evento (nome, imagem de capa, data e tema) e ele aparece na hora no mural, agrupado pelo tema certo: Front-End, Back-End, DevOps, Inteligência Artificial, Data Science ou Cloud.

**🔗 Acesse:** _(coloque aqui o link do Vercel)_

<!-- Coloque um print da tela aqui: arraste a imagem para o editor do GitHub e ele gera o link -->

> Projeto desenvolvido durante a formação de React da Alura.

---

## Funcionalidades

- Formulário para criar eventos com nome, capa, data e tema
- Eventos agrupados automaticamente por tema
- Temas sem eventos ficam escondidos, então o mural só mostra o que tem conteúdo
- Data exibida no formato brasileiro (dd/mm/aaaa)

## Tecnologias

- React 19
- Vite
- JavaScript (ES Modules)
- CSS separado por componente
- ESLint

## O que pratiquei neste projeto

- **Componentização:** a interface é dividida em 10 componentes pequenos e reutilizáveis
- **Props e `children`:** componentes como `Label`, `Botao` e `CampoDeFormulario` recebem conteúdo de fora
- **Estado com `useState`:** a lista de eventos vive no `App` e é atualizada sem recarregar a página
- **Comunicação entre componentes:** o formulário avisa o `App` quando um evento é criado, por uma função recebida via props (`aoSubmeter`)
- **Formulários no React 19:** uso da prop `action` com `FormData` para ler os campos
- **Renderização de listas:** `map`, `filter` e `some` para montar o mural por tema

## Estrutura

```
src/
├── App.jsx                     # estado dos eventos e montagem do mural
└── componentes/
    ├── Banner/                 # imagem de destaque no topo
    ├── FormularioDeEvento/     # formulário de criação de eventos
    ├── TituloFormulario/
    ├── CampoDeFormulario/      # agrupa label + campo
    ├── CampoDeEntrada/         # input reutilizável
    ├── Label/
    ├── ListaSuspensa/          # select com os temas
    ├── Botao/
    ├── Tema/                   # título de cada seção do mural
    └── CardEventos/            # card de cada evento
```

## Como rodar

```bash
git clone https://github.com/isabellapiffer/tecboard.git
cd tecboard
npm install
npm run dev
```

Depois é só abrir o endereço que aparecer no terminal (normalmente `http://localhost:5173`).
