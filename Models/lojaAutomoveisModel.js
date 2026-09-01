class Veiculo {
    constructor(tipoVeiculo,chassi, modelo, anoFabricacao, preco, fabricante, cor, tipoFarol, carga, estoque, quantidadeRodas, tipoCombustivel) {
        this.chassi = chassi;
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
        this.preco = preco;
        this.fabricante = fabricante;
        this.cor = cor;
        this.tipoFarol = tipoFarol;
        this.carga = carga;
        this.estoque = estoque;
        this.tipoCombustivel = tipoCombustivel;
        this.tipoVeiculo = tipoVeiculo;
        this.quantidadeRodas = quantidadeRodas;
    }
    atualizarPrecos(novoPreco) {
        this.preco = novoPreco;
    }
    consultarEstoque() {
        return this.estoque;
    }
    
    exibirDetalhes(){
        console.log(`Veículo:`,this.tipoVeiculo,`| modelo:`,this.modelo,`| ano de fabricação:`,this.anoFabricacao,`| Preço: R$`,this.preco,'| fabricante:',this.fabricante,`| Cor:`,this.cor,`| Rodas:`,this.quantidadeRodas,`| Combustível:`,this.tipoCombustivel,`| Chassi: `,this.chassi,`| Tipo de farol:`,this.tipoFarol,`| Carga:`,this.carga,`kg | Estoque:`,this.estoque,` Unidades.`);
    }
    
    //exibirDetalhes() {
    //    return 'Chassi:', this.chassi, 'Modelo:', this.modelo, 'Ano de fabricação:', this.anoFabricacao, 'Preço: R$', this.preco, 'Fabricante:', this.fabricante, 'Cor:', this.cor, 'Tipo de farol:', this.tipoFarol, 'Carga:', this.carga, 'kg', 'Quantidade de rodas:', this.quantidadeRodas, 'Tipo de combustível:', this.tipoCombustivel;
    //}
    //apresentar(){
    //    console.log(`Veículo:`,this.tipoVeiculo,`| modelo:`,this.modelo,`| ano de fabricação:`,this.anoFabricacao,`| Preço: R$`,this.preco,'| fabricante:',this.fabricante,`| Cor:`,this.cor,`| Rodas:`,this.quantidadeRodas,`| Combustível:`,this.tipoCombustivel,`| Chassi: `,this.chassi,`| Tipo de farol:`,this.tipoFarol,`| Carga:`,this.carga,`kg | Estoque:`,this.estoque,` Unidades.`);
    //}
}

class Moto extends Veiculo {
    constructor(tipoVeiculo,chassi, modelo, anoFabricacao, preco, fabricante, cor, tipoFarol, carga, estoque, quantidadeRodas, tipoCombustivel, cilindradas, tipoPartida, possuiGarupa) {
        super(tipoVeiculo,chassi, modelo, anoFabricacao, preco, fabricante, cor, tipoFarol, carga, estoque, quantidadeRodas, tipoCombustivel);
        this.cilindradas = cilindradas;
        this.tipoPartida = tipoPartida;
        this.possuiGarupa = possuiGarupa;
    }

    exibirDetalhes(){
        super.exibirDetalhes();
        console.log(`| Cilindrada:`,this.cilindradas,`| cc. Tipo de partida:`,this.tipoPartida,`| Possui garupa:`,this.possuiGarupa,` .`);
    }
    
    //apresentar(){
    //    super.apresentar();
    //    console.log(`| Cilindrada:`,this.cilindradas,`| cc. Tipo de partida:`,this.tipoPartida,`| Possui garupa:`,this.possuiGarupa,` .`);
    //}
}

class Carro extends Veiculo {
    constructor(tipoVeiculo,chassi, modelo, anoFabricacao, preco, fabricante, cor, tipoFarol, carga, estoque, quantidadeRodas, tipoCombustivel, quantidadePortas, numeroAssentos) {
        super(tipoVeiculo,chassi, modelo, anoFabricacao, preco, fabricante, cor, tipoFarol, carga, estoque, quantidadeRodas, tipoCombustivel);
        this.quantidadePortas = quantidadePortas;
        this.numeroAssentos = numeroAssentos;
    }
    
    exibirDetalhes(){
        super.exibirDetalhes();
        console.log(`| Quantidade de portas:`,this.quantidadePortas,`| Número de assentos:`,this.numeroAssentos,`assentos.`);
        console.log(`\n`);
    }
    
    //apreentar(){
    //    super.apresentar();
    //    console.log(`| Quantidade de portas:`,this.quantidadePortas,`| Número de assentos:`,this.numeroAssentos,`assentos.`);
    //    console.log(`\n`);
    //}
}

const Ferrari = new Carro('Carro','123456789', 'Ferrari F8', 2020, 300000, 'Ferrari', 'Rosso Corsa','LED', 2, 5, 4, 'Gasolina', 2, 2);
Ferrari.exibirDetalhes();
//Ferrari.apresentar();

const HondaCB500 = new Moto('Moto','987654321', 'Honda CB500', 2021, 25000, 'Honda', 'Preta','Halógeno', 1, 10, 2, 'Gasolina', 500, 'Elétrica', true);
HondaCB500.exibirDetalhes();
//HondaCB500.apresentar();
