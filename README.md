# Story: Entendendo sua pretensão salarial em moedas estrangeiras 

Aproveitando que "já tá todo mundo bem Senior", como diria o grande Erick Wendel, a idéia é fazer
uma aplicação que permita que você insira seu cargo desejado e a sua pretensão salarial em BRL, e retorne a sua pretensão convertida em 3 diferentes moedas, para vocês já terem uma pequena idéia de 
quanto pedir nas entrevistas internacionais! :D 

Tudo isso, claro, enquanto entendemos conceitos importantes para uma Interface de Linha de Comando (CLI), renderização de informações no terminal, internacionalização e ainda de quebra um pouco de ECMAScript modules, como visto no `JS Expect - Módulo 04`, que trata de `Conceitos fundamentais sobre o ciclo de vida do Javascript - parte 02`!

Cada desafio funciona **independentemente**, então você **não precisa** ter completado os desafios anteriores para fazer esse, mas é claro que os desafios anteriores podem servir como uma ajuda extra na realização desse, já que eles não só refletem módulos anteriores do curso, como também trazem abordagens extremamente parecidas com a que vocês verão nesse desafio, então fica aqui a dica com a colinha:

* Assim como no [#Challenge 01](https://github.com/training-erickwendel/jsexpert-exercicio01-pokeapi), nesse desafio vocês vão seguir o pattern de service/repository para consumir uma API e trazer valores úteis para usar na nossa aplicação em terminal.

* E assim como no [#Challenge 02](https://github.com/training-erickwendel/jsexpert-challenge02-lifecycle), nesse desafio vocês terão testes automatizados já implementados para ajudar vocês em parte do desenvolvimento e da estrutura (Afinal toda ajuda é bem-vinda, né? 😉)


## Funcionalidades

### Requisitos
1. Usando a Mock API fornecida no projeto (que você pode conferir tanto diretamente no arquivo `server.json` quanto executando `npm run server` no terminal e conferindo a saída em `localhost:3000/convert` no browser), escolha 3 das `moedas` retornadas para serem as suas moedas utilizadas no desafio (ex.: USD, EUR e RUB).

2. Implemente uma aplicação em linha de comando como a que vocês podem ver no vídeo abaixo, utilizando as `moedas` escolhidas para a realização do desafio:

https://user-images.githubusercontent.com/41883467/147079954-2ae5853d-8f1b-44a6-844f-396634bf7a89.mov

> Nota: Não esqueça que existem alguns testes unitários para te ajudar com o que deve ser feito.

3. Siga os `//@TODO: comments` espalhados pelo projeto para saber onde você deve mexer, e lembre-se que esse desafio envolverá muito mais criatividade que o anterior, então você terá que montar o quebra cabeça e ir descobrindo por onde começar a implementar cada função.

> Dica Wells do dia: Abrace os "Mocks" antes de sair implementando chamadas à API e tudo mais. Entender o fluxo da aplicação e o que deve ser retornado antes de de fato implementar as funções facilita muito a vida, confia :D

4. Note que nesse desafio também existem testes te ajudando a ter um guia quanto às chamadas à API e ao fluxo principal (que é o fluxo mais mapeado do processo), mas a surpresa da implementação do terminal de fato fica por sua conta.

> Nota: Não são necessárias alterações nos testes existentes. Eles já estão prontos e servem de guia durante a execução do desafio

### Testes

Seguindo o padrão que já usamos anteriormente, é esperado que com o desafio pronto, ao rodar `npm run test` todos os testes devem passar. O resultado deve ser algo parecido com isso:

![image](https://user-images.githubusercontent.com/41883467/147080202-a47b8873-6e00-4d4e-b94b-a5e95933c50b.png)

### Extras

* [ ] Desafio opcional: Note que não existem testes criados para o `terminal.js`. Então, caso queira, sinta-se livre para testar os métodos criados por você para a resolução desse desafio. 

> Dica: Para facilitar sua jornada nesses testes, lembre que não só Injeção de dependências é vida em termos de testes automatizados, mas as variáveis de referência também (como é o caso dos `this.print`, `this.data` e `this.terminal`), então centrar seus testes nessas variáveis pode ser uma boa idéia.

## Dicas

Sinta-se livre pra desenvolver sua solução da melhor maneira possível, e caso já queira uma dica sobre como organizar as idéias, aqui vai:

- Dê uma olhada na `entity` já provida para ter uma idéia de qual será o tipo de dado esperado nesse processo (achamos uma boa idéia prover a estrutura base desde o início justamente por isso :D)
- Confira também as moedas existentes na Mock API provida (conforme tutorial nos requisitos)
- Lembre que cada `@TODO: comment` marca um trecho da aplicação onde você terá que mexer, e sinta-se livre para descobrir a melhor sequência para implementar cada método
- Fique atento ao comportamento esperado dos métodos que possuem testes
- Não esqueça de conferir as aulas do curso denovo para fixar mais ainda os conhecimentos e ver como o Erick implementa o terminal

### Arquitetura e onde trabalhar

```
project
│   README.md
│   package.json
│
└───src
│   │  index.js
│   │  terminal.js
│   │  server.json
│   │  
│   └───config
│   │   │   language.js    
│   │   │   terminal.js    
│   │  
│   └───entity
│   │   │   Income.js    
│   │
│   └───repository
│   │   │   conversionRepository.js    
│   │  
│   └───service
│   │   │   IncomeService.js    
│   
└───test
│   │  
│   └───mocks
│   │   │   convert-response.js 
│   │   │   conversionRepository.mock.js 
│   │   │   valid-income.js 
│   │  
│   └───unit
│   │   │   conversionRepository.test.js 
│   │   │   IncomeService.test.js     
│         
```

### Checklist features

* [ ] Deve identificar o que está faltando no arquivo `config/terminal.js`

* [ ] Deve implementar a internacionalização no arquivo `entity/Income.js`

* [ ] Deve implementar os métodos existentes em `repository/conversionRepository`, assegurando que os testes em `conversionRepository.test.js` estejam funcionando.

* [ ] Deve implementar os métodos existentes em `service/IncomeService.js`, assegurando que os testes em `IncomeService.test.js` estejam funcionando.

* [ ] Deve criar novos métodos e organizar a estrutura de criação do terminal em `terminal.js`

* [ ] Deve entender e organizar o fluxo de chamada de funcões do terminal dentro do `mainLoop` em `index.js`

## Submissão

1. Crie um fork deste repositório e modifique o README.md inserindo o seu nome no início do arquivo.

2. Instale as dependências usando `npm i` e garanta que os testes rodam normalmente com `npm run dev`

> Nota: Como a idéia é que você implemente os códigos a fim de fazer os testes passarem e a saída ficar como no vídeo mencionado um pouco acima nesse README, a princípio todos os testes estarão quebrando, então não se assuste. :) 

3. Implemente cada uma das funções marcadas com um `//@TODO: comment` (e não se esqueça de remover esses comentários uma vez que concluir a implementação)

4. Garanta que todos os testes estejam rodando e, caso queira, conclua o desafio opcional mencionado acima. 

5. Envie o link no canal `#desafios-jsexpert` da nossa comunidade no discord.

## Até quando?

Se você está pegando esse desafio na estréia, corre lá e envia pra gente até *Quarta-feira, 12 de janeiro de 2022 (12/01/2022)*!
