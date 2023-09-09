class MinhaClasse {
    // Método estático
    static meuMetodoEstatico() {
      console.log("Este é um método estático!");
    }
  
    // Outros métodos da classe
    meuMetodo() {
      console.log("Este é um método de instância.");
    }
  }
  
  // Chamando o método estático sem criar uma instância da classe
  MinhaClasse.meuMetodoEstatico();
  
  // Criando uma instância da classe
  const minhaInstancia = new MinhaClasse();
  
  // Chamando o método de instância
  minhaInstancia.meuMetodo();
  