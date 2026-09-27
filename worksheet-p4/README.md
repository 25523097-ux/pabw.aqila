# Repository PABW - Aqila Sabrina (25523097)

## Pertemuan 4: Desain Token dan CSS Modular

Pada pengerjaan minggu ini, saya memisahkan berkas stylesheet menjadi 5 file modular untuk halaman profil koleksi buku:

- `tokens.css`: Variabel warna, spasi, dan font
- `base.css`: Reset standar elemen HTML
- `layout.css`: Pengaturan flexbox header dan susunan main
- `komponen.css`: Tampilan tabel buku, form, dan kartu gambar
- `tema.css`: Fitur mode gelap sederhana

### Token Utama

| Variabel | Nilai | Penggunaan |
| --- | --- | --- |
| `--color-primary` | `#1D3A8C` | Aksesibilitas header tabel & tombol |
| `--color-bg` | `#F8FAFC` | Warna latar belakang |
| `--color-surface` | `#FFFFFF` | Latar belakang tabel dan form |
| `--radius-md` | `0.5rem` | Kebulatan sudut elemen |

Setiap perubahan warna utama cukup diperbarui pada `--color-primary` di file `tokens.css` agar langsung berubah di seluruh komponen.