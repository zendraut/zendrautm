function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Efek Mesin Ketik (Typewriter)
const teks = [
    "MAHASISWA",
   
];
let kecepatan = 100;  // Kecepatan mengetik (ubah sesuai kebutuhan)
const elemenTeks = document.querySelector(".typewriter-text");
let indeksTeks = 0;
let indeksKarakter = 0;

function mesinKetik() {
    if (indeksKarakter < teks[indeksTeks].length) {
        elemenTeks.innerHTML += teks[indeksTeks].charAt(indeksKarakter);
        indeksKarakter++;
        setTimeout(mesinKetik, kecepatan);
    } else {
        setTimeout(hapusTeks, 1000);  // Tunggu 1 detik setelah selesai mengetik
    }
}

function hapusTeks() {
    if (elemenTeks.innerHTML.length > 0) {
        elemenTeks.innerHTML = elemenTeks.innerHTML.slice(0, -1);
        setTimeout(hapusTeks, 50);  // Kecepatan penghapusan
    } else {
        indeksTeks = (indeksTeks + 1) % teks.length;
        indeksKarakter = 0;
        setTimeout(mesinKetik, 500);  // Tunggu 0,5 detik sebelum mengetik teks berikutnya
    }
}

window.onload = mesinKetik;