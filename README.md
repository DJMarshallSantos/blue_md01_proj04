# Simulador de Votação
## _Blue Ed Tech Projeto Extra, Turma 12 - 2022_

Autor: Marcelo A Santos - GH: _DJMarshallSantos_

Tutores Turma 12 - 2022:

Leo Ruiz - GH: _Leoruiz197_

Maria Eduarda de Araújo Cardoso - GH: _dudahcardoso_


## Objetivo

A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no módulo até este momento.


## Características do Projeto
### _O projeto deve ter:_

- Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto)
- Ter uma função chamada autorizaVoto(anoNascimento); (2,0 pontos).
- Ter uma função chamada votacao(autorizacao, voto) que valida  e contabiliza o voto (2,0 pontos).
- Contabilizar os votos de acordo com os significados (3,0 pontos):
    - 1 = Candidato 1
    - 2 = Candidato 2
    - 3 = Candidato 3
    - 4 = Voto Nulo
    - 5 = Voto em Branco
- Ter uma função chamada exibirResultados() que deve mostrar: (2,0 pontos)
    - O total de votos para cada candidato 
    - O total de votos nulos
    - O total de votos em branco
    - Qual candidato venceu a votação

## Tech

Tecnologia usada no código:

- [colors] - Dependência que permite cor no terminal
- [prompt-sync] - Dependência que permite receber input do usuário
- [node.js] - E/S com eventos para back-end


## Instalação
Instalação do node.js
1- Via navegador visite https://nodejs.dev/download/ e baixe o instalador do node.js

2- Sequindo os passos do instalador instale o software

3- Verifique a instalação usando command-prompt ou powershell
```sh
node -v
```
4- Faça o mesmo para NPM
```sh
npm -v
```


Instalação das dependências.

```sh
npm i colors
npm i prompt-sync
```
## Arquivos
```sh
.gitignore
README.md
index.js
legend.png
classes.png
validarAno.png
autorizaVoto.png
listaCandidatos.png
votacao.png
exibirResultados.png
votarNovamente.png
iniciarVotacao.png
main.png
```

## Agradecimentos
Agradeço meus tutores, Leo Ruiz e Maria Eduarda, no módulo 1.

Muito obrigado pelo profissionalismo e domínio do conteúdo e métodologia Blue.

Um obrigado especial a minha esposa, Lindamara Dias, que com sua parceria, paciência e amor fornece apoio veemente.

Luv' ya!

## License
**Público**
