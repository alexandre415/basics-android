let saldo = parseFloat(prompt("Digite o saldo inicial: "))
let opcao = ""

do{
    opcao = prompt(
        "\n\nSaldo disponível: R$ "+ saldo +
        "\nDigite a Opção desejada:" +
        "\n1. Adicionar dinheiro" +
        "\n2. Retirar dinheiro" +
        "\n3. Encerrar o programa" 
        )

        switch(opcao)
        {
            case "1":{
               saldo += parseFloat(prompt("Qual valor deseja adicionar? "))
                alert("Valor atual é: "+ saldo)
                break
            }
            case "2": {
                saldo -= parseFloat(prompt("Qual valor deseja retirar? "))
                alert("Valor atual é: "+ saldo)
                break
            }
            case "3":{
                alert("O programa será encerrado!")
                alert("Encerrando...")
                break
            }
            default:{
                alert("Digite uma opção válida!!")
            } 
        }
} while(opcao !=="3")