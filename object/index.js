//object

// let siswa = {
//     nama: "Budi",
//     kelas: "X IPA",
//     alamat: "Sindang"
// };

// //destructuring
// let {nama, kelas } = siswa;

// console.log(`Nama : ${siswa["nama"]}`);
// console.log(`Kelas : ${siswa.kelas}`);

// siswa.usia = 17;

// console.log(siswa.usia);
// console.log(siswa["usia"]);

// document.getElementById("object").innerText = `Ini ${nama}`; 
// document.getElementById("object2").innerText = `Ini ${kelas}`; 
// document.getElementById("object3").innerText = `Ini ${siswa.usia}`; 
// document.getElementById("cek").innerText = `Ini ${ typeof siswa["usia"]}`; 


// let buku = {
//     judul : "Laskar Pelangi",
//     penulis : "Andrea Hinata",
//     tahun : 2005,
// };

// let = {judul, penulis, tahun} = buku;

// console.log(judul);
// console.log(penulis);
// console.log(tahun);
// console.log(buku);

// document.getElementById("object").innerText = `Nama Buku ${judul}`
// document.getElementById("object2").innerText = `Penulis Buku ${penulis}`
// document.getElementById("object3").innerText = `Tahun Rilis Buku ${tahun}`
// document.getElementById("cek").innerText = `Type Object 3 : ${typeof tahun}`


let buah = ["mangga" , "salak", "ceri"];
console.log(buah[0]);

document.getElementById("object").innerText = `Nama Buah ${buah[0]}`
document.getElementById("cek").innerText = `Tipe Buah ${typeof buah[0]}`

let kelas = [
    {nama : "Sapta", kelas : "2A"},
    {nama : "Fadil", kelas : "2C"},
]

console.log(kelas[0]["nama"]);


