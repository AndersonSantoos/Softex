// Classe abstrata Veículo
class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
    }
  
    clone() {
      return Object.create(this);
    }
  
    represent() {
      return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
    }
  }
  
  // Subclasse Carro que herda de Veículo
  class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
      super(modelo, marca, cor, numeroRodas);
      this.numeroPortas = numeroPortas;
    }
  
    represent() {
      return `${super.represent()}, Número de Portas: ${this.numeroPortas}`;
    }
  }
  
  // Subclasse Moto que herda de Veículo
  class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, cilindrada) {
      super(modelo, marca, cor, numeroRodas);
      this.cilindrada = cilindrada;
    }
  
    represent() {
      return `${super.represent()}, Cilindrada: ${this.cilindrada}`;
    }
  }
  
  // Classe Aplicação
  class Aplicacao {
    static criarVeiculos() {
      const veiculo1 = new Carro('Sedan', 'Toyota', 'Preto', 4, 4);
      const veiculo2 = new Carro('SUV', 'Ford', 'Branco', 4, 2);
      const veiculo3 = new Moto('Esportiva', 'Honda', 'Vermelho', 2, '600cc');
      const veiculo4 = new Carro('Hatchback', 'Volkswagen', 'Azul', 4, 5);
      const veiculo5 = new Moto('Custom', 'Harley-Davidson', 'Preto', 2, '1200cc');
      const veiculo6 = new Carro('SUV', 'Jeep', 'Verde', 4, 4);
  
      return [veiculo1, veiculo2, veiculo3, veiculo4, veiculo5, veiculo6];
    }
  
    static clonarVeiculos(veiculos) {
      return veiculos.map((veiculo) => veiculo.clone());
    }
  
    static imprimirVeiculos(veiculos) {
      veiculos.forEach((veiculo) => {
        console.log(veiculo.represent());
      });
    }
  }
  
  // Uso da classe Aplicação
  const veiculosOriginais = Aplicacao.criarVeiculos();
  const veiculosClonados = Aplicacao.clonarVeiculos(veiculosOriginais);
  Aplicacao.imprimirVeiculos(veiculosClonados);
  