let buah = ["mangga", "salak", "ceri"];
// console.log(buah[0]);
// console.log(buah.length);

// buah.forEach(i => {
//     console.log(i);
// })

// document.getElementById("object").innerText = `Nama Buah ${buah[0]}`
// document.getElementById("cek").innerText = `Tipe Buah ${typeof buah[0]}`

// let kelas = [
//     {nama : "Sapta", kelas : "2A"},
//     {nama : "Fadil", kelas : "2C"},
// ]

// console.log(kelas[0]["nama"]);

// document.getElementById("object").innerText = `Nama Siswa ${kelas[0]["nama"]}`
// document.getElementById("cek").innerText = `Tipe Nama ${typeof kelas[0]["nama"]}`

// buah.forEach(function(x) {
//     console.log(x);
//     document.getElementById("buahContainer").innerHTML += `<li>${x}</li>`;
// });

let buku = [
  {
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    tahun: 2005,
  },
  {
    judul: "Bumi Manusia",
    penulis: "Pramoedya Ananta Toer",
    tahun: 1980,
  },
  {
    judul: "Negeri 5 Menara",
    penulis: "Ahmad Fuadi",
    tahun: 2009,
  },
];

buku.forEach(function (x) {
  console.log(x.judul);
  document.getElementById(
    "container"
  ).innerHTML += `<li>${x.judul}, ${x.penulis}, ${x.tahun}</li>`;
});

buku.forEach(function (x, index) {
  console.log(x);
  document.getElementById("table").innerHTML += 
   `<tr>
    <th>${(index += 1)}</th>
    <td>${x.judul}</td>
    <td>${x.penulis}</td>
    <td>${x.tahun}</td> 
    </tr>`;
});
