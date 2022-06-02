const numeros = [7, 9, -3, 10]

function solution(numeros) {

    return Math.max(...numeros.slice(1).map((a,b)))
}

console.log(numeros)

