var numero = prompt("Introduce un n\u00famero y se mostrara su Factorial");
    var resultado = 1;

    for (var i=2; i<=numero; i++){
        resultado *= i;
    }
    alert(resultado);