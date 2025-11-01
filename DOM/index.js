//DOM Document Object Model adalah representasi 

/*
Akses DOM dengan id

document.getElementById("nama_id")
Cari elemen berdasarkan id unik

document.getElementById("judul").innerText = "Selamat Datang";

Akses dengan Query Selector
document.querySelector("(.)nama_class atau (#)nama_id")

Style di JS
// document.querySelector("#judul").style.color = "red";

*/

// console.log(document.getElementById("judul"));
// document.querySelector("#judul").innerText = "Cihuy";

// console.log(document.querySelector(".teks"));
// document.querySelector(".teks").innerText = "Cihuy";

function resetWarna() {
   document.getElementById("judul").classList.toggle("kuning");
   // console.log(`test`);  
}























