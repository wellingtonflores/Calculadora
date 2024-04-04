let valor1;
let valor2;
let resultado;
let operacao;
let botaoClicado = false;
let numeroclicado = false;

$('.numero').on('click', function () {
    numeroclicado = true;
    if (numeroclicado === true) {
        $('.resetar').text('C');
    }

    if (operacao === undefined) {
        if (valor1 === undefined) {
            valor1 = parseFloat(this.textContent);
            $('.resultado').text(valor1);
            pressionado($(this));
            ponto(valor1);
        } else {
            valor1 = parseFloat($('.resultado').text() + this.textContent);
            $('.resultado').text(valor1);
            pressionado($(this));
            ponto(valor1);
        }
    } else {
        if (valor2 === undefined) {
            valor2 = parseFloat(this.textContent);
            $('.resultado').text(valor2);
            pressionado($(this));
            ponto(valor2);
        } else {
            valor2 = parseFloat($('.resultado').text() + this.textContent);
            $('.resultado').text(valor2);
            pressionado($(this));
            ponto(valor2);
        }
        $('.operacao').removeClass('operacao_clicada');
    }
});

$('#total').on('click', function () {
    pressionado($(this));
    switch (operacao) {
        case '+':
            let resultadoAdicao = adicao(valor1, valor2);
            $('.resultado').text(resultadoAdicao);
            break;
        case '-':
            let resultadoSubtracao = subtracao(valor1, valor2);
            $('.resultado').text(resultadoSubtracao);
            break;
        case 'x':
            let resultadoMultiplicacao = multiplicacao(valor1, valor2);
            $('.resultado').text(resultadoMultiplicacao);
            break;
        case '/':
            let resultadoDivisao = divisao(valor1, valor2);
            $('.resultado').text(resultadoDivisao);
            break;
        default:
            $('.resultado').text('teste total');
            break;
    }

    valor1 = resultado;
    valor2 = undefined;
    operacao = undefined;
});

$('.operacao').on('click', function () {
    operacao = this.textContent;
    switch (operacao) {
        case '+':
            $(this).addClass('operacao_clicada');
            break;
        case '-':
            $(this).addClass('operacao_clicada');
            break;
        case 'x':
            $(this).addClass('operacao_clicada');
            break;
        case '/':
            $(this).addClass('operacao_clicada');
            break;
        default:
            $('.resultado').text('teste operacao');
            break;
    }
});

$('.resetar').on('click', function () {
    pressionado($(this));
    valor1 = undefined;
    valor2 = undefined;
    operacao = undefined;
    resultado = undefined;
    if (numeroclicado === true) {
        numeroclicado = false;
        $('.resetar').text('AC');
    }

    $('.resultado').text(0);
});

function ponto(valor) {
    $('.ponto').on('click', function () {
        pressionado($(this));
        $('.resultado').text(valor + this.textContent);
    });
}

function pressionado($elemento) {
    $elemento.addClass('pressed');
    setTimeout(function () {
        $elemento.removeClass('pressed');
    }, 100);
}

function adicao(a, b) {
    return (resultado = a + b);
}

function subtracao(a, b) {
    return (resultado = a - b);
}

function multiplicacao(a, b) {
    return (resultado = a * b);
}

function divisao(a, b) {
    if (b === 0) {
        return 'Não é possível dividir por zero.';
    }
    return (resultado = a / b);
}
