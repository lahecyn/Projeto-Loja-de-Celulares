function calcularParcelamento() {
    const preco = parseFloat(document.getElementById("preco").value);
    const parcelas = parseInt(document.getElementById("parcelas").value);
    const resultado = document.getElementById("resultadoParcelamento");

    if (isNaN(preco) || isNaN(parcelas) || preco <= 0 || parcelas <= 0) {
        resultado.innerHTML = "Digite um preço e uma quantidade de parcelas válidos.";
        return;
    }

    const valorParcela = preco / parcelas;

    resultado.innerHTML =
        "Preço do aparelho: R$ " + preco.toFixed(2).replace(".", ",") +
        "<br>Quantidade de parcelas: " + parcelas +
        "<br>Valor de cada parcela: R$ " + valorParcela.toFixed(2).replace(".", ",");
}


function compararModelos() {
    const nome1 = document.getElementById("nome1").value;
    const preco1 = parseFloat(document.getElementById("preco1").value);
    const armazenamento1 = parseInt(document.getElementById("armazenamento1").value);

    const nome2 = document.getElementById("nome2").value;
    const preco2 = parseFloat(document.getElementById("preco2").value);
    const armazenamento2 = parseInt(document.getElementById("armazenamento2").value);

    const resultado = document.getElementById("resultadoComparacao");

    if (
        nome1 === "" ||
        nome2 === "" ||
        isNaN(preco1) ||
        isNaN(preco2) ||
        isNaN(armazenamento1) ||
        isNaN(armazenamento2)
    ) {
        resultado.innerHTML = "Preencha todos os campos.";
        return;
    }

    let texto = "";

    if (preco1 < preco2) {
        texto += nome1 + " é o aparelho mais barato.<br>";
    } else if (preco2 < preco1) {
        texto += nome2 + " é o aparelho mais barato.<br>";
    } else {
        texto += "Os dois aparelhos possuem o mesmo preço.<br>";
    }

    if (armazenamento1 > armazenamento2) {
        texto += nome1 + " possui mais armazenamento.";
    } else if (armazenamento2 > armazenamento1) {
        texto += nome2 + " possui mais armazenamento.";
    } else {
        texto += "Os dois aparelhos possuem o mesmo armazenamento.";
    }

    resultado.innerHTML = texto;
}


function verificarEstoque() {
    const produto = document.getElementById("produtoEstoque").value;
    const quantidade = parseInt(document.getElementById("quantidadeEstoque").value);
    const minimo = parseInt(document.getElementById("estoqueMinimo").value);

    const resultado = document.getElementById("resultadoEstoque");

    if (
        produto === "" ||
        isNaN(quantidade) ||
        isNaN(minimo) ||
        quantidade < 0 ||
        minimo < 0
    ) {
        resultado.innerHTML = "Preencha todos os campos corretamente.";
        return;
    }

    if (quantidade === 0) {
        resultado.innerHTML = produto + " está sem estoque.";
    } else if (quantidade <= minimo) {
        resultado.innerHTML = produto + " está com estoque baixo.";
    } else {
        resultado.innerHTML = produto + " possui estoque suficiente.";
    }
}


function criarRanking() {
    const produtos = [];

    for (let i = 1; i <= 5; i++) {
        const nome = document.getElementById("produto" + i).value;
        const valor = parseFloat(document.getElementById("valor" + i).value);

        if (nome === "" || isNaN(valor) || valor < 0) {
            document.getElementById("resultadoRanking").innerHTML =
                "Preencha todos os produtos e preços corretamente.";
            return;
        }

        produtos.push({
            nome: nome,
            valor: valor
        });
    }

    produtos.sort(function(a, b) {
        return a.valor - b.valor;
    });

    let resultado = "<h3>Ranking de preços</h3>";

    for (let i = 0; i < produtos.length; i++) {
        resultado +=
            (i + 1) +
            "º - " +
            produtos[i].nome +
            " - R$ " +
            produtos[i].valor.toFixed(2).replace(".", ",") +
            "<br>";
    }

    document.getElementById("resultadoRanking").innerHTML = resultado;
}


function produtoMaisVendido() {
    const produtos = [];

    for (let i = 1; i <= 5; i++) {
        const nome = document.getElementById("vendidoProduto" + i).value;
        const vendas = parseInt(document.getElementById("vendas" + i).value);

        if (nome === "" || isNaN(vendas) || vendas < 0) {
            document.getElementById("resultadoVendas").innerHTML =
                "Preencha todos os produtos e quantidades corretamente.";
            return;
        }

        produtos.push({
            nome: nome,
            vendas: vendas
        });
    }

    let maisVendido = produtos[0];

    for (let i = 1; i < produtos.length; i++) {
        if (produtos[i].vendas > maisVendido.vendas) {
            maisVendido = produtos[i];
        }
    }

    document.getElementById("resultadoVendas").innerHTML =
        "<h3>Produto mais vendido</h3>" +
        maisVendido.nome +
        " - " +
        maisVendido.vendas +
        " unidades vendidas.";
}