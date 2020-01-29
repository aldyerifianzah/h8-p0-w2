
//soal 1
var flag = 2;

console.log("Looping pertama");

while(flag<=20){

    console.log(flag + ' - ' + 'I love coding');
    flag += 2 ;
}

var flag1 = 20;

console.log('');

console.log('Looping kedua');
while(flag1>1){

    console.log(flag1 + ' -' + ' I will become fullstack developer');
    flag1 -= 2;
}

//soal 2
console.log('');


console.log('looping pertama');

for(var i= 2; i <= 20; i +=2 ){
    console.log(i + ' - ' + 'I love coding');
}

console.log('');

console.log('looping kedua')
for(var a = 20; a>1; a -=2){
    console.log(a + ' -' + ' I will become fullstack developer');
}

//soal 3

console.log(' ');

for(i=0; i<=100; i++){
    if(i%2 !=0){
      console.log( i +' bilangan ganjil');
    }
     else{
       console.log( i + ' bilangan genap')
     }
   }

console.log(' ');
   //perulangan

   for(var a=1; a<=100; a+=2){
    if(a%3 == 0){
      console.log(a + ' kelipatan tiga')
    }
}

console.log(' ');

for(var b=1; b<=100; b+=5){
    if(b%6 == 0){
      console.log(b + ' kelipatan enam');
    }
  }

  console.log(' ');

  for(var c=1; c<=100; c+=9){
    if(c%10 == 0){
      console.log(c + ' kelipatan 10');
    }
  }