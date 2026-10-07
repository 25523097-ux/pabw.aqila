// === MENGGUNAKAN CONST (Data Tetap/Objek/Array) ===
const profil = {
  nama: "Aqila",
  peran: "Mahasiswa Informatika",
  jumlahProyek: 3
};

const keahlian = ["HTML", "CSS", "JavaScript"];

// === MENGGUNAKAN LET (Data yang Nilainya Bisa Berubah) ===
let skor = 0;
let statusAktif = true;

// Contoh mengubah nilai variabel let
skor = 10;

// Menggabungkan data dengan Template Literal
const kalimat = `Nama saya ${profil.nama}, seorang ${profil.peran} dengan ${keahlian.length} keahlian.`;

console.log(kalimat);


// ==========================================
// LEMBAR C — DUA FUNGSI MURNI
// ==========================================

// 1. Fungsi murni pembuat kalimat perkenalan
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Fungsi murni pemformat daftar keahlian
const formatKeahlian = (daftar) => daftar.join(" · ");

// Uji panggil kedua fungsi di Console
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(keahlian));