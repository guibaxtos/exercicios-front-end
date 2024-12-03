class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        console.log(`${this.nome} está emitindo um som.`);
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    emitirSom() {
        console.log(`${this.nome} está latindo!`);
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade); 
        this.cor = cor;
    }

    emitirSom() {
        console.log(`${this.nome} está miando!`);
    }
}

const rex = new Cachorro("Rex", 3, "Pastor Alemão");
const luna = new Gato("Luna", 2, "Cinza");
const bobby = new Cachorro("Bobby", 5, "Golden Retriever");