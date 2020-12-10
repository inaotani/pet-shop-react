# Pet Shop

**Projeto desenvolvido por:**
Ingrid Otani, NUSP 10818971
Gabriel Muniz Morão, NUSP 7236785
Gabriel Sgarbi Cocenza, NUSP 6448118
Stella Granatto Justo, NUSP 9558882

O projeto também pode ser visto através do link [criado no vercel](https://pet-shop-react.vercel.app/).

## O Projeto

O objetivo deste projeto consiste na criação de um sistema voltado para o funcionamento de um petshop online. Neste projeto serão implementadas as funcionalidades necessárias tanto para o funcionamento do ecommerce do lado do usuário-cliente como do lado do usuário-administrador do sistema.

Para melhor organização o backend e o frontend foram desenvolvidos separadamente, neste repositório está os arquivos do fronend, realizando a integração com o backend através de API's.

## Como rodar o projeto da parte FrontEnd

### Dependências:

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)

### Passo a passo:

- Instalar todas as dependências
- Clonar o repositório git `git clone`
- Na pasta do projeto instalar os pacotes `yarn install` ou `npm install`
- Após instalado os pacotes, rodar o projeto `yarn start` ou `npm start`

## Como rodar o projeto da parte FrontEnd / Sitemap

### Usuário comum:

**Página inicial** carousel com banner, banner de oferta e lista de todos os produtos.
**Página de ração** com a lista dos produtos.
**Página de resultado de busca** com a lista dos produtos a partir de uma busca do usuário.
**Página do produto** com informações do produto e a opção de adicionar no carrinho.
**Página do carrinho** com os produtos adicionados e a possibilidade de removê-los. Caso o usuário esteja logado é enviado para a página de endereço de pagamento, caso contrário, para a página de login.
**Página de pagamento** para o usuário informar as informações do cartão e finalizar a transação. Caso tudo esteja correto, o usuário é enviado para a página da sua conta que possui também histórico de pedido.
**Página da conta** mostra as informações do usuário logado e histórico de seus pedidos.
**Página de login** para o usuário e o administrador realizar o acesso.
**Página de cadastro** para a criação de um novo usuário.

### Administador:

**Estoque** permitindo a listagem e remoção do produção. com links para edição e adição de produtos .
**Adição de produto** permitindo a adição de novos produtos.
**Edição de produto** permitindo a edição de produtos já existentes.

## Tecnologias

No frontend, foi utilizado para desenvolver a aplicação o **ReactJS** e três packages específicas: **Font Size Changer** para auxiliar na acessibilidade e o usuário conseguir alterar o tamanho das fontes ,**React Router** para a criação das páginas e **File Base 64** para conversão de imagem em código na base 64.

As informações do carrinho e se o usuário está logado são armazenados em **LocalStorage**.

## Testes

Para a testar as telas e funcionalidades, realizamos rodadas de QA entre os integrantes para verificação visual e de códigos a cada componente e página criada. A documentação dos testes pode ser verificado neste [documento de QA](https://docs.google.com/spreadsheets/d/1InLoyNTysLR2WNzLSeoBc58Ca3gsP2v68KHAvRJx5_k/edit?usp=sharing).

## Problemas encontrados ao longo de projeto

Encontramos problemas para juntar os códigos e resolver os conflitos gerados. Sendo assim, resolvemos centralizar o envio dos códigos para apenas um dos membros do grupo mais experiente no uso de React, que fez a junção dos elementos de forma padronizada e subiu a aplicação no Github.

Além disso, tivemos dificuldades para alinhamento do backend e frontend, já que ambos foram desenvolvidos em paralelo, resolvemos se comunicando constantemente e documentação dos campos para as request.
