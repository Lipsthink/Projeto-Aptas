# Projeto Aptas

Projeto web desenvolvido para uma ONG fictícia chamada **Projeto Aptas**, com o objetivo de apresentar a iniciativa, seus projetos e disponibilizar um formulário para pessoas interessadas em participar.

O projeto foi desenvolvido como atividade prática de desenvolvimento Front-end, aplicando conceitos de HTML, CSS, JavaScript, acessibilidade, controle de versão e organização de um projeto web.

## Apresentação do projeto

O Projeto Aptas atua no resgate, cuidado e encaminhamento responsável de animais em situação de abandono.

A aplicação possui páginas para apresentação da ONG, apresentação dos projetos e cadastro de pessoas interessadas em participar.

## Tecnologias utilizadas

- **HTML5:** estrutura e conteúdo das páginas, utilizando elementos semânticos.
- **CSS3:** estilos, organização visual e estados de validação dos campos.
- **JavaScript:** interações, validações, máscaras de entrada, navegação e armazenamento dos dados.
- **JavaScript ES6 Modules:** organização do código em arquivos e módulos separados.
- **LocalStorage:** armazenamento local dos dados preenchidos no formulário.
- **Git:** controle de versões do projeto.
- **GitHub:** hospedagem do repositório e gerenciamento de Issues, Milestones e Pull Requests.

## Funcionalidades

- Página inicial com apresentação do Projeto Aptas.
- Página com os projetos da ONG.
- Formulário para cadastro de participantes.
- Validação dos campos do formulário.
- Máscaras para CPF, telefone e CEP.
- Armazenamento do cadastro no `localStorage`.
- Recuperação dos dados salvos ao acessar novamente o formulário.
- Navegação entre as páginas.
- Melhorias de acessibilidade na navegação e nas descrições alternativas das imagens.

## Estrutura do projeto

```text
Projeto ONG/
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── style.css
├── imagens/
│   └── aptos.jpg
├── js/
│   ├── script.js
│   ├── formulario.js
│   ├── mascaras.js
│   ├── navegacao.js
│   └── storage.js
└── README.md