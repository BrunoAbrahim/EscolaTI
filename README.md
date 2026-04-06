<div align="center">
  <img src="./assets/logotipoGradiente.png" width="280" />

  <h1>O mercado de moda criado para a sua cidade.</h1>

  <p>Descubra, compre e receba roupas de lojas da sua cidade.</p>

  <br />

  <img src="https://skillicons.dev/icons?i=react,typescript,java,spring,postgresql,redis,docker" />

  <br /><br />

  <a href="https://www.figma.com/design/36njOKWxqVbjBS5M8ZAZ3f/Vitryne">
    <img src="https://img.shields.io/badge/Protótipo-Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" />
  </a>
  <a href="./docs">
    <img src="https://img.shields.io/badge/Documentação-/docs-9530D9?style=flat-square" />
  </a>
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=flat-square" />
</div>

---

## Sobre

O **Vitryne** é uma plataforma de marketplace regional de moda desenvolvida como um projeto para **Escola de TI**.

A ideia é simples: pequenas lojas de moda têm produtos incríveis, mas quase nenhuma presença digital. O Vitryne resolve isso entregando uma vitrine digital completa para o lojista e uma experiência de compra local com delivery, para o consumidor.

> Pensa no iFood — mas para as lojas de roupa da sua cidade.

- 🏪 **Invisibilidade local** — lojas sem presença digital perdem vendas para grandes marketplaces todos os dias
- 📦 **Fretes e impostos** — consumidores pagam caro importando quando há opções equivalentes perto de casa
- 🔍 **Falta de centralização** — não existe plataforma regional com busca inteligente, delivery e devolução integrada

---

## Como funciona

| Perfil | Plataforma | O que faz |
|---|---|---|
| 🛒 Consumidor | Web + Mobile | Descobre, compra e acompanha pedidos |
| 🏬 Lojista | Web | Gerencia catálogo, pedidos e financeiro |
| 🛵 Entregador | Mobile | Coleta nas lojas e entrega ao consumidor |

```
Consumidor busca por categoria, tamanho, preço ou proximidade
  → Adiciona ao carrinho e finaliza o pagamento
    → Lojista recebe e confirma em até 30 minutos
      → Entregador coleta na loja e entrega
        → Consumidor pode devolver dentro do prazo, com reembolso automático
```

---

## Stack


| Camada   | Tecnologias                                                                                                                        |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Mobile   | <img src="https://skillicons.dev/icons?i=react,typescript" height="24" /> React Native · Expo · TypeScript                         |
| Frontend | <img src="https://skillicons.dev/icons?i=react,typescript" height="24" /> React · TypeScript                                       |
| Backend  | <img src="https://skillicons.dev/icons?i=java,spring,postgresql,redis" height="24" /> Java 17 · Spring Boot 3 · PostgreSQL · Redis |
| Infra    | <img src="https://skillicons.dev/icons?i=docker,githubactions" height="24" /> Docker · GitHub Actions                              |
|          |                                                                                                                                    |


**Integrações externas**

| Serviço | Uso |
|---|---|
| Mercado Pago / Stripe | Gateway de pagamento |
| Firebase Cloud Messaging | Notificações push |
| Google Maps API | Geolocalização e busca por proximidade |
| WebSocket / STOMP | Tempo real > pedidos e chat |

---

## Documentação

| Artefato | Link |
|---|---|
| 🎨 Protótipo de Alta Fidelidade | [Abrir no Figma](https://www.figma.com/design/36njOKWxqVbjBS5M8ZAZ3f/Vitryne) |
| 🎯 Enquadramento do Problema | [Ver](/docs/EnquadramentoDoProblema.md) |
| 👥 Personas e Necessidades | [Ver](/docs/PersonaseNecessidades.md) |
| 📝 Requisitos e Regras de Negócio | [Ver](/docs/RequisitoseRegrasNegocio.md) |
| 🔀 Mapa de Fluxos | [Ver](/docs/MapaDeModelagemDeFluxos.md) |
| 🗂️ Mapa de Dados | [Ver](/docs/MapaDeDados.md) |
| 📊 Diagrama de Casos de Uso | [Ver](/docs/DiagramaCasoDeUso.pdf) |
| 📐 Diagrama de Classes | 🔄 Em andamento |

---

## Time

| Membro |
|---|
| Bruno Valério Abrahim |
| Gabriel Rodrigues Soares |
| João Fernando Ehlers |
| Leonardo Xavier Rodrigues |
| Hugo Vinícius Fonseca Zuin |
| Henrique Pacheco Alves |
