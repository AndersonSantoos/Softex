//Definindo a classe caneta

class Caneta {
    constructor(cor, tamanho, marca) {
        this.cor = cor;
        this.tamanho = tamanho;
        this.marca = marca;
    }

    escrever(texto) {
        console.log(`Escrever ${texto} com a caneta ${this.cor}`)
    }

    trocarCor(nova_cor) {
        this.cor = nova_cor;
        console.log(`A cor da caneta foi trocada para ${nova_cor}`)
    }

    trocarMarca(nova_marca) {
        this.marca = nova_marca;
        console.log(`A caneta de marca: Faber Castell foi trocada para marca:  ${nova_marca}`)
    }
}

// Definindo a classe carro

class carro {
    constructor(nome, cor, preco) {
        this.nome = nome;
        this.cor = cor;
        this.preco = preco;
    }

    info() {
        console.log(`O carro ${this.nome}, está custando: ${this.preco}`)
    }

    trocarCor(nova_cor) {
        this.cor = nova_cor;
        console.log(`O ${this.nome}, ganhará uma nova cor: ${nova_cor}`);
    }

    novoPreco(novo_preco) {
        this.preco = novo_preco;
        console.log(`O ${this.nome}, custará após depois do reajuste: ${novo_preco}`);
    }
}

// Definindo a classe Usuário
class Usuario {
    constructor(nome, email, idade) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
    }

    enviarEmail(destinatario, mensagem) {
        console.log(`Enviando email para ${destinatario}: "${mensagem}"`);
    }

    atualizarIdade(nova_idade) {
        this.idade = nova_idade;
        console.log(`Idade atualizada para ${nova_idade} anos.`);
    }

    visualizarPerfil() {
        console.log(`Nome: ${this.nome}, Email: ${this.email}, Idade: ${this.idade} anos.`);
    }
}

// Definindo a classe Carrinho de Compras
class CarrinhoDeCompras {
    constructor() {
        this.itens = [];
        this.total = 0;
        this.desconto = 0;
    }

    adicionarItem(item) {
        this.itens.push(item);
        this.total += item.preco;
        console.log(`Item "${item.nome}" adicionado ao carrinho.`);
    }

    removerItem(item) {
        const index = this.itens.indexOf(item);
        if (index !== -1) {
            this.itens.splice(index, 1);
            this.total -= item.preco;
            console.log(`Item "${item.nome}" removido do carrinho.`);
        }
    }

    aplicarDesconto(desconto) {
        this.desconto = desconto;
        const descontoAplicado = this.total * (desconto / 100);
        this.total -= descontoAplicado;
        console.log(`Desconto de ${desconto}% aplicado. Total atual: $${this.total}`);
    }
}

//EXEMPLOS EM USO

// Dados da CANETA
const caneta = new Caneta("Preta", "média", "bic");
caneta.escrever(`E aí!!!`)
caneta.trocarCor(`Vermelha!`);
caneta.trocarMarca(`Bic!`)
console.log(caneta)


// Dados do CARRO
const Carro = new carro("Honda Civic", "preto", 95.255);
Carro.info();
Carro.trocarCor("Vermelho");
Carro.novoPreco(115.244);
console.log(Carro);


// Dados USUARIO
const usuario = new Usuario("João", "joao@example.com", 30);
usuario.enviarEmail("amigo@example.com", "Olá, como você está?");
usuario.atualizarIdade(33);
usuario.visualizarPerfil();



//Dados carrinho
const carrinho = new CarrinhoDeCompras();
const item1 = { nome: "Camiseta", preco: 20 };
const item2 = { nome: "Calça", preco: 30 };
carrinho.adicionarItem(item1);
carrinho.adicionarItem(item2);
carrinho.aplicarDesconto(10);
console.log(carrinho)







