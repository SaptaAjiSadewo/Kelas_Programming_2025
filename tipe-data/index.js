// Tipe Data String
// let nama = "Sapta"
// nama = `Fadil`;
// console.log(nama,""+ typeof nama);

// let nama = "Sapta";
// let negara = "Indonesia";
// console.log(nama,"orang "+ negara);

// Tipe Data Number
// let tahun = new Date().getFullYear();
// let tahun_lahir = 2005;
// let usia = tahun - tahun_lahir;
// console.log("Usia saya tahun ini adalah : ", + usia);

// Normal
// const no = 40;
// const phi = 3.14;
// const id = 5;

//Tidak Normal
// const result = "lima puluh" / 8;
// console.log(result);

//Boolean
// const completed = true;
// const passed = false;
// console.log(completed, passed);

//Boolean bisa dihasilakan
// const lebihBesar = 300 > 200;
// console.log(lebihBesar);

//Nilai Kosong
// let message = null;
// console.log(message);

//Nilai Undefined
// let message_undefined;
// console.log(message_undefined);

//Konversi Tipe Data
//Konversi Manua {Explicit Conversion}
//ubah ke string
// const number = 123;
// const Boolean = true;

// const StrNumber = String(number);
// const StrBoolean = Boolean.toString();

// console.log(StrNumber);
// console.log(StrBoolean);

//Konversi Otomatis {Implicit Conversion/ Type Coersion}
// console.log("5" + 3);
// console.log("5" - 3);
// console.log(true + 1);
// console.log(false + 1);


let angka1 = prompt("Masukkan angka pertama :");
console.log("Sebelum Dijumlahkan " + typeof(angka1));

let angka2 = prompt("Masukkan angka kedua :");
// let hasil = Number(angka1) + Number(angka2); - tidak bisa mengkonversi string/kalimat
let hasil = parseFloat(angka1) + parseFloat(angka2);
alert("Hasil Penjumlahan : " + hasil);
console.log("Hasil dari penjumlahan : " + typeof(hasil));








