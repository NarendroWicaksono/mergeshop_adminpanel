/* ===== APP.JS – Merge Shop Admin Dashboard ===== */

// ---- DATA ----
const USERS = [
  { id:1, name:'Budi Santoso', email:'budi@email.com', role:'pelanggan', status:'aktif', joined:'10 Sep 2023', bg:'4F46E5' },
  { id:2, name:'Siti Aminah', email:'siti@email.com', role:'pelanggan', status:'aktif', joined:'15 Sep 2023', bg:'16A34A' },
  { id:3, name:'Andi Wijaya', email:'andi@email.com', role:'editor', status:'aktif', joined:'20 Sep 2023', bg:'D97706' },
  { id:4, name:'Dewi Lestari', email:'dewi@email.com', role:'moderator', status:'nonaktif', joined:'25 Sep 2023', bg:'7C3AED' },
  { id:5, name:'Emanuel Sodikin', email:'emanuel@email.com', role:'pelanggan', status:'aktif', joined:'01 Okt 2023', bg:'C1440E' },
  { id:6, name:'Maya Angelia', email:'maya@email.com', role:'admin', status:'aktif', joined:'05 Okt 2023', bg:'0891B2' },
  { id:7, name:'Rizki Ramadan', email:'rizki@email.com', role:'pelanggan', status:'aktif', joined:'08 Okt 2023', bg:'9333EA' },
  { id:8, name:'Nana Supriatna', email:'nana@email.com', role:'editor', status:'aktif', joined:'12 Okt 2023', bg:'059669' },
];

const MITRA = [
  { id:1, nama:'Mbah Kakung', pemilik:'Slamet Riyadi', kategori:'Makanan', kota:'Yogyakarta', telepon:'+62 812-1111-2222', alamat:'Jl. Malioboro No. 45, Yogyakarta', bergabung:'03 Jan 2023', rating:4.9, totalPesanan:1240, pendapatan:'Rp 84,5 Jt', status:'aktif', bg:'C1440E' },
  { id:2, nama:'Ayam Geprek Rejo', pemilik:'Agus Rejo Santoso', kategori:'Makanan', kota:'Semarang', telepon:'+62 812-3333-4444', alamat:'Jl. Pandanaran No. 88, Semarang', bergabung:'14 Feb 2023', rating:4.7, totalPesanan:896, pendapatan:'Rp 52,1 Jt', status:'menunggu', bg:'D97706' },
  { id:3, nama:'Kopi Kenangan Nusantara', pemilik:'Dian Prastiwi', kategori:'Minuman', kota:'Bandung', telepon:'+62 857-5555-6666', alamat:'Jl. Braga No. 12, Bandung', bergabung:'20 Mar 2023', rating:4.8, totalPesanan:2103, pendapatan:'Rp 120,3 Jt', status:'aktif', bg:'0891B2' },
  { id:4, nama:'Bebek Pak Ndut', pemilik:'Suparman Wijaya', kategori:'Makanan', kota:'Surabaya', telepon:'+62 878-7777-8888', alamat:'Jl. Basuki Rahmat No. 30, Surabaya', bergabung:'05 Apr 2023', rating:4.6, totalPesanan:674, pendapatan:'Rp 39,8 Jt', status:'aktif', bg:'7C3AED' },
  { id:5, nama:'Es Teler 77 Cabang Baru', pemilik:'Hartini Susilo', kategori:'Minuman', kota:'Jakarta', telepon:'+62 811-9999-0000', alamat:'Jl. Sudirman No. 150, Jakarta Pusat', bergabung:'18 Apr 2023', rating:4.5, totalPesanan:538, pendapatan:'Rp 28,4 Jt', status:'menunggu', bg:'16A34A' },
  { id:6, nama:'Dapur Ibu Sari', pemilik:'Sri Lestari Handayani', kategori:'Katering', kota:'Solo', telepon:'+62 823-1234-5678', alamat:'Jl. Slamet Riyadi No. 77, Solo', bergabung:'02 Mei 2023', rating:4.9, totalPesanan:412, pendapatan:'Rp 61,2 Jt', status:'aktif', bg:'9333EA' },
  { id:7, nama:'Martabak Malabar', pemilik:'Hendra Kusuma', kategori:'Makanan & Minuman', kota:'Malang', telepon:'+62 856-2345-6789', alamat:'Jl. Ijen No. 22, Malang', bergabung:'15 Jun 2023', rating:4.3, totalPesanan:189, pendapatan:'Rp 14,7 Jt', status:'nonaktif', bg:'6B7280' },
  { id:8, nama:'Warung Nasi Padang Asli', pemilik:'Ramadhan Hakim', kategori:'Makanan', kota:'Padang', telepon:'+62 813-3456-7890', alamat:'Jl. M. Yamin No. 9, Padang', bergabung:'01 Jul 2023', rating:4.8, totalPesanan:1567, pendapatan:'Rp 93,6 Jt', status:'aktif', bg:'C1440E' },
];

const ORDERS = [
  { id:'#ORD-1024', customer:'Budi Santoso', time:'15 Okt 2023, 14:20', total:'Rp 450.000', status:'pending' },
  { id:'#ORD-1023', customer:'Siti Aminah', time:'15 Okt 2023, 12:45', total:'Rp 1.250.000', status:'diproses' },
  { id:'#ORD-1022', customer:'Andi Wijaya', time:'14 Okt 2023, 18:10', total:'Rp 89.000', status:'diantar' },
  { id:'#ORD-1021', customer:'Dewi Lestari', time:'14 Okt 2023, 11:30', total:'Rp 2.100.000', status:'pending' },
  { id:'#ORD-1020', customer:'Emanuel Sodikin', time:'14 Okt 2023, 10:05', total:'Rp 85.000', status:'gagal' },
  { id:'#ORD-1019', customer:'Maya Angelia', time:'13 Okt 2023, 16:30', total:'Rp 320.000', status:'berhasil' },
];

const TRANSACTIONS = [
  { id:'#TRX-202301', customer:'Budi Santoso', date:'14 Okt 2023, 10:24', amount:'Rp 150.000', status:'berhasil' },
  { id:'#TRX-202302', customer:'Siti Aminah', date:'14 Okt 2023, 11:05', amount:'Rp 450.000', status:'berhasil' },
  { id:'#TRX-202303', customer:'Emanuel Sodikin', date:'14 Okt 2023, 11:45', amount:'Rp 85.000', status:'gagal' },
  { id:'#TRX-202304', customer:'Maya Angelia', date:'14 Okt 2023, 12:15', amount:'Rp 2.100.000', status:'berhasil' },
];

const COMPLAINTS = {
  makanan: [
    { id:'#CP-102', name:'Budi Santoso', msg:'Pesanan nasi goreng saya datang dalam keadaan dingin dan kemasannya rusak. Mohon tindak lanjutnya segera.', time:'24 Okt 2023, 14:30', status:'baru' },
    { id:'#CP-098', name:'Siti Aminah', msg:'Ada item yang kurang dari pesanan martabak manis saya. Tolong dicek dengan driver atau restorannya.', time:'24 Okt 2023, 11:15', status:'diproses' },
    { id:'#CP-085', name:'Oliver Wijaya', msg:'Rasa sate ayamnya agak basi, tidak seperti biasanya. Sudah saya buang.', time:'23 Okt 2023, 19:45', status:'selesai' },
  ],
  pengiriman: [
    { id:'#CP-101', name:'Dewi Lestari', msg:'Driver tidak bisa dihubungi selama 30 menit. Pesanan akhirnya datang terlambat 1 jam.', time:'24 Okt 2023, 13:00', status:'baru' },
    { id:'#CP-099', name:'Rizki Ramadan', msg:'Pesanan diantar ke alamat yang salah. Mohon prosedur refund segera diproses.', time:'24 Okt 2023, 10:45', status:'diproses' },
  ],
  pembayaran: [
    { id:'#CP-100', name:'Andi Wijaya', msg:'Saldo saya terpotong dua kali untuk satu transaksi yang sama. Mohon dikembalikan.', time:'24 Okt 2023, 09:30', status:'baru' },
    { id:'#CP-097', name:'Nana Supriatna', msg:'Transaksi gagal tapi saldo sudah terpotong. Belum ada refund masuk sampai sekarang.', time:'23 Okt 2023, 17:20', status:'selesai' },
  ]
};

// ---- STATE ----
let currentPage = 'dashboard';
let currentUserFilter = 'all';
let currentUserPage = 0;
let filteredUsers = [...USERS];
let currentMitraFilter = 'all';
let currentMitraPage = 0;
let filteredMitra = [...MITRA];
let revenueChart = null;
let statusChart = null;
let chartsInitialized = false;

// ---- NAVIGATION ----
function navigate(page) {
  // Close sidebar on mobile
  if (window.innerWidth <= 768) closeSidebar();

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  // Show target page
  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');

  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');

  // Update topbar
  const titles = {
    dashboard: ['Dashboard Overview', 'Selamat Datang di Dashboard Admin Merge Shop'],
    pengguna: ['Manajemen Pengguna', 'Kelola akun pengguna dan hak akses tim Merge Shop'],
    mitra: ['Manajemen Mitra', 'Kelola dan verifikasi mitra penjual di platform Merge Shop'],
    pesanan: ['Manajemen Pesanan', 'Pantau dan proses pesanan dari pelanggan'],
    pembayaran: ['Riwayat Transaksi', 'Selamat Datang di Dashboard Admin Merge Shop'],
    pengaduan: ['Manajemen Pengaduan', 'Selamat Datang di Dashboard Admin Merge Shop'],
    settings: ['Pengaturan', 'Kelola preferensi akun dan konfigurasi sistem'],
  };
  const [title, subtitle] = titles[page] || ['', ''];
  document.getElementById('page-title').textContent = title;
  document.getElementById('page-subtitle').textContent = subtitle;

  currentPage = page;

  // Close notifications
  document.getElementById('notif-dropdown').classList.remove('open');

  // Lazy init charts
  if (page === 'dashboard' && !chartsInitialized) {
    setTimeout(initCharts, 100);
  }

  // Render dynamic content
  if (page === 'pengguna') renderUsers();
  if (page === 'mitra') { renderMitraStats(); renderMitra(); }
  if (page === 'pesanan') renderOrders();
  if (page === 'pembayaran') renderTransactions();
  if (page === 'pengaduan') renderComplaints('makanan');
}

// ---- CHARTS ----
function initCharts() {
  chartsInitialized = true;
  initRevenueChart('7d');
  initStatusChart();
}

function initRevenueChart(period) {
  const ctx = document.getElementById('revenueChart').getContext('2d');
  const datasets7d = {
    labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
    data: [3.2, 4.8, 3.9, 5.6, 7.1, 8.3, 6.9],
  };
  const datasets30d = {
    labels: ['Mg1', 'Mg2', 'Mg3', 'Mg4'],
    data: [12.5, 18.3, 14.7, 22.1],
  };
  const datasets90d = {
    labels: ['Jul', 'Agu', 'Sep', 'Okt'],
    data: [35.2, 42.8, 38.9, 48.5],
  };
  const d = period === '7d' ? datasets7d : period === '30d' ? datasets30d : datasets90d;

  if (revenueChart) revenueChart.destroy();
  revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: d.labels,
      datasets: [{
        label: 'Pendapatan (Jt)',
        data: d.data,
        borderColor: '#C1440E',
        backgroundColor: 'rgba(193,68,14,0.08)',
        fill: true,
        tension: 0.45,
        pointBackgroundColor: '#C1440E',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => `  Rp ${ctx.raw} Jt` } } },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 11, family: 'Inter' }, color: '#9CA3AF' } },
        y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 11, family: 'Inter' }, color: '#9CA3AF', callback: v => `${v}Jt` } }
      }
    }
  });
}

function initStatusChart() {
  const ctx = document.getElementById('statusChart').getContext('2d');
  if (statusChart) statusChart.destroy();
  statusChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Berhasil', 'Diproses', 'Pending', 'Gagal'],
      datasets: [{
        data: [62, 24, 10, 4],
        backgroundColor: ['#C1440E', '#F59E0B', '#6B7280', '#EF4444'],
        borderWidth: 0,
        hoverOffset: 6,
      }]
    },
    options: {
      cutout: '68%',
      plugins: { legend: { display: false } },
      responsive: true,
    }
  });
}

function setPeriod(btn, period) {
  document.querySelectorAll('.period-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  initRevenueChart(period);
}

// ---- USERS ----
function renderUsers() {
  const start = currentUserPage * 5;
  const paginated = filteredUsers.slice(start, start + 5);
  const tbody = document.getElementById('user-tbody');
  tbody.innerHTML = paginated.map(u => `
    <tr>
      <td>
        <div class="user-cell">
          <img class="user-avatar" src="https://ui-avatars.com/api/?name=${encodeURIComponent(u.name)}&background=${u.bg}&color=fff&size=34" alt="${u.name}" />
          <div class="user-cell-info">
            <span class="user-cell-name">${u.name}</span>
            <span class="user-cell-sub">ID-${String(u.id).padStart(3,'0')}</span>
          </div>
        </div>
      </td>
      <td>${u.email}</td>
      <td><span class="badge ${u.role === 'admin' ? 'baru' : u.role === 'editor' ? 'diproses' : u.role === 'moderator' ? 'diantar' : 'berhasil'}">${capitalize(u.role)}</span></td>
      <td><span class="badge ${u.status === 'aktif' ? 'berhasil' : 'gagal'}">${capitalize(u.status)}</span></td>
      <td>${u.joined}</td>
      <td>
        <button class="action-btn" title="Edit" onclick="showToast('Mengedit pengguna ${u.name}','success')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="action-btn danger" title="Hapus" onclick="deleteUser(${u.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
        </button>
      </td>
    </tr>
  `).join('');
  document.getElementById('user-count').textContent =
    `Menampilkan ${start+1}-${Math.min(start+5, filteredUsers.length)} dari ${filteredUsers.length} pengguna`;
  document.getElementById('user-page-indicator').textContent = currentUserPage + 1;
}

function filterUsers() {
  const q = document.getElementById('user-search').value.toLowerCase();
  filteredUsers = USERS.filter(u =>
    (currentUserFilter === 'all' || u.role === currentUserFilter) &&
    (u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q))
  );
  currentUserPage = 0;
  renderUsers();
}

function filterUserRole(btn, role) {
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentUserFilter = role;
  filterUsers();
}

function userPage(dir) {
  const maxPage = Math.ceil(filteredUsers.length / 5) - 1;
  currentUserPage = Math.max(0, Math.min(maxPage, currentUserPage + dir));
  renderUsers();
}

function deleteUser(id) {
  const idx = USERS.findIndex(u => u.id === id);
  if (idx !== -1) {
    const name = USERS[idx].name;
    USERS.splice(idx, 1);
    filteredUsers = USERS.filter(u => currentUserFilter === 'all' || u.role === currentUserFilter);
    renderUsers();
    showToast(`Pengguna ${name} telah dihapus`, 'success');
  }
}

function saveUser() {
  const name = document.getElementById('new-user-name').value.trim();
  const email = document.getElementById('new-user-email').value.trim();
  const role = document.querySelector('input[name="user-role"]:checked')?.value || 'pelanggan';
  if (!name || !email) { showToast('Nama dan email wajib diisi!', 'error'); return; }
  const colors = ['4F46E5','16A34A','D97706','7C3AED','C1440E','0891B2'];
  USERS.push({ id: Date.now(), name, email, role, status: 'aktif', joined: 'Baru saja', bg: colors[USERS.length % colors.length] });
  filteredUsers = [...USERS];
  closeModal('add-user-modal');
  renderUsers();
  showToast(`Pengguna ${name} berhasil ditambahkan!`, 'success');
  document.getElementById('new-user-name').value = '';
  document.getElementById('new-user-email').value = '';
}

// ---- MITRA ----
function renderMitraStats() {
  const total = MITRA.length;
  const aktif = MITRA.filter(m => m.status === 'aktif').length;
  const pending = MITRA.filter(m => m.status === 'menunggu').length;
  const nonaktif = MITRA.filter(m => m.status === 'nonaktif').length;
  document.getElementById('mstat-total').textContent = total;
  document.getElementById('mstat-aktif').textContent = aktif;
  document.getElementById('mstat-pending').textContent = pending;
  document.getElementById('mstat-nonaktif').textContent = nonaktif;
  document.getElementById('mstat-total-sub').textContent = `${total} terdaftar`;
  document.getElementById('mstat-aktif-sub').textContent = `${Math.round(aktif/total*100)}% dari total`;
  document.getElementById('mstat-pending-sub').textContent = pending > 0 ? 'Butuh tindakan segera' : 'Semua terverifikasi';
  document.getElementById('mstat-nonaktif-sub').textContent = `${nonaktif} perlu ditinjau`;
}

function renderMitra() {
  const q = (document.getElementById('mitra-search')?.value || '').toLowerCase();
  filteredMitra = MITRA.filter(m => {
    const matchStatus = currentMitraFilter === 'all' || m.status === currentMitraFilter;
    const matchQuery = m.nama.toLowerCase().includes(q) || m.pemilik.toLowerCase().includes(q) || m.kota.toLowerCase().includes(q);
    return matchStatus && matchQuery;
  });
  const start = currentMitraPage * 6;
  const paginated = filteredMitra.slice(start, start + 6);
  const tbody = document.getElementById('mitra-tbody');
  tbody.innerHTML = paginated.map(m => {
    const statusClass = m.status === 'aktif' ? 'berhasil' : m.status === 'menunggu' ? 'pending' : 'gagal';
    const statusLbl = m.status === 'aktif' ? 'Aktif' : m.status === 'menunggu' ? 'Menunggu Verifikasi' : 'Nonaktif';
    const stars = '★'.repeat(Math.floor(m.rating));
    return `
    <tr>
      <td style="padding-left:24px;">
        <div class="user-cell">
          <div class="mitra-avatar" style="background:linear-gradient(135deg,#${m.bg}22,#${m.bg}55);color:#${m.bg};">${m.nama.charAt(0)}</div>
          <div class="user-cell-info">
            <span class="user-cell-name">${m.nama}</span>
            <span class="user-cell-sub">${m.pemilik}</span>
          </div>
        </div>
      </td>
      <td><span class="mitra-tag">${m.kategori}</span></td>
      <td><span class="mitra-city"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${m.kota}</span></td>
      <td style="font-size:0.8rem;color:var(--text-secondary);">${m.bergabung}</td>
      <td><span class="mitra-rating">${m.rating} <span style="color:#F59E0B;font-size:0.8rem;">${stars}</span></span></td>
      <td><span class="badge ${statusClass}" style="white-space:nowrap;">${statusLbl}</span></td>
      <td>
        <div class="mitra-actions">
          ${m.status === 'menunggu' ? `<button class="btn-verify" onclick="verifyMitra(${m.id})">Verifikasi</button>` : ''}
          <button class="action-btn" title="Detail" onclick="openMitraDetail(${m.id})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
          <button class="action-btn danger" title="Hapus" onclick="deleteMitra(${m.id})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
          </button>
        </div>
      </td>
    </tr>`;
  }).join('');
  const total = filteredMitra.length;
  document.getElementById('mitra-count').textContent = total === 0 ? 'Tidak ada mitra ditemukan' : `Menampilkan ${start+1}–${Math.min(start+6,total)} dari ${total} mitra`;
  document.getElementById('mitra-page-indicator').textContent = currentMitraPage + 1;
}

function filterMitraStatus(btn, status) {
  document.querySelectorAll('#page-mitra .filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentMitraFilter = status;
  currentMitraPage = 0;
  renderMitra();
}

function filterMitra() {
  currentMitraPage = 0;
  renderMitra();
}

function mitraPage(dir) {
  const maxPage = Math.ceil(filteredMitra.length / 6) - 1;
  currentMitraPage = Math.max(0, Math.min(maxPage, currentMitraPage + dir));
  renderMitra();
}

function verifyMitra(id) {
  const m = MITRA.find(m => m.id === id);
  if (!m) return;
  m.status = 'aktif';
  renderMitraStats();
  renderMitra();
  showToast(`✅ Mitra "${m.nama}" berhasil diverifikasi!`, 'success');
}

function deleteMitra(id) {
  const idx = MITRA.findIndex(m => m.id === id);
  if (idx !== -1) {
    const name = MITRA[idx].nama;
    MITRA.splice(idx, 1);
    filteredMitra = [...MITRA];
    renderMitraStats();
    renderMitra();
    showToast(`Mitra ${name} telah dihapus`, 'success');
  }
}

function saveMitra() {
  const nama = document.getElementById('new-mitra-nama').value.trim();
  const pemilik = document.getElementById('new-mitra-pemilik').value.trim();
  const kategori = document.getElementById('new-mitra-kategori').value;
  const kota = document.getElementById('new-mitra-kota').value.trim();
  const telepon = document.getElementById('new-mitra-telepon').value.trim();
  const alamat = document.getElementById('new-mitra-alamat').value.trim();
  if (!nama || !pemilik) { showToast('Nama usaha dan pemilik wajib diisi!', 'error'); return; }
  const colors = ['C1440E','D97706','0891B2','7C3AED','16A34A','9333EA'];
  const today = new Date();
  const months = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
  const joined = `${String(today.getDate()).padStart(2,'0')} ${months[today.getMonth()]} ${today.getFullYear()}`;
  MITRA.push({
    id: Date.now(), nama, pemilik, kategori, kota: kota || 'Indonesia',
    telepon: telepon || '-', alamat: alamat || '-',
    bergabung: joined, rating: 0, totalPesanan: 0,
    pendapatan: 'Rp 0', status: 'menunggu',
    bg: colors[MITRA.length % colors.length]
  });
  closeModal('add-mitra-modal');
  renderMitraStats();
  renderMitra();
  showToast(`Mitra "${nama}" berhasil ditambahkan, menunggu verifikasi.`, 'success');
  ['new-mitra-nama','new-mitra-pemilik','new-mitra-kota','new-mitra-telepon','new-mitra-alamat'].forEach(id => {
    const el = document.getElementById(id); if(el) el.value = '';
  });
}

function openMitraDetail(id) {
  const m = MITRA.find(m => m.id === id);
  if (!m) return;
  const statusClass = m.status === 'aktif' ? 'berhasil' : m.status === 'menunggu' ? 'pending' : 'gagal';
  const statusLbl = m.status === 'aktif' ? 'Aktif' : m.status === 'menunggu' ? 'Menunggu Verifikasi' : 'Nonaktif';
  const stars = m.rating > 0 ? '★'.repeat(Math.floor(m.rating)) : '';
  document.getElementById('mitra-detail-body').innerHTML = `
    <div class="mitra-detail-header">
      <div class="mitra-detail-avatar" style="background:linear-gradient(135deg,#${m.bg}22,#${m.bg}55);color:#${m.bg};">${m.nama.charAt(0)}</div>
      <div class="mitra-detail-title">
        <h2 style="font-size:1.3rem;font-weight:800;margin-bottom:2px;">${m.nama}</h2>
        <p style="color:var(--text-secondary);font-size:0.875rem;">${m.pemilik}</p>
        <span class="badge ${statusClass}" style="margin-top:8px;display:inline-flex;">${statusLbl}</span>
      </div>
    </div>
    <div class="mitra-detail-stats">
      <div class="mitra-ds">
        <span class="mitra-ds-val">${m.totalPesanan.toLocaleString('id-ID')}</span>
        <span class="mitra-ds-label">Total Pesanan</span>
      </div>
      <div class="mitra-ds">
        <span class="mitra-ds-val">${m.pendapatan}</span>
        <span class="mitra-ds-label">Pendapatan</span>
      </div>
      <div class="mitra-ds">
        <span class="mitra-ds-val" style="color:#F59E0B;">${m.rating > 0 ? m.rating : '–'} ${stars ? '<span style="font-size:0.85rem;">'+stars+'</span>' : ''}</span>
        <span class="mitra-ds-label">Rating</span>
      </div>
    </div>
    <div class="mitra-detail-info">
      <div class="mdi-row"><span class="mdi-lbl">Kategori</span><span>${m.kategori}</span></div>
      <div class="mdi-row"><span class="mdi-lbl">Kota</span><span>${m.kota}</span></div>
      <div class="mdi-row"><span class="mdi-lbl">Telepon</span><span>${m.telepon}</span></div>
      <div class="mdi-row"><span class="mdi-lbl">Bergabung</span><span>${m.bergabung}</span></div>
      <div class="mdi-row"><span class="mdi-lbl">Alamat</span><span>${m.alamat}</span></div>
    </div>
  `;
  document.getElementById('mitra-detail-footer').innerHTML = `
    <div style="display:flex;gap:10px;flex-wrap:wrap;">
      ${m.status === 'menunggu' ? `<button class="btn-primary" onclick="verifyMitra(${m.id});closeModal('mitra-detail-modal')">✅ Verifikasi Sekarang</button>` : ''}
      ${m.status === 'aktif' ? `<button class="btn-secondary" onclick="toggleMitraStatus(${m.id},'nonaktif')">Nonaktifkan</button>` : ''}
      ${m.status === 'nonaktif' ? `<button class="btn-primary" onclick="toggleMitraStatus(${m.id},'aktif')">Aktifkan Kembali</button>` : ''}
      <button class="btn-secondary" onclick="closeModal('mitra-detail-modal')">Tutup</button>
    </div>
  `;
  openModal('mitra-detail-modal');
}

function toggleMitraStatus(id, newStatus) {
  const m = MITRA.find(m => m.id === id);
  if (!m) return;
  m.status = newStatus;
  closeModal('mitra-detail-modal');
  renderMitraStats();
  renderMitra();
  showToast(`Status mitra "${m.nama}" diubah menjadi ${newStatus === 'aktif' ? 'Aktif' : 'Nonaktif'}.`, 'success');
}


// ---- ORDERS ----
function renderOrders() {
  const grid = document.getElementById('orders-grid');
  grid.innerHTML = ORDERS.map(o => `
    <div class="order-card">
      <div class="order-card-header">
        <div>
          <div class="order-card-id">ORDER ID</div>
          <div style="font-weight:800;font-size:1.05rem">${o.id}</div>
        </div>
        <div class="order-card-header-right">
          <span class="badge ${o.status}">${statusLabel(o.status)}</span>
          <button class="menu-btn">⋮</button>
        </div>
      </div>
      <div class="order-customer">
        <div class="order-customer-avatar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <div>
          <div class="order-customer-name">${o.customer}</div>
          <div class="order-customer-time">${o.time}</div>
        </div>
      </div>
      <div class="order-card-label">Total Tagihan</div>
      <div class="order-card-total">${o.total}</div>
    </div>
  `).join('');
}

function processAll() {
  showToast('Memproses semua pesanan pending...', 'success');
}

// ---- TRANSACTIONS ----
function renderTransactions() {
  const list = document.getElementById('transactions-list');
  list.innerHTML = TRANSACTIONS.map(t => `
    <div class="transaction-item">
      <div class="trx-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
      </div>
      <div class="trx-info">
        <div class="trx-meta">${t.id} · ${t.date}</div>
        <div class="trx-name">${t.customer}</div>
      </div>
      <div class="trx-amount">
        <span class="trx-amount-label">Total Pembayaran</span>
        <span class="trx-amount-value">${t.amount}</span>
      </div>
      <span class="badge ${t.status}" style="margin-left:12px">${statusLabel(t.status)}</span>
      <button class="trx-more">⋮</button>
    </div>
  `).join('');
}

// ---- COMPLAINTS ----
function renderComplaints(category) {
  const list = document.getElementById('complaints-list');
  const items = COMPLAINTS[category] || [];
  list.innerHTML = items.map(c => `
    <div class="complaint-item">
      <div class="complaint-header">
        <span class="complaint-id">${c.id}</span>
        <span class="badge ${c.status}">${statusLabel(c.status)}</span>
      </div>
      <div class="complaint-name">${c.name}</div>
      <div class="complaint-msg">${c.msg}</div>
      <div class="complaint-footer">
        <div class="complaint-time">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ${c.time}
        </div>
        <button class="complaint-detail" onclick="showToast('Membuka detail pengaduan ${c.id}','success')">Detail ›</button>
      </div>
    </div>
  `).join('');
}

function filterComplaint(btn, category) {
  document.querySelectorAll('#page-pengaduan .filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderComplaints(category);
}

// ---- MODALS ----
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e, id) {
  if (e.target.id === id) closeModal(id);
}

// ---- EXPORT ----
function generateExport() {
  const type = document.querySelector('input[name="export-type"]:checked')?.value || 'sales';
  showToast(`📥 Export ${type === 'sales' ? 'Laporan Penjualan' : type === 'users' ? 'Data Pengguna' : 'Riwayat Transaksi'} sedang dibuat...`, 'success');
  setTimeout(() => closeModal('export-modal'), 800);
}

function setFormat(btn, fmt) {
  document.querySelectorAll('.format-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ---- RADIO OPTION STYLING ----
document.addEventListener('change', e => {
  if (e.target.name === 'export-type') {
    document.querySelectorAll('.radio-option').forEach(o => o.classList.remove('selected'));
    e.target.closest('.radio-option')?.classList.add('selected');
  }
  if (e.target.name === 'user-role') {
    document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
    e.target.closest('.role-card')?.classList.add('selected');
  }
});

// ---- NOTIFICATIONS ----
function toggleNotif() {
  const dd = document.getElementById('notif-dropdown');
  dd.classList.toggle('open');
}

function markAllRead() {
  document.querySelectorAll('.notif-dot').forEach(d => d.classList.add('read'));
  document.querySelectorAll('.notif-item').forEach(i => i.classList.remove('unread'));
  document.querySelector('.notif-badge').textContent = '0';
  document.querySelector('.notif-badge').style.display = 'none';
  showToast('Semua notifikasi ditandai dibaca', 'success');
}

document.addEventListener('click', e => {
  const dd = document.getElementById('notif-dropdown');
  const btn = document.getElementById('notif-btn');
  if (!dd.contains(e.target) && !btn.contains(e.target)) {
    dd.classList.remove('open');
  }
});

// ---- TOAST ----
let toastTimer = null;
function showToast(msg, type = '') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show ' + type;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.classList.remove('show'); }, 3200);
}

// ---- HELPERS ----
function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function formatRp(n) { return 'Rp ' + n.toLocaleString('id-ID'); }
function statusLabel(s) {
  const map = { pending:'Pending', diproses:'Diproses', diantar:'Diantar', berhasil:'Berhasil', gagal:'Gagal', baru:'Baru', selesai:'Selesai' };
  return map[s] || capitalize(s);
}

// ---- SIDEBAR (MOBILE) ----
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const btn = document.getElementById('hamburger-btn');
  const isOpen = sidebar.classList.toggle('open');
  overlay.classList.toggle('active', isOpen);
  btn.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const btn = document.getElementById('hamburger-btn');
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  btn.classList.remove('open');
  document.body.style.overflow = '';
}

// Close sidebar on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeSidebar();
});

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  navigate('dashboard');
  // Keyboard shortcut: press Escape to close modals
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => {
        m.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  });
});
