/* function
 function sapa(){
    echo "Halo";
}

sapa();
*/
//console.log(sapa()); salah

/*parameter adalah variavel yang dideklarasikan 
 dalam definisi suatu function atau metode untuk
 menerima nilai data saat fungsi sedang dipanggil

 kali dipanggil tanpa parameter akan NaN 
 */

/* function penjumlahan(a, b){
    //console.log(hasil = a + b); 
    hasil = a + b
    console.log(hasil); 
 }

//nilai 1 dan 5 adalah argumen yang akan disimpan dalam parameter   
penjumlahan(1,5);
*/

//dengan return
/*
fungsi untuk mengembalikan kontrol kembali ke bagian program 
yang memanggil fungsi tersebut dan secara opsional mengembalikan sebuah nilai

Mengembalikan Nilai, fungsi untuk memberikan keluaran atau hasil pengolahannya 
kepada bagian program yang memanggilnya.

Mengakhiri Fungsi,Ketika pernyataan return dieksekusi, eksekusi fungsi akan 
berhenti dan kontrol akan dikembalikan ke titik kode tepat setelah fungsi tersebut dipanggil. 

*/

/*
function penjumlahan(a, b){
    return a + b; // Fungsi mengembalikan hasil penjumlahan a dan b
}

let hasil = penjumlahan(1,5);
console.log(hasil);
*/

/* 
function cekUmur (umur) {
    if (umur >= 18) {
        console.log("dewasa");
    } else {
        console.log("kecil");   
    } 
}
cekUmur(14);
*/

/*
function cekUmur (umur){
    return umur >= 18 ? "Dewasa" : "Kecil"; 
}

let hasil = cekUmur(20);
console.log(hasil);
*/

/*
function cekUmur (umur) {
    if (umur >= 18) {
        return "Dewasa";
    } else {
        return "Kecil";
    } 
}

let hasil = cekUmur(20);
console.log(hasil);
*/

// function hitungPersegiPanjang(panjang, lebar){
//     let hasil = panjang * lebar;
//     return hasil; // Fungsi mengembalikan hasil hitungPersegiPanjang a dan b
// }

// console.log(hitungPersegiPanjang(5,5));

//fungsi ekspression
/*
 function bisa disimpan di dalam variabel
*/

// let cekUmur = function (umur){
//     if (umur >= 18) {
//         return "Dewasa";
//     } else {
//         return "Kecil";
//     }
// };

// PengecekanUmur = cekUmur(20);
// console.log(PengecekanUmur);

//arrow function
// let sapa = (nama) => {
//     console.log(`Halo ${nama}`);
// };

// sapa("Sapta");

// let cekUmur = (umur) => {
//     if (umur >= 18) {
//         //return "Dewasa";
//         console.log("Dewasa");

//     } else {
//         //return "Kecil";
//         console.log("Kecil");
//     }
// };

// PengecekanUmur = cekUmur(20);
// console.log(PengecekanUmur);

let Hargabarang = 0;
let Persendiskon = 0;

function hargaDiskon(Hargabarang, Persendiskon) {
  let rumusDiskon = Hargabarang * (Persendiskon / 100);
  let setelahDiskon = Hargabarang - rumusDiskon;
  document.getElementById("screen").value = `Harga Barang ${Hargabarang}`;
  document.getElementById("screen2").value = `Diskon yang didapat ${Persendiskon}%`;
  document.getElementById("screen3").value = `Harga Setelah Diskon ${setelahDiskon}`;
  console.log(setelahDiskon);
  return setelahDiskon;
}


// console.log(`Harga Payung Rp.80000`);
// console.log(`Harga Laptop Rp.2000000`);
// console.log(`Harga Payung Setelah diskon 20% : Rp.${hargaDiskon(80000, 20)}`);
// console.log(`Harga Laptop Setelah diskon 20% : Rp.${hargaDiskon(2000000, 20)}`);
