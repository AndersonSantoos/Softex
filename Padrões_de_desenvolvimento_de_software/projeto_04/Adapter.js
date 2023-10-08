// Classe Pato
class Pato {
    quack() {
      console.log("Quack! Quack!");
    }
  
    voar() {
      console.log("Voando como um pato");
    }
  }
  
  // Classe Galinha
  class Galinha {
    cacarejar() {
      console.log("Cocoricó! Cocoricó!");
    }
  
    voarComoGalinha() {
      console.log("Voando como uma galinha");
    }
  }
  
  // Classe AdaptadorPato
  class AdaptadorPato {
    constructor(pato) {
      this.pato = pato;
    }
  
    cacarejar() {
      this.pato.quack();
    }
  
    voarComoGalinha() {
      this.pato.voar();
    }
  }
  
  // Classe AdaptadorPatoDemo para demonstrar o uso do adaptador
  class AdaptadorPatoDemo {
    static main() {
      const pato = new Pato();
      const adaptador = new AdaptadorPato(pato);
  
      console.log("Pato fazendo as ações de uma galinha:");
      adaptador.cacarejar();
      adaptador.voarComoGalinha();
    }
  }
  
  AdaptadorPatoDemo.main();
  