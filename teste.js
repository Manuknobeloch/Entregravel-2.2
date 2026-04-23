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
    // Adiciona no final
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.size++;
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
    // Deleta o ultimo
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
    //Não precisa API
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  toArray() {
    //toArray
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
    // Deleta posição especifica
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

  getSize() {
    // Mostra tamanho da lista
    return this.size;
  }

  insertAt(value, index) {
    // Adiciona na posição especifica
    if (index < 0 || index > this.size) {
      return null;
    }

    const node = new Node(value);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this.size++;
      return value;
    }

    let current = this.head;
    let i = 0;

    while (i < index - 1) {
      current = current.next;
      i++;
    }

    node.next = current.next;
    current.next = node;
    this.size++;
    return value;
  }

  getAt(index) {
    // Mostra valor especifico
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

  reverse() {
    //Reverse
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

  clear() {
    // limpar lista
    this.head = null;
    this.size = 0;
  }
}

// API

// Adiciona no final
app.post("/lista", (req, res) => {
  const { value } = req.body;
  list.add(value);
  res.status(201).json({ message: "Adicionado", list: list.toArray() });
});

// Adiciona em posição especifica
app.post("/lista/index", (req, res) => {
  const { value, index } = req.body;
  const result = list.insertAt(value, index);

  if (result === null)
    return res.status(422).json({ error: "Índice inválido" });

  res.status(200).json({ list: list.toArray() });
});

// Deleta o ultimo
app.delete("lista", (req, res) => {
  const removed = list.pop();
  if (removed === null)
    return res.status(404).json({ error: "Dados não encontrados" });

  res.status(200).json({ removed, list: list.toArray() });
});

// Deleta posição especifica
app.delete("lista/:index", (req, res) => {
  const removed = list.removeAt(Number(req.params.index));

  if (removed === null)
    return res.status(404).json({ error: "Dados não encontrados" });

  res.status(200).json({ removed, list: list.toArray() });
});

// Tamanho da lista
app.get("/lista/size", (req, res) => {
  const size = list.getSize();
  res.json({ size });
});

// Mostra valor especifico
app.get("/list/:index", (req, res) => {
  const value = list.getAt(Number(req.params.index));
  if (value === null) return res.status(404).json({ error: "Não encontrado" });
  res.json({ value });
});

// Limpar lista
app.delete("/list/clear", (req, res) => {
  list.clear();
  res.json({ message: "Lista limpa" });
});

// Reverse
app.post("/reverse", (req, res) => {
  lista.reverse();

  res.json({
    mensagem: "Lista invertida",
    lista: lista.toArray(),
  });
});

// ToArray
app.get("/list", (req, res) => {
  res.json(lista.toArray());
});

