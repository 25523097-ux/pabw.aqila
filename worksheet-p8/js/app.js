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
const kalimat = `Nama saya ${profil.nama}, seorang ${profil.peran} dengan ${keahlian.length} keahlian. Skor saat ini: ${skor}.`;

console.log(kalimat);