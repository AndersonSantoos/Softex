// Interface comum para os produtos
class Computador {
    constructor(RAM, HD, CPU, type) {
      this.RAM = RAM;
      this.HD = HD;
      this.CPU = CPU;
      this.type = type;
    }
  
    toString() {
      return `Tipo: ${this.type}, RAM: ${this.RAM} GB, HD: ${this.HD} GB, CPU: ${this.CPU} GHz`;
    }
  }
  
  // Subclasses para os diferentes tipos de computadores
  class PC extends Computador {
    constructor(RAM, HD, CPU) {
      super(RAM, HD, CPU, 'PC');
    }
  } 

  class Server extends Computador {
    constructor(RAM, HD, CPU) {
      super(RAM, HD, CPU, 'Server');
    }
  }
  
  // Fábrica para criar instâncias do tipo abstrato
  class ComputadorFactory {
    criarComputador(type, RAM, HD, CPU) {
      if (type === 'PC') {
        return new PC(RAM, HD, CPU);
      } else if (type === 'Server') {
        return new Server(RAM, HD, CPU);
      } else {
        throw new Error('Tipo de computador desconhecido');
      }
    }
  }
  
  // Exemplo de uso da fábrica
  const factory = new ComputadorFactory();
  const meuPC = factory.criarComputador('PC', 8, 500, 3.0);
  const meuServer = factory.criarComputador('Server', 32, 1000, 2.5);
  
  console.log(meuPC.toString());        // =>  Tipo: PC, RAM: 8 GB, HD: 500 GB, CPU: 3 GHz
  console.log(meuServer.toString());    // =>  Tipo: Server, RAM: 32 GB, HD: 1000 GB, CPU: 2.5 GHz 
  