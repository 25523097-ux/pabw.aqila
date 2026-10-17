// js/dom.js — LAPISAN TAMPILAN
// Hanya membangun elemen. Tidak ada pengambilan data di sini.

const container = document.querySelector('#list');
const status = document.querySelector('#status');
const empty = document.querySelector('#empty');

// State 1: LOADING
export function tampilkanLoading() {
  container.textContent = '';
  empty.hidden = true;
  status.hidden = false;
  status.className = 'status status-loading';
  status.textContent = 'Memuat daftar proyek…';
}

// State 3: FAILURE — pesan galat tampil di halaman, bukan hanya di Console
export function tampilkanGalat(pesan) {
  container.textContent = '';
  empty.hidden = true;
  status.hidden = false;
  status.className = 'status status-error';
  status.textContent = 'Gagal memuat proyek: ' + pesan;
}

// State 2 dan 4: SUCCESS dan EMPTY
export function render(daftar, pesanKosong = 'Belum ada proyek.') {
  container.textContent = '';        // kosongkan dulu agar kartu tidak berlipat
  status.hidden = true;

  if (daftar.length === 0) {         // State 4: EMPTY
    empty.textContent = pesanKosong;
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  daftar.forEach(function (p) {
    const card = document.createElement('li');
    card.className = 'card';

    const judul = document.createElement('h3');
    judul.textContent = p.judul;               // textContent, bukan innerHTML

    const meta = document.createElement('p');
    meta.className = 'meta';
    meta.textContent = p.kategori + ' · ' + p.tahun + ' · ' +
      (p.selesai ? 'Selesai' : 'Dalam pengerjaan');

    const desk = document.createElement('p');
    desk.textContent = p.deskripsi;

    card.append(judul, meta, desk);

    if (p.tautan !== null) {                   // tautan boleh null
      const a = document.createElement('a');
      a.href = p.tautan;
      a.textContent = 'Lihat proyek';
      card.appendChild(a);
    }
    container.appendChild(card);
  });
}
