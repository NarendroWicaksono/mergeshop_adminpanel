# 🛍️ Merge Shop Admin Dashboard

Dashboard admin lengkap untuk platform e-commerce **Merge Shop**, dibangun dengan HTML murni, Vanilla CSS, dan JavaScript — tanpa dependensi framework.

---

## 📁 Struktur Proyek

```
mergeshop/
├── index.html      ← Entry point, semua halaman & komponen
├── styles.css      ← Design system, layout, animasi
├── app.js          ← Logika navigasi, data, Chart.js, interaksi
├── package.json    ← Config proyek
└── README.md       ← Dokumentasi ini
```

---

## 🚀 Cara Menjalankan

### Opsi 1 – Buka langsung
Klik dua kali `index.html` untuk membuka di browser.

### Opsi 2 – Local server (direkomendasikan)
```bash
npm run dev
# Akses di http://localhost:3000
```

### Opsi 3 – Python HTTP server
```bash
python -m http.server 8000
# Akses di http://localhost:8000
```

---

## 🎨 Design System

| Elemen | Nilai |
|--------|-------|
| Warna Sidebar | `#8B3A1C` (terracotta brown) |
| Warna Aksen | `#C1440E` (burnt orange) |
| Background | `#FDF5F0` (warm cream) |
| Font | Inter (Google Fonts) |
| Border Radius | `14px` (kartu), `10px` (input) |

---

## 📊 Halaman yang Tersedia

| Halaman | Deskripsi |
|---------|-----------|
| **Dashboard** | Statistik utama, grafik pendapatan, donut chart status, pesanan terbaru |
| **Pengguna** | CRUD pengguna, filter role, pencarian, pagination |
| **Produk** | Grid produk, manajemen stok, tambah/hapus produk |
| **Pesanan** | Kartu pesanan, ringkasan harian, badge status |
| **Pembayaran** | Riwayat transaksi dengan status Berhasil/Gagal |
| **Pengaduan** | Keluhan pelanggan per kategori (Makanan/Pengiriman/Pembayaran) |
| **Settings** | Profil admin, keamanan akun, preferensi notifikasi |

---

## ✨ Fitur

- 📈 **Grafik Interaktif** — Chart.js dengan filter 7H / 30H / 90H
- 🔔 **Notifikasi Real-time** — Dropdown dengan badge counter
- 📤 **Export Data** — Modal export ke CSV/PDF
- 👤 **Manajemen Pengguna** — Tambah, edit, hapus dengan validasi
- 🔍 **Pencarian & Filter** — Real-time di semua halaman
- 📱 **Animasi Halus** — Fade-in, hover lift, micro-interactions
- ⌨️ **Keyboard Support** — `ESC` untuk menutup modal
- 🍞 **Toast Notifications** — Feedback untuk setiap aksi

---

## 🧰 Tech Stack

- **HTML5** — Semantic markup
- **Vanilla CSS** — Custom design system, CSS variables
- **Vanilla JavaScript** — SPA navigation, DOM manipulation
- **[Chart.js 4.4](https://www.chartjs.org/)** — Grafik (CDN)
- **[Google Fonts – Inter](https://fonts.google.com/specimen/Inter)** — Typography

---

## 📌 Catatan Pengembangan

Proyek ini menggunakan arsitektur **Single Page Application (SPA)** sederhana:
- Navigasi dikelola via JavaScript dengan toggle CSS class `.active`
- Data disimpan di array JavaScript (bisa diganti dengan API backend)
- Chart.js di-load dari CDN, diinisialisasi lazy saat halaman Dashboard pertama kali dibuka

---

*Built for Merge Shop © 2024*
