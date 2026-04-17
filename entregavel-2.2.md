# Entregável 2.2 - Linked list!

Assuma a seguinte classe de lista encadeada:

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.size++;
    return value;
  }

  pop() {
    if (this.head === null) {
      return null;
    }

    if (this.head.next === null) {
      this.head = null;
      this.size = 0;
      return null;
    }

    let currentNode = this.head;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }

    const removedValue = currentNode.next.value;
    currentNode.next = null;
    this.size--;
    return removedValue;
  }

  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  toArray()

  removeAt(value) {}

  getSize() {}

  insertAt(value, index) {}

  getAt(index) {
    if (index < 0 || index > this.size - 1) {
      return null;
    }

    let currentIndex = 0;
    let currentNode = this.head;

    while (index !== currentIndex) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode.value;
  }

  reverse() {}

  clear() {}
}
```

Agora, faça o seguinte

1. Implemente os métodos que faltam;
2. Crie uma API que responda para cada um dos métodos da lista (exceto print). Utilize os seguintes métodos e status HTTP:

- Se não modifica nada, método GET
- Se adiciona, método POST
- Se remove, método DELETE
- Se modifica, método PATCH
- Se sobrescreve, método PUT

- Se deu tudo certo, status 200
- Se não encontrou, 404
- Se criou algo novo com sucesso, 201
- Se a requisição foi mal construída 422
- Se quebra a integridade da lista, 409

Ao finalizar, envie o link do seu repositório no GitHub, com o arquivo de especificação do Bruno.

Como restrição adicional, permita somente o registro de valores dos tipos, string, number, boolean e null.
