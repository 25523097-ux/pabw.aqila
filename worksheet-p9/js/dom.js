import { daftarProyek, daftarFilm } from "./app.js";

const labelKategori = { web: "Web", aplikasi: "Aplikasi", mobile: "Mobile" };

// Fungsi bantu: buat satu baris <tr> dari array nilai sel
function buatBaris(nilai) {
  const tr = document.createElement("tr");
  nilai.forEach((isi) => {
    const td = document.createElement("td");
    if (isi instanceof Node) td.append(isi);
    else td.textContent = isi;
    tr.append(td);
  });
  return tr;
}

function buatBadge(selesai) {
  const span = document.createElement("span");
  span.className = selesai ? "badge badge-selesai" : "badge badge-proses";
  span.textContent = selesai ? "Selesai" : "Dalam proses";
  return span;
}

// ---------- Tabel Proyek (dengan filter kategori) ----------
const tbodyProyek = document.querySelector("#tabel-proyek tbody");
const pesanKosong = document.querySelector("#empty");
const tombolFilter = document.querySelectorAll("#filter .filter");

function tampilkanProyek(kategori) {
  const data = kategori === "all"
    ? daftarProyek
    : daftarProyek.filter((p) => p.kategori === kategori);

  tbodyProyek.replaceChildren(
    ...data.map((p, i) =>
      buatBaris([i + 1, p.judul, labelKategori[p.kategori], p.tahun, buatBadge(p.selesai)])
    )
  );
  pesanKosong.hidden = data.length > 0;
  document.querySelector("#tabel-proyek").hidden = data.length === 0;
}

tombolFilter.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    tombolFilter.forEach((t) => t.classList.remove("active"));
    tombol.classList.add("active");
    tampilkanProyek(tombol.dataset.category);
  });
});

tampilkanProyek("all");

// ---------- Tabel Film ----------
const KUNCI = "film-aqila";
const filmAwal = [...daftarFilm];            // salinan data bawaan
const tbodyFilm = document.querySelector("#tabel-film tbody");
const jumlahFilm = document.querySelector("#jumlah-film");

// Muat film tambahan yang tersimpan di browser (kalau ada)
function muatTersimpan() {
  try {
    const data = JSON.parse(localStorage.getItem(KUNCI));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function simpanTambahan(daftar) {
  try {
    localStorage.setItem(KUNCI, JSON.stringify(daftar));
  } catch {
    /* penyimpanan tidak tersedia, data tetap tampil selama halaman terbuka */
  }
}

let filmTambahan = muatTersimpan();

function tampilkanFilm() {
  const semua = [...filmAwal, ...filmTambahan];
  tbodyFilm.replaceChildren(
    ...semua.map((f, i) => buatBaris([i + 1, f.judul, f.tahun, f.genre]))
  );
  jumlahFilm.textContent = `${semua.length} film`;
}

tampilkanFilm();

// ---------- Form Tambah Film ----------
const form = document.querySelector("#form-film");
const pesan = document.querySelector("#form-pesan");

function tampilkanPesan(teks, galat = false) {
  pesan.textContent = teks;
  pesan.classList.toggle("galat", galat);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const judul = data.get("judul").trim();
  const tahun = Number(data.get("tahun"));
  const genre = data.get("genre");
  const tahunMaks = new Date().getFullYear() + 2;

  if (!judul || !genre || !tahun) {
    tampilkanPesan("Judul, tahun, dan genre wajib diisi.", true);
    return;
  }
  if (!Number.isInteger(tahun) || tahun < 1888 || tahun > tahunMaks) {
    tampilkanPesan(`Tahun harus antara 1888 dan ${tahunMaks}.`, true);
    return;
  }

  filmTambahan = [...filmTambahan, { judul, tahun, genre }];
  simpanTambahan(filmTambahan);
  tampilkanFilm();
  form.reset();
  tampilkanPesan(`"${judul}" berhasil ditambahkan.`);
  document.querySelector("#film-judul").focus();
});

document.querySelector("#reset-film").addEventListener("click", () => {
  filmTambahan = [];
  simpanTambahan(filmTambahan);
  tampilkanFilm();
  tampilkanPesan("Daftar film dikembalikan ke data awal.");
});
