let opcao = "6"

do {
    opcao = prompt(
        "Seja Bem Vindo! Escolha uma opção:" +
        "\n1. Opção 1 "+
        "\n2. Opção 2 "+
        "\n3. Opção 3 "+
        "\n4. Opção 4 "+
        "\n5. Opção 5 "+
        "\n6. Opção 6 para sair "
    )

        switch(opcao)
        {
            case "1":{
                alert("Você escolheu a opção 1")
                break
            }
            case "2": {
                alert("Você escolheu a opção 1")
                break
            }
            case "3":{
                alert("Você escolheu a opção 1")
                break
            }
            case "4": {
                alert("Você escolheu a opção 1")
                break
            }
            case "5":{
                alert("Você escolheu a opção 1")
                break
            }
            case "6": {
                alert("Você escolheu Encerrar o programa")
                alert("Encerrando...")
                break
            }
            default:
            {
                alert("Escolha uma alternativa Válida!")
            }
        }
    } while(opcao !== "6")