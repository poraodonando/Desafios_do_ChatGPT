# 🚀 Projeto JavaScript #18 — Closures e Estado Privado

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Nível](https://img.shields.io/badge/Nível-Intermediário%20%2F%20Avançado-blue)
![Tema](https://img.shields.io/badge/Tema-Closures-orange)

---

# 📌 Descrição Geral

Este projeto foi desenvolvido como parte da minha trilha prática de estudos em JavaScript.

O objetivo foi compreender profundamente o funcionamento de **Closures**, um dos conceitos fundamentais da linguagem, permitindo que funções internas preservem acesso a variáveis externas mesmo após o encerramento da função principal.

Foram desenvolvidos dois mini projetos:

* Sistema de carteira dinâmica
* Contador privado com closure

---

# 🎯 Objetivos do Projeto

Praticar conceitos avançados de JavaScript relacionados a:

* Escopo de variáveis
* Encapsulamento
* Persistência de estado
* Closures
* Funções retornando funções
* Estado privado sem variáveis globais

---

# 🧠 Conceitos Praticados

## 1. Escopo Léxico

Compreender onde variáveis existem e onde podem ser acessadas.

Exemplo:

```javascript
function teste(){
   let valor = 10;
}
```

A variável existe apenas dentro da função.

---

## 2. Closures

Permite que funções internas continuem acessando variáveis externas.

Exemplo:

```javascript
function criar(){

   let contador = 0;

   return function(){

      contador++;

      return contador;
   }
}
```

---

## 3. Encapsulamento

Criar dados privados sem expor diretamente variáveis globais.

---

# Projeto 1 — Carteira Dinâmica

Função que mantém saldo interno acumulado entre múltiplas chamadas.

## Código

```javascript
function criarCarteira(){

   let saldo = 0;

   function carteira(valor){

      saldo += valor;

      return saldo;
   }

   return carteira;
}

const carteira = criarCarteira();

console.log(carteira(100));
console.log(carteira(50));
console.log(carteira(25));
```

## Saída

```text
100
150
175
```

---

# Projeto 2 — Contador Privado

Função que incrementa um valor interno utilizando closure.

## Código

```javascript
function criarContador(){

   let valor = 0;

   function contador(){

      valor++;

      return valor;
   }

   return contador;
}

const contador = criarContador();

console.log(contador());
console.log(contador());
console.log(contador());
```

## Saída

```text
1
2
3
```

---

# 📚 Aprendizados Obtidos

Durante o projeto, foram consolidados os seguintes aprendizados:

✔ Diferença entre escopo local e global
✔ Persistência de variáveis entre execuções
✔ Uso de funções internas
✔ Manipulação de estado privado
✔ Entendimento interno do funcionamento do JavaScript
✔ Primeiros passos em padrões utilizados profissionalmente

---

# 🔥 Aplicações Reais

Closures são amplamente usados em:

* Carrinho de compras
* Sistemas bancários
* Debounce
* Throttle
* Hooks do React
* Sistemas de autenticação
* Cache de funções
* Middlewares
* Bibliotecas JavaScript

---

# 🚀 Próximos Passos

Continuar avançando para conceitos mais profundos:

* Classes
* Prototype
* this
* Async/Await
* Promises
* Fetch API
* Manipulação de DOM
* Arquitetura de código

---

# 💡 Reflexão Final

Neste projeto comecei a compreender não apenas como escrever código, mas como o JavaScript funciona internamente.

A compreensão de closures representa um passo importante na evolução de um desenvolvedor JavaScript mais profissional.

---

# 🏷️ Tags

JavaScript • Closures • Scope • Encapsulation • Frontend Development • Web Development • ES6
