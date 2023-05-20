const arr = ['Froco', "Sair", 'Beatriz', 'Alice']
console.log(arr)

//push insere no final do array
arr.push('Alexandre')
arr.push('Carla')
arr.push('Toddy')
console.log(arr)

//insere no inicio do array
arr.unshift('Cacau')
console.log(arr)

//remover um elemento que esta no final do array

arr.pop()
console.log(arr)

//shitf -> remove o primeiro elemento do array

primeirElemento = arr.shift()
console.log(arr)
console.log(primeirElemento)

//pesquisar por elementos
//includes pesquisa se o elemento existe no array
//pesquisa pelo valor exato
//É case sensitive

const inclui = arr.includes('beatriz')
console.log(inclui)

//indexOf
//retorno o index do conteúdo desejado

const index = arr.indexOf('Alice')
console.log(index)

//slice -> pega um pedaço do array

const fatia = arr.slice(0, 4) //pego o 0, 1, 2, 3
const fatia_inversa = arr.slice(-4)
console.log(fatia)
console.log(fatia_inversa)

//concat

const sociedade = fatia.concat(fatia_inversa, " bigode")
console.log(sociedade)

//Substituição dos elementos
//splice-: encontra o indice, ve quantos precisa excluir a partir do indice, e substitui o elemento
//excluido pelo que se encontra no final
const elemento_removido = sociedade.splice(index, 1, "Bigode Grandão")
console.log(sociedade)
console.log(elemento_removido)

//lendo um array

for( let indice = 0; indice < sociedade.length; indice++)
{
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição "+ indice)
    
}