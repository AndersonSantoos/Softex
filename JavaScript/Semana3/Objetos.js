// Definindo a classe Banco
class Banco {
    constructor(conta, saldo, tipoConta, agencia) {
        this.conta = conta;
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.agencia = agencia;
    }

    // Método para buscar o saldo atual
    buscarSaldo() {
        return this.saldo;
    }

    // Método para fazer um depósito
    deposito(valor) {
        if(valor > 0) {
            this.saldo += valor;
            return true; // Depósito realizado com sucesso
        }
            return false; // Valor inválido para depósito
        }

    // Método para fazer um saque
    saque(valor) {
        if(valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return true; // Saque realizado com sucesso
        }
            return false; // Saldo insufiencinte ou valor inválido para saque
        }
        
    // Método para retornar o número da conta
    numeroConta() {
        return this.conta;
    }       
}

// Criando uma instância do objeto Banco
const minhaConta = new Banco('127833', 1050, 'corrente', '8900');

// Exemplos de utilização dos métodos
console.log('Saldo atual:', minhaConta.buscarSaldo());

console.log('Depósito bem-sucedido?', minhaConta.deposito(500));
console.log('Saldo atual após depósito:', minhaConta.buscarSaldo());

console.log('Saque bem-sucedido?', minhaConta.saque(200));
console.log('Saldo atual após saque:', minhaConta.buscarSaldo());

console.log('Número da conta:', minhaConta.numeroConta());