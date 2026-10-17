# Repository PABW - Aqila Sabrina (25523097)

## Pertemuan 3 - HTML5 Semantik, Form, Media, dan Aksesibilitas

### Ringkasan Pengerjaan
Halaman `worksheet-p3/profil.html` berisi daftar film yang sudah ditonton ("Movies List"). Struktur memakai landmark semantik (`header`, `nav`, `main`, `section`, `footer`), tabel data dengan `caption`, `thead`/`tbody`, dan `th scope`, form tambah film dengan label eksplisit dan tipe input yang sesuai (`text`, `select`, `number`), serta gambar dengan teks alternatif dan dimensi eksplisit. Gaya dasar ada di `style.css`.

## Pertemuan 4 - Desain Token dan CSS Modular

### Ringkasan Pengerjaan
Folder `worksheet-p4` memisahkan stylesheet menjadi lima berkas modular untuk halaman "Rak Buku Saya": `tokens.css` (variabel warna, spasi, ukuran huruf), `base.css` (reset dan gaya dasar), `layout.css` (header, navigasi, susunan `main`), `komponen.css` (tabel, form, gambar), dan `tema.css` (mode gelap otomatis dan pengalih manual). Perubahan warna utama cukup dilakukan pada `--color-primary` di `tokens.css`. Penjelasan lengkap ada di `worksheet-p4/README.md`.

## Pertemuan 8 - JavaScript Modern ES6+, Struktur Data, dan Array Methods

### Ringkasan Pengerjaan
Pada pertemuan ini, isi halaman profil dipindahkan dari teks tetap HTML ke dalam variabel JavaScript (objek & array) serta diolah menggunakan array methods (`map`, `filter`, `find`) tanpa mengubah data asli.

### Deklarasi AI
- **Bagian yang dibantu AI**: Membantu memverifikasi logika array methods (`map`, `filter`, `find`) dan penanganan galat jaringan Git.
- **Bagian yang dikerjakan sendiri**: Penyusunan data profil sebagai variabel & objek, pemuatan skrip modul ES6, penulisan dua fungsi murni, pengisian tabel jawaban worksheet, dan penanganan galat `querySelector`/`null`.

### Catatan Penting / Hal yang Mengatur Pengoperasian
- Penggunaan `const` dan `let` disesuaikan dengan niat mutasi variabel.
- Menggunakan `{ ...profil }` untuk membuat salinan dangkal (shallow copy) objek agar data asli tidak ikut berubah saat diubah.
- Skrip dihubungkan menggunakan `<script type="module" src="js/app.js"></script>` sebelum tag penutup `</body>`.

## Pertemuan 9 - DOM dan Event

### Ringkasan Pengerjaan
Folder `worksheet-p9` melanjutkan halaman profil dari Pertemuan 8. Fungsi, data, dan array methods dari `js/app.js` kini diekspor sebagai modul ES6. `profil.html` ditambah kerangka daftar proyek: tombol filter kategori (`#filter`), wadah kartu (`#list`), dan pesan kosong (`#empty`). Berkas `js/dom.js` disiapkan sebagai tempat kode tampilan.

## Pertemuan 10 - JavaScript Asinkron: fetch, Promise, dan JSON

### Ringkasan Pengerjaan
Daftar proyek pada halaman profil diambil lewat `fetch` dari berkas lokal `data/proyek.json`, lalu ditampilkan sebagai kartu. Lapisan data ada di `js/api.js` (fungsi `fetchProyek`), lapisan tampilan di `js/dom.js`, dan pemanggilnya di `js/app.js`. Ada empat state: loading, sukses, gagal, dan kosong. Bukti tangkapan layar ada di `worksheet-p10/bukti/`.

### Sumber Data
Berkas lokal `data/proyek.json`. Halaman dijalankan lewat server lokal (`python3 -m http.server 8000`), tidak dibuka dengan klik ganda.

### Deklarasi AI
- **Bagian yang dibantu AI**: Penulisan kode `js/api.js`, `js/dom.js`, tambahan di `js/app.js`, `data/proyek.json`, CSS kartu dan state, perbaikan galat dari Pertemuan 9, tangkapan layar bukti, serta draf isian worksheet.
- **Bagian yang dikerjakan sendiri**: Memasukkan folder `worksheet-p10` ke repositori dengan struktur yang benar, memindahkan file ke lokasi yang tepat, menyusun README repositori, serta menjalankan `git add`, `git commit`, dan `git push` ke GitHub.