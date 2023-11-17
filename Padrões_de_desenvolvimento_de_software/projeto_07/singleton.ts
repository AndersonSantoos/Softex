class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "SenhaUltraSecreta123";

    private constructor() {}

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    public acessarBaseSecreta(senhaInserida: string): void {
        if (senhaInserida === this.senhaBaseSecreta) {
            console.log("Acesso concedido à Base Secreta. Bem-vindo, agente!");
        } else {
            console.log("Acesso negado! Intruso detectado!");
        }
    }
}

// Programa Principal
const sistemaSeguranca = SistemaSeguranca.getInstance();

// Agente tenta acessar a Base Secreta
sistemaSeguranca.acessarBaseSecreta("SenhaIncorreta"); // Acesso negado!

// Agente tenta acessar novamente com a senha correta
sistemaSeguranca.acessarBaseSecreta("SenhaUltraSecreta123"); // Acesso concedido!
