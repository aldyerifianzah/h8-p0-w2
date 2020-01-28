//deklarasi 

const kalimatTabit = 'kamu akan membantu temanmu yang terluka';
const KalimatKsatria = 'kamu dapat menyerang dengan senjatamu!';
const KalimatPenyihir = 'ciptakan keajaiban yang membantu kemenanganmu!';
let dasar =' nama harus di isi! dan peran harus di isi!'; 





//ini input kosong

var nama = '';
var peran = '';

if (nama=='' && peran==''){
    console.log("Nama harus diisi!");

};

//ini input nama aldy

nama = 'Aldy';
peran = '';

if(nama ==='Aldy' && peran === ''){
    console.log(`halo ${nama}, pilih peranmu untuk memulai game! `);
}else{
    console.log("nama harus di isi");
}

//input nama neke dengan peran ksatria

nama = 'Neke';
peran = 'Ksatria';

if(nama=== 'Neke' && peran=== 'Ksatria'){
    console.log(`selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama},` + KalimatKsatria);
} else {
    console.log(dasar);
}

//input nama lany dengan peran tabib

nama = 'Lany';
peran = 'Tabib';

if(nama=== 'Lany' && peran=== 'Tabib'){
    console.log(`selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama},` + kalimatTabit);
} else {
    console.log(dasar);
}

//input nama lauv dengan peran penyihir

nama = 'Lauv';
peran = 'Penyihir';

if(nama=== 'Lauv' && peran=== 'Penyihir'){
    console.log(`selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama},` + KalimatPenyihir);
} else {
    console.log(dasar);
}

