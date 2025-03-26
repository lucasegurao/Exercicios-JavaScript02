var valor = Number(prompt("Digite um valor: "))
var valorFormatado = valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})

alert(`O valor é: ${valorFormatado}`)