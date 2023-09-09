class Pessoa {
    constructor(nome, idade) {
      this._nome = nome;
      this._idade = idade;
    }
  
    // Método acessor para obter o nome
    get nome() {
      return this._nome;
    }
  
    // Método acessor para obter a idade
    get idade() {
      return this._idade;
    }
  
    // Método modificador para definir o nome
    set nome(novoNome) {
      this._nome = novoNome;
    }
  
    // Método modificador para definir a idade
    set idade(novaIdade) {
      if (novaIdade >= 0) {
        this._idade = novaIdade;
      } else {
        console.log("A idade não pode ser um valor negativo.");
      }
    }
  }
  
  // Criando uma instância da classe Pessoa
  const pessoa = new Pessoa("Anderson", 25);
  
  // Obtendo os atributos usando os métodos acessores
  console.log("Nome:", pessoa.nome);
  console.log("Idade:", pessoa.idade);
  
  // Modificando os atributos usando os métodos modificadores
  pessoa.nome = "Maria";
  pessoa.idade = -5; // Isso imprimirá uma mensagem de erro no console
  
  // Obtendo os atributos novamente após a modificação
  console.log("Novo Nome:", pessoa.nome);
  console.log("Nova Idade:", pessoa.idade); // A idade ainda será 30 devido ao erro acima
  