# Sublime

Fashion Industry React web application

## Boas Práticas com o GIT

Não faça commits na branch `Main`, crie uma branch secundária (com nome seguindo o padrão `feature/nome-curto-da-funcionalidade`) para cada nova funcionalidade que você for criar. Ao finalizar, solicite um Pull Request dessa branch pelo Github.

A ideia é que você faça vários Pull Requests ao longo do projeto, para que as mudanças sejam compartilhadas entre cada integrante do grupo mais rápidamente.

Após um Pull Request ser criado, mesmo que ainda não tenha sido concluído, evite reusar a mesma branch e crie uma nova para novos códigos que for escrever para o projeto (a exceção aqui é para correções de código para aquele mesmo Pull Request que podem ser necessárias).

Ao realizar um commit, escreva uma descrição **significativa** e curta do que foi feito nele sempre escrevendo no passado o que já foi feito (ex: `adicionado produto X na lista de produtos da página Y`).

Evite commits com muitos arquivos distintos, agrupe em pequenos contextos correlatos. Por exemplo, faça um commit para alterações que você fez de um card de produto e outro para alterações no header das páginas mesmo que ambas as mudanças tenham sido feitas no mesmo dia e juntas.

Sempre que for criar um Branch novo, garanta que ele tenha o código atualizado da `Main`. Ou seja, troque a branch ativa no seu projeto para a branch `Main` (pelo vscode ou usando o comando no terminal: `git checkout main`) e em seguida crie o novo branch.

Antes de criar o seu Branch, faça um `git fetch` e um `git pull` para baixar os commits mais recentes que podem não estar no seu computador ainda.

Sempre avise no grupo ao realizar `push` dos commits ou ao criar um Pull Request no repositório do github.

## Páginas do Projeto

- [] Home
- [] Feminino
- [] Masculino
- [] Bolsas
- [] Outlet
- [] Lookbook
- [] Carrinho
- [] Checkout

### Conteúdo das Páginas

[Sites de Referências](https://www.behance.net/collection/203336973/Fashion)

#### Página Inicial

Imagem em destaque com texto chamativo e descrição curta sobre a identidade do site

#### Feminino, Masculino, Bolsas e Outlet

Listagem de cards dos produtos sem filtros (as 4 páginas são idênticas em termos de layout, somente mudando o tipo de produto sendo ofertado)

No Outlet estarão as roupas e bolsas da coleção da temporada anterior em promoção

#### Lookbook

Página com layout diferente das demais, apresentação uma prévia da coleção da temporada seguinte como se fosse uma revista

#### Carrinho

Lista de todos os produtos que foram adicionados ao carrinho com possibilidade de adicionar ou remover unidades de cada produto

Apresenta também um input para adicionar o CEP para cálculo do frete

#### Checkout

Formulário de pagamento com as formas de pagamento disponíveis (cartão, boleto, pix...) e um resumo dos itens adicionados ao carrinho para análise
