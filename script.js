/*Atividade 1
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)
*/
//exemplo 1

function verificarPalindromo(string)
 {
	if (!string) return "Essa string não existe";

	return string.split("").reverse().join("") === string;
}

//exemplo 2

function varificarPalindromo2(string)
 {
	if (!string) return "Essa string não existe";
	

	for (let i = 0; i < string.length / 2; i++)
     {
		if (string[i] !== string.length - 1 - i)
         {
			return false;
		}
	}
	return true;
}

console.log(verificarPalindromo2("abba"));

/* Atividade 2
Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1*/


function substituirPares(array) {
    if (!array) return -1;
    if (!array.length) return -1;

    for(let i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            console.log("Você já é zero!");
        }else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return array;
}
let arr = [1, 3, 4, 6, 33, 80, 23, 90];
console.log(substituirPares(false));
