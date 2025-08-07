
# EcoJoinville 🌱

**EcoJoinville** é uma plataforma web voltada para a gestão de coleta seletiva em Joinville, promovendo sustentabilidade e alinhamento com os Objetivos de Desenvolvimento Sustentável (ODS) 11 e 12 da ONU. A plataforma permite que usuários cadastrem-se como parceiros (Ecopontos, Cooperativas ou Pontos de Entrega Voluntária), pesquisem parceiros de coleta seletiva, visualizem detalhes de cada parceiro e façam login para gerenciar preferências.

> **Nota**: Este projeto foi desenvolvido por Dougla Graça como parte das atividades do curso do SENAI, com foco em aprendizado prático de desenvolvimento web e sustentabilidade.

## 🎯 Objetivo do Projeto

Facilitar a gestão de resíduos recicláveis em Joinville, incentivando a participação de cidadãos, empresas e cooperativas na construção de uma cidade mais verde. A plataforma promove a economia circular, engajamento comunitário e redução do impacto ambiental.

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
ecojoinville/
├── src/
│   ├── img/
│   │   ├── logo.jpg
│   │   ├── pmj.png
│   │   ├── lab.png
│   │   └── senai.png
│   ├── scripts/
│   │   ├── home.js
│   │   ├── login.js
│   │   ├── parceiros.js
│   │   └── parceiroDtls.js
│   └── styles/
│       ├── global.css
│       ├── home.css
│       ├── login.css
│       ├── parceiros.css
│       └── detalhe-parceiro.css
├── index.html
├── login.html
├── parceiros.html
├── parceiroDtls.html
└── README.md
```

### Descrição dos Arquivos

- **HTML**:
  - `index.html`: Página inicial com seções sobre objetivos, impacto, ações e formulário de cadastro de parceiros.
  - `login.html`: Página de login com formulário para autenticação.
  - `parceiros.html`: Lista de parceiros com funcionalidade de busca por nome ou bairro.
  - `parceiroDtls.html`: Detalhes de um parceiro específico, incluindo materiais aceitos e informações de contato.

- **CSS**:
  - `global.css`: Estilos comuns a todas as páginas, incluindo variáveis CSS, reset, header, footer e responsividade geral.
  - `home.css`: Estilos específicos para a página inicial (hero, objetivos, impacto, ações e formulário).
  - `login.css`: Estilos para a página de login, com layout de grade para hero e formulário.
  - `parceiros.css`: Estilos para a página de parceiros, incluindo barra de busca e lista de cards.
  - `detalhe-parceiro.css`: Estilos para a página de detalhes do parceiro, com layout centralizado e chips de materiais.

- **JavaScript**:
  - `menuHamburger.js`: Lógica para o menu hamburguer.
  - `home.js`: Validação/envio do formulário de cadastro, com integração à API MockAPI.
  - `login.js`: Lógica para o menu hamburguer e validação do formulário de login, salvando o email no localStorage.
  - `parceiros.js`: Lógica para carregar e filtrar parceiros via API, com renderização dinâmica de cards.
  - `parceiroDtls.js`: Lógica para carregar e exibir detalhes de um parceiro específico, com formatação de materiais aceitos.

- **Imagens**:
  - `logo.jpg`: Logotipo da EcoJoinville.
  - `pmj.png`, `lab.png`, `senai.png`: Logos de parceiros institucionais exibidos no footer.
  - `bg-hero`: Wallpaper da seleção hero da pagina inicial e login.

## 🚀 Como Configurar e Executar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, etc.).
- Conexão com a internet para carregar dependências externas (Google Fonts, Font Awesome) e a API MockAPI.
- Servidor local (opcional) para testes, como `Live Server` no VS Code ou qualquer servidor HTTP (ex.: `http-server`).

### Passos para Configuração

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/ecojoinville.git
   cd ecojoinville
   ```

2. **Estrutura de Diretórios**:
   - Certifique-se de que todos os arquivos estão na estrutura descrita acima.
   - As imagens devem estar na pasta `src/img/`, os scripts em `src/scripts/` e os estilos em `src/styles/`.

3. **Dependências Externas**:
   - O projeto usa:
     - [Google Fonts](https://fonts.google.com/) para `Roboto` e `Montserrat`.
     - [Font Awesome 6.4.0](https://cdnjs.com/libraries/font-awesome) para ícones.
     - [MockAPI](https://mockapi.io/) para simulação de backend (endpoint: `https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros`).

4. **Executar o Projeto**:
   - Abra os arquivos HTML diretamente em um navegador ou use um servidor local:
     ```bash
     npx http-server
     ```
   - Acesse `http://localhost:8080` (ou a porta fornecida) e navegue pelas páginas.

5. **Testar a API**:
   - A API MockAPI é usada para cadastrar e listar parceiros. Certifique-se de que o endpoint está ativo.
   - Para testar o cadastro, preencha o formulário em `index.html` e envie.
   - Para testar a busca, use a barra de pesquisa em `parceiros.html`.
   - Para visualizar detalhes, clique em um parceiro na lista.

## 🎨 Design e Estilização

### Separação do CSS
Para manter o código organizado e reutilizável, os estilos foram divididos em:

- **global.css**: Contém estilos compartilhados, como:
  - Variáveis CSS para cores e transições.
  - Reset de margens/paddings.
  - Estilos para `header`, `nav`, `footer` e responsividade comum (ex.: menu hamburguer em telas menores).
- **Arquivos Específicos**:
  - `home.css`: Estiliza a hero section, seções de objetivos, impacto, ações e formulário de cadastro.
  - `login.css`: Define o layout de grade para a hero section e formulário de login, com foco em acessibilidade.
  - `parceiros.css`: Estiliza a barra de busca e a lista de parceiros em formato de grid.
  - `detalhe-parceiro.css`: Formata a exibição de detalhes do parceiro com chips de materiais e botão de voltar.

### Responsividade
O design é responsivo, adaptando-se a diferentes tamanhos de tela:
- **Desktop**: Layouts com grids e espaçamentos amplos.
- **Tablet (≤768px)**: Ajustes no menu (hamburguer), grids e tamanhos de fonte.
- **Mobile (≤480px)**: Simplificação de layouts, fontes menores e botões ajustados.

### Acessibilidade
- Uso de atributos ARIA (`aria-label`, `aria-live`, `role`) para navegação e formulários.
- Contrastes de cores otimizados (ex.: `--text-white` em fundos escuros).
- Navegação por teclado suportada.

## 🛠️ Funcionalidades

- **Cadastro de Parceiros** (`index.html`):
  - Formulário validado com campos obrigatórios e seleção de tipos de resíduos.
  - Envio de dados para a API MockAPI.
- **Login** (`login.html`):
  - Validação simples de campos (email e senha).
  - Redirecionamento para `parceiros.html` com email salvo no `localStorage`.
- **Lista de Parceiros** (`parceiros.html`):
  - Busca dinâmica por nome ou bairro.
  - Cards clicáveis que levam aos detalhes do parceiro.
- **Detalhes do Parceiro** (`parceiroDtls.html`):
  - Exibição de informações do parceiro (nome, responsável, contato, materiais aceitos).
  - Estilização diferenciada por tipo de parceiro (ECO, COO, PEV).


## 🌍 Parceiros Institucionais

- **Prefeitura de Joinville**
- **Lab365**
- **SENAI**
