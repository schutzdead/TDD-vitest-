export function sum (parameters:number[]){    
    return parameters.reduce((total, current) => total + current,0)
}

export function willBeMockParameter (parameter:number){
    return parameter * 2;
}

export let x = willBeMockParameter(9);
console.log(sum([1,2,3,x]))





export function capitalize (sentence:string) {
    let firstLetter = sentence.slice(0,1).toUpperCase();
    return firstLetter + sentence.slice(1, sentence.length);
}

export function reverseString (parameter:string) {
    console.log(parameter.split('').reverse().join(''))
}

export function caesarCipher (string:string, shift:number){
    let eachLetter = string.split('');
    let newArray = []
    let decale = ""
    for(let i=0;i<eachLetter.length;i++){        
        if(eachLetter[i] == " "){
            decale = " "
        } else {
            decale = alphabetIndex(eachLetter[i], shift)
        }
        newArray.push(decale)
    }
    return newArray.join('')
}

function alphabetIndex (letter:string, shift:number) {
    const char = "abcdefghijklmnopqrstuvwxyz"
    var newChar:number = 0
    for(let i=0;i<char.length;i++){
        if(letter === char.charAt(i)){
            newChar = char.indexOf(letter)+shift;
            break
        }
        if(i== 25) return letter
    }

    if(newChar>25){
        return char.charAt(newChar-26)
    } else {
    return char.charAt(newChar)
    }
}

function analyseArray (...parameters:number[]){
    const sortArray = parameters.sort((a,b) => a-b)
    const average = parameters.reduce((a,b) => a+b, 0)
    const length = sortArray.length;
    const min = sortArray[0]
    const max = sortArray[length-1]

    return{
        average:average,
        min:min,
        max:max,
        length:length
    }
}


console.log(analyseArray(34,21,1,78))