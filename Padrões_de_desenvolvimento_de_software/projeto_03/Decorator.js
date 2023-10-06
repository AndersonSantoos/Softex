// Classe base representando o sanduíche
class Sanduiche {
    getDescricao() {
        return "Sanduíche de Carne";
    }

    getCusto() {
        return 7.49;
    }
}

// Implementação da classe Sanduíche de Frango Assado
class FrangoAssado extends Sanduiche {
    constructor() {
        super();
    }

    getDescricao() {
        return "Sanduíche de Frango Assado";
    }

    getCusto() {
        return 4.50;
    }
}

// Decorator para adicionar Pepperoni ao sanduíche
class Pepperoni {
    constructor(sanduiche) {
        this.sanduiche = sanduiche;
    }

    getDescricao() {
        return this.sanduiche.getDescricao() + ", Pepperoni";
    }

    getCusto() {
        return this.sanduiche.getCusto() + 0.99;
    }
}

// Decorator para adicionar Queijo Mussarela Ralado ao sanduíche
class QueijoMussarelaRalado {
    constructor(sanduiche) {
        this.sanduiche = sanduiche;
    }

    getDescricao() {
        return this.sanduiche.getDescricao() + ", Queijo Mussarela Ralado";
    }

    getCusto() {
        return this.sanduiche.getCusto() + 2.00;
    }
}

// Crie o sanduíche de frango assado
let sanduiche = new FrangoAssado();

// Adicione o pepperoni
sanduiche = new Pepperoni(sanduiche);

// Adicione o queijo mussarela ralado
sanduiche = new QueijoMussarelaRalado(sanduiche);

// Imprima a descrição e o custo do sanduíche final
console.log(sanduiche.getDescricao() + " custa R$: " + sanduiche.getCusto());


