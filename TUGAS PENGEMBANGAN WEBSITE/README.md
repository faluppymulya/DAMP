# Portofolio Pribadi — Tugas UI/UX

Website portofolio pribadi yang dibuat untuk memenuhi tugas mata kuliah Desain Antarmuka Pengguna (UI/UX), Semester Genap 2025–2026.

## 🔗 Demo & Repository
- **Website (live)**: [isi link hosting di sini]
- **Repository**: [isi link GitHub repo di sini]

## 📄 Deskripsi Website
Website ini merupakan halaman portofolio satu halaman (*single-page*) yang menampilkan profil, keahlian, proyek, dan informasi kontak pemilik. Website dirancang dengan pendekatan minimalis modern, mengutamakan kejelasan navigasi, hierarki visual, dan konsistensi desain.

## 🎯 Target Pengguna
- Perekrut / HR yang ingin melihat profil dan kemampuan mahasiswa
- Dosen / penilai tugas
- Sesama mahasiswa atau kolaborator proyek

## 🎨 Penerapan Prinsip UI/UX
| Prinsip | Implementasi |
|---|---|
| **Konsistensi** | Palet warna, tipografi (Space Grotesk + Inter), dan komponen (tombol, kartu, tag) digunakan secara konsisten di seluruh halaman |
| **Navigasi jelas** | Navbar sticky dengan anchor link ke setiap section, menu hamburger responsif di mobile |
| **Hierarki visual** | Ukuran font, warna aksen, dan spasi digunakan untuk membedakan judul, subjudul, dan body text |
| **Feedback & Affordance** | Tombol memiliki efek hover, form kontak memberi pesan konfirmasi setelah submit |
| **Layout rapi** | Grid system dengan container terpusat, spacing konsisten antar section |
| **Tipografi & Warna** | Space Grotesk untuk heading (karakter modern-tegas), Inter untuk body (mudah dibaca), aksen warna indigo (#5B5FEF) untuk elemen interaktif |
| **Responsif** | Layout menggunakan CSS Grid & Flexbox dengan breakpoint untuk tablet (900px) dan mobile (720px) |

## 🛠️ Struktur File
```
├── index.html      → struktur & konten halaman
├── style.css       → styling, layout, dan responsivitas
├── script.js       → interaktivitas (menu mobile, form, animasi skill bar)
└── README.md       → dokumentasi proyek
```

## ✏️ Cara Mengkustomisasi
Ganti bagian berikut sesuai data Anda:
1. **index.html**
   - `Nama Anda`, `Mahasiswa Informatika`, deskripsi hero
   - Bagian "Tentang": nama kampus, program studi, lokasi
   - Bagian "Proyek": ganti nama, deskripsi, tag, dan link proyek
   - Bagian "Kontak": email, LinkedIn, GitHub
2. **Foto**: ganti `.photo-placeholder` dengan tag `<img>` ke foto Anda

## 🚀 Cara Deploy ke GitHub Pages
1. Buat repository baru di GitHub, upload ketiga file (`index.html`, `style.css`, `script.js`)
2. Masuk ke **Settings → Pages**
3. Pada **Source**, pilih branch `main` dan folder `/ (root)`
4. Simpan, tunggu beberapa menit, lalu akses link yang diberikan GitHub (format: `https://username.github.io/nama-repo/`)

## 💻 Teknologi
- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Media Queries)
- Vanilla JavaScript (tanpa framework)
- Google Fonts (Space Grotesk, Inter, JetBrains Mono)

---
© 2026 Nama Anda — Tugas Individu UI/UX
