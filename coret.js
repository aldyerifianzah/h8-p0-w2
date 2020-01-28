var nama = 'aldy erifianzah';
console.log(nama[0]);
console.log(nama.length);
console.log("keren banget".charAt(0));



var string1= 'anjay ';
var string2= 'mabar';
//ini gabung
console.log(string1.concat(string2));

//Indexof buat memberi tahu posisi huruf
var text = 'abc';
console.log(text.indexOf('a'));
console.log(text.indexOf('b'));
console.log(text.indexOf('c'));
console.log(text.indexOf('d'));
console.log(text.indexOf('love'));


var satu= 'aldy erz';
//sisa yang dipilih

//dipilih untuk hilang
var dua = satu.substr(1);
//dipilih dan dua digit
var tiga = satu.substr(2, 5);

console.log(dua);

console.log(tiga);

//kalimat besar

var pesan= "halo sayang";

console.log(pesan.toUpperCase());

//kalimat kecil

var pesan1 = "aku sayang";

console.log(pesan1.toLowerCase());

//.trim() menghapus whitespace

var username = ' admin ';
var newUser = username.trim();

console.log(newUser);
console.log(' admin ');