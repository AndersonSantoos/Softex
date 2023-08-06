class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
      this.next = null;
    }
  }
  
  class listaEncadeada {
    constructor(head = null) {
      this.head = head;
    }
  
    addPessoa(nome, idade) {
      const newPessoa = new Pessoa(nome, idade);
  
      if (!this.head) { // Verificando se a lista está vázia, caso esteja cria uma nova pessoa.
        this.head = newPessoa;
      } else {
        let current = this.head;
        while (current.filho) {
          current = current.filho;
        }
        current.filho = newPessoa;
      }
    }
  
    apresentacaoPessoas() {
      let current = this.head;
      while (current) {
        console.log(`Nome: ${current.nome}, Idade: ${current.idade}`);
        if (current.filho) {
          console.log(`Referência do Filho: ${current.filho.nome}`);
        } else {
          console.log("Sem Filho");
        }
        current = current.filho;
      }
    }
  }
  
  const listaPessoas = new listaEncadeada();
  
  listaPessoas.addPessoa('Anderson', 52);
  listaPessoas.addPessoa('Anderson filho', 15)
  listaPessoas.addPessoa('Eduardo', 2);
  
  listaPessoas.apresentacaoPessoas();