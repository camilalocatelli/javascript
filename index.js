// let mensagem = 'Hello World';

// console.log(mensagem);

// alert('') - da um alerta ahahhHAHAHahHAHa

// confirm('') - mesma coisa mas aparece um cancelar HhahHAHahHAHahhahahAH

// prompt('') - adiciona um campo para digitar

const numerador = prompt('Digite o numerador');
const denominador= prompt('Digite o denominador');

if (denominador === 0) {
    alert('Não é possível dividir por zero.');
} else {
    const resultado = numerador / denominador;
    alert(`${numerador} dividido por ${denominador} é ${resultado}`);
}

