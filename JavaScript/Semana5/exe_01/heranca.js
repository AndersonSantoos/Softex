class pessoa {
    constructor(nome, idade, cargo, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }

    apresentar() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Cargo: ${this.cargo}, Salario: ${this.salario} `)
    }
}



class funcionario extends pessoa {
    constructor(nome, idade, cargo, salario, departamento) {
        super(nome, idade, cargo, salario);
        this.departamento = departamento;
    }

    apresentar() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Cargo: ${this.cargo}, Salário: R$${this.salario}, Departamento: ${this.departamento}`);
      }
    }

// Exemplo de uso das classes
const pessoa1 = new pessoa("Anderson", 25, "Desenvolvedor", 5000);
const funcionario1 = new funcionario("Larissa", 20, "Desenvolvedor", 6000, "Tecnologia");

pessoa1.apresentar(); // Apresenta os dados da Pessoa
funcionario1.apresentar(); // Apresenta os dados do Funcionário, incluindo o departamento    