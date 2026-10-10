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
console.log(formatKeahlian(profil.keahlian));

// ==========================================
// LEMBAR D — STRUKTUR DATA DAN ARRAY METHODS
// ==========================================

// Array of Object untuk daftar proyek
const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", tahun: 2026, selesai: false },
  { judul: "Aplikasi Kasir", tahun: 2025, selesai: true }
];

// Cetak data ke Console dalam bentuk tabel
console.table(profil.keahlian);
console.table(daftarProyek);

// 1. Menggunakan filter untuk mencari proyek yang sudah selesai
const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

// 2. Menggunakan find untuk mencari proyek berdasarkan judul
const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);

// 3. Menggunakan map untuk mengambil daftar judul proyek
const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.log(judulProyek);