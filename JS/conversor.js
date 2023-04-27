const medidas = prompt("Insira a medidas em metros: ")

const unidade = prompt(
    "Para qual unidade deseja converter? " + 
    "\n1. Milimetros(mm)" +
    "\n2. Centímetros(cm)" +
    "\n3. Decímetros(dm)" +
    "\n4. Decâmetros(dam)" +
    "\n5. Hectômetros(hm)" +
    "\n6. Quilômetros(km)"

)   

switch(unidade)
{
    case "1":
         alert("Resultado: " + medidas + "m = " + medidas * 1000 + "mm")
         break
    case "2":
        alert("Resultado: " + medidas + "m = " + medidas * 100 + "cm")
        break
    case "3":
        alert("Resultado: " + medidas + "m = " + medidas * 10 + "dm")
        break
    case "4":
        alert("Resultado: " + medidas + "m = " + medidas / 10 + "dam")
        break
    case "5":
        alert("Resultado: " + medidas + "m = " + medidas * 100 + "hm")  
        break
    case "6":
        alert("Resultado: " + medidas + "m = " + medidas * 1000 + "km")
        break

    default:
        alert("Opção inválida")

    }






