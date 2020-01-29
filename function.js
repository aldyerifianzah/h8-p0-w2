//soal 1

//function

function shoutOut(){
    console.log('"Halo Function!');
}

console.log(shoutOut());

//soal 2

function calculateMultiply(num1,num2){
    let area = num1 * num2;
    return area;
} 

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);


//soal 3

function processSetence(name, age, address, hobby){
    console.log(`nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`);
    return;
}

//

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

//

console.log(processSetence(name, age, address, hobby));
