var valor1 = Number(prompt("Digite o 1º valor: "))
var valor2 = Number(prompt("Digite o 2º valor: "))
var valor3 = Number(prompt("Digite o 3º valor: "))

var media = (valor1 + valor2 + valor3) / 3
var mediaFormatada = media.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})

alert(`A média dos valor é: ` + mediaFormatada)