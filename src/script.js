let valor1;
let valor2;
let resultado;
let resultado2;
let operacao;
let botaoClicado = false;

$('.numero').on('click', function () {
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

let totalClicadoVezes = 0;

$('#total').on('click', function () {
    pressionado($(this));
    switch (operacao) {
        case '+':
            let resultadoAdicao;
            if (totalClicadoVezes === 0) {
                resultadoAdicao = adicao(valor1, valor2);
                totalClicadoVezes++;
            } else {
                resultadoAdicao = adicao(valor2, resultado);
            }
            $('.resultado').text(resultadoAdicao);
            valor2 += resultadoAdicao;
            break;
        case '-':
            let resultadoSubtracao;
            if (totalClicadoVezes === 0) {
                resultadoSubtracao = subtracao(valor1, valor2);
                totalClicadoVezes++;
            } else {
                resultadoSubtracao = subtracao(valor2, resultado);
            }
            $('.resultado').text(resultadoSubtracao);
            valor2 -= resultadoSubtracao;
            break;
        case 'x':
            let resultadoMultiplicacao;
            if (totalClicadoVezes === 0) {
                resultadoMultiplicacao = multiplicacao(valor1, valor2);
                totalClicadoVezes++;
            } else {
                resultadoMultiplicacao = multiplicacao(valor2, resultado);
            }
            $('.resultado').text(resultadoMultiplicacao);
            valor2 *= resultadoMultiplicacao;
            break;
        case '/':
            let resultadoDivisao;
            if (totalClicadoVezes === 0) {
                resultadoDivisao = divisao(valor1, valor2);
                totalClicadoVezes++;
            } else {
                resultadoDivisao = divisao(valor2, resultado);
            }
            $('.resultado').text(resultadoDivisao);
            valor2 /= resultadoDivisao;
            break;
        default:
            $('.resultado').text('teste total');
            break;
    }

    valor1 = undefined;
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
    totalClicadoVezes = 0;
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
