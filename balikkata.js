




function balikKata(kata){

    var splitKata = kata.split('');
    var balikArray = splitKata.reverse('');
    var joinArray = balikArray.join('');
    return joinArray;
// (kata.split('').reverse().join(''));

}
//input

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
