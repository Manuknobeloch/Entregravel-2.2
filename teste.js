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

  toArray() {
    let array = [];

    if (this.head === null) {
      return array;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  removeAt(index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    if (index === 0) {
      const removed = this.head.value;
      this.head = this.head.next;
      this.size--;
      return removed;
    }

    let current = this.head;
    let i = 0;

    while (i < index - 1) {
      current = current.next;
      i++;
    }

    const removed = current.next.value;
    current.next = current.next.next;
    this.size--;

    return removed;
  }

  getSize() { //tamanho da lista
    return this.size;
  }

  insertAt(value, index) { } // wendrio

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

  reverse() { //inverte a ordem 
    let anterior = null;
    let atual = this.head;
    let proximo = null;

    while (atual !== null) {
      proximo = atual.next;
      atual.next = anterior;
      anterior = atual;
      atual = proximo;
    }

    this.head = anterior;
  }

  clear() { //limpa toda a lista 
    this.head = null;
    this.size = 0;
  }
}
