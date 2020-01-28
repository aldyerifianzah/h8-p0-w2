const kalimatTabit = 'kamu akan membantu temanmu yang terluka';
const KalimatKsatria = 'kamu dapat menyerang dengan senjatamu!';
const KalimatPenyihir = 'ciptakan keajaiban yang membantu kemenanganmu!';

//input
var nama ='Lauv';
var peran ='Penyihir';


if(nama==='Aldy' && peran ===''){
    console.log(`halo ${nama}, pilih peranmu untuk memulai game! `);

}else if(nama==='Neke' && peran==='Ksatria'){
    console.log(`selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama},` + KalimatKsatria);

}else if(nama==='Lany' && peran==='Tabib'){
    console.log(`selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama},` + kalimatTabit);

}else if(nama==='Lauv' && peran==='Penyihir'){
    console.log(`selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama},` + KalimatPenyihir);
}else{
    console.log('nama harus di isi!');
}