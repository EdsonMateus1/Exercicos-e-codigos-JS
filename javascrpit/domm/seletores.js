/*
      Sumário
      Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado
      de seletores.
      Sintaxe
      element = document.querySelector(selectors);
      Onde:
      element é um objeto Element.
      selectors é uma string que contém um ou mais 
      seletores CSS separados por vírgulas.



      Retorna uma lista de elementos presentes no documento (usando ordenação 
      em profundidade, pré-ordenada e transversal dos nós do documento) que
      coincidam com o grupo de seletores especificado. O objeto 
      retornado é uma NodeList.
      Sintaxe
      elementList = document.querySelectorAll(selectors);

      onde

      elementList é uma NodeList não-viva (alterações no DOM não refletem na lista) de objetos Element.
      selectors é uma string contendo um ou mais seletores CSS separados por vírgulas.
      A NodeList retornada irá conter todos os elementos do documento que coincidam com os seletores especificados. Se a string selectors conter um CSS pseudoelements, o retorno será uma NodeList vazia.


      */


document.getElementsByClassName('nome da classe');//seleciona por classe retorna um HTMLcolection

document.getElementsByName('nome do id');//seleciona por id

document.getElementsByTagName('nome da tag');//seleciona por tag




document.querySelector('#primero');//passa o tipo e o nome nos parametros  Retorna o primeiro elemento encontrado dentro do documento

document.querySelectorAll('#id');//Retorna uma lista de elementos presentes no documento  retornado é uma NodeLis

Array.from(divis).forEach(elemento => classList.remove('destaque'));//tranformando um html colaction em um array
const divisArray = [...divis] //outra forma de tranformar em array