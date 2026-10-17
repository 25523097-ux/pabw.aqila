// js/api.js — LAPISAN DATA
// File ini hanya mengambil data dan memeriksa statusnya.
// Tidak ada kode yang menyentuh tampilan di sini.

// Alamat ditulis SATU kali saja. Kalau berubah, cukup ubah baris ini.
// Sumber: berkas lokal data/proyek.json (tanpa kunci akses, tanpa jaringan luar).
const URL_PROYEK = 'data/proyek.json';

export async function fetchProyek() {
  try {
    const response = await fetch(URL_PROYEK);
    console.log('status', response.status, 'ok', response.ok);

    // fetch tidak melempar galat untuk 404/500, jadi periksa response.ok
    // SEBELUM isi respons dibaca.
    if (!response.ok) {
      throw new Error('Server menjawab dengan status ' + response.status);
    }

    // json() ditolak (reject) kalau isinya bukan JSON; ditangkap catch di bawah.
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('gagal memuat', error.message);
    throw error; // dilempar lagi agar pemanggil (app.js) bisa menampilkannya di halaman
  }
}
