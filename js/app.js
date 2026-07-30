const kpiData = [
  { icon: '👥', label: 'Persentase Publikasi/Laporan Statistik Kependudukan Dan Ketenagakerjaan Yang Berkualitas', value: '92,5%', trend: 'up', pct: 92.5, cat: 'green' },
  { icon: '🏠', label: 'Persentase Publikasi/Laporan Statistik Kesejahteraan Rakyat Yang Berkualitas', value: '90,8%', trend: 'up', pct: 90.8, cat: 'green' },
  { icon: '🤝', label: 'Persentase Publikasi/Laporan Statistik Ketahanan Sosial Yang Berkualitas', value: '88,3%', trend: 'up', pct: 88.3, cat: 'green' },
  { icon: '🌿', label: 'Persentase Publikasi/Laporan Statistik Sumber Daya Hayati yang Berkualitas', value: '87,6%', trend: 'up', pct: 87.6, cat: 'green' },
  { icon: '⛏️', label: 'Persentase Publikasi/Laporan Statistik Sumber Daya Mineral dan Konstruksi yang Berkualitas', value: '86,1%', trend: 'up', pct: 86.1, cat: 'orange' },
  { icon: '🏭', label: 'Persentase Publikasi/Laporan Statistik Industri Yang Berkualitas', value: '91,4%', trend: 'up', pct: 91.4, cat: 'green' },
  { icon: '📦', label: 'Persentase Publikasi/Laporan Statistik Distribusi Yang Berkualitas', value: '89,7%', trend: 'up', pct: 89.7, cat: 'green' },
  { icon: '💰', label: 'Persentase Publikasi/Laporan Statistik Harga Yang Berkualitas', value: '93,2%', trend: 'up', pct: 93.2, cat: 'green' },
  { icon: '🛎️', label: 'Persentase Publikasi/Laporan Statistik Jasa yang Berkualitas', value: '85,9%', trend: 'down', pct: 85.9, cat: 'orange' },
  { icon: '📊', label: 'Persentase Publikasi/Laporan Neraca Produksi Yang Berkualitas', value: '84,5%', trend: 'up', pct: 84.5, cat: 'orange' },
  { icon: '💳', label: 'Persentase Publikasi/Laporan Neraca Pengeluaran Yang Berkualitas', value: '83,8%', trend: 'up', pct: 83.8, cat: 'orange' },
  { icon: '🔬', label: 'Persentase Publikasi/Laporan Analisis Statistik dan Neraca Satelit yang Berkualitas', value: '82,1%', trend: 'up', pct: 82.1, cat: 'orange' },
  { icon: '🎯', label: 'Indeks Keberhasilan Penyediaan Indikator Sasaran Visi Indonesia Emas dan 45 Indikator Utama Pembangunan', value: '80,5', trend: 'up', pct: 80.5, cat: 'orange' },
  { icon: '🏘️', label: 'Persentase Kumulatif Desa Yang Berpredikat Desa Cinta Statistik', value: '76,3%', trend: 'up', pct: 76.3, cat: 'orange' },
  { icon: '📋', label: 'Tingkat Penyelenggaraan Pembinaan Statistik Sektoral sesuai standar', value: '88,7%', trend: 'up', pct: 88.7, cat: 'green' },
  { icon: '📢', label: 'Persentase Kegiatan Edukasi dan Promosi Statistik yang terselenggara dengan baik', value: '94,6%', trend: 'up', pct: 94.6, cat: 'green' },
  { icon: '😊', label: 'Indeks Pelayanan Publik - Penilaian Mandiri', value: '85,2', trend: 'up', pct: 85.2, cat: 'orange' },
  { icon: '🏆', label: 'Nilai SAKIP oleh Inspektorat', value: '82,5', trend: 'up', pct: 82.5, cat: 'orange' },
  { icon: '⭐', label: 'Indeks Implementasi Berakhlak', value: '84,7', trend: 'up', pct: 84.7, cat: 'orange' },
  { icon: '🛡️', label: 'Tingkat Keberhasilan Pembangunan Zona Integritas', value: '86,3', trend: 'up', pct: 86.3, cat: 'green' },
];

function renderKPIs(filter = '') {
  const grid = document.getElementById('kpiGrid');
  const q = filter.toLowerCase().trim();
  const filtered = q ? kpiData.filter(k => k.label.toLowerCase().includes(q)) : kpiData;
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="kpi-empty">Tidak ditemukan indikator untuk "${filter}"</div>`;
    return;
  }
  grid.innerHTML = filtered.map((k, i) => {
    const trendLabels = { up: '▲ Naik', down: '▼ Turun', stable: '→ Tetap' };
    return `
      <div class="kpi-card" style="animation-delay:${i * 30}ms">
        <div class="kpi-card-header">
          <div class="kpi-icon ${k.cat}">${k.icon}</div>
          <span class="kpi-trend ${k.trend}">${trendLabels[k.trend]}</span>
        </div>
        <div class="kpi-value">${k.value}</div>
        <div class="kpi-label">${k.label}</div>
        <div class="kpi-bar">
          <div class="kpi-bar-fill ${k.cat}" style="width:${k.pct}%"></div>
        </div>
      </div>
    `;
  }).join('');
}

const searchIndex = [
  ...kpiData.map(k => ({ page: 'dashboard', title: k.label, subtitle: k.value, icon: k.icon })),
  { page: 'dukungan', title: 'SAKIP', subtitle: 'Sistem Akuntabilitas Kinerja Instansi Pemerintah', icon: '📊' },
  { page: 'dukungan', title: 'Pembangunan Zona Integritas', subtitle: 'Wilayah Bebas dari Korupsi dan Wilayah Birokrasi Bersih Melayani', icon: '🛡️' },
  { page: 'dukungan', title: 'Indeks Implementasi Ber-AKHLAK', subtitle: 'Pengukuran penerapan nilai-nilai budaya kerja Ber-AKHLAK', icon: '💎' },
  { page: 'dukungan', title: 'Layanan BMN', subtitle: 'Pengelolaan Barang Milik Negara', icon: '📦' },
  { page: 'dukungan', title: 'Layanan Humas dan Informasi', subtitle: 'Pelayanan informasi publik dan kehumasan', icon: '📢' },
  { page: 'dukungan', title: 'Layanan Umum', subtitle: 'Administrasi umum dan dukungan operasional perkantoran', icon: '🏢' },
  { page: 'dukungan', title: 'Layanan Perkantoran', subtitle: 'Sarana prasarana dan tata kelola lingkungan kerja', icon: '🖥️' },
  { page: 'dukungan', title: 'Manajemen SDM', subtitle: 'Perencanaan, pengembangan, mutasi, promosi, kesejahteraan pegawai', icon: '👥' },
  { page: 'dukungan', title: 'Pemantauan dan Evaluasi', subtitle: 'Pemantauan capaian kinerja secara berkala', icon: '📈' },
  { page: 'dukungan', title: 'Manajemen Keuangan', subtitle: 'Pengelolaan keuangan yang transparan dan akuntabel', icon: '💰' },
  { page: 'dukungan', title: 'Reformasi Kinerja', subtitle: 'Inisiatif reformasi birokrasi', icon: '🔄' },
  { page: 'pelayanan', title: 'Keandalan', subtitle: 'Aspek PEKPPP — Kemampuan layanan yang akurat dan konsisten', icon: '✓' },
  { page: 'pelayanan', title: 'Ketanggapan', subtitle: 'Aspek PEKPPP — Kecepatan respons petugas', icon: '⚡' },
  { page: 'pelayanan', title: 'Jaminan', subtitle: 'Aspek PEKPPP — Kompetensi dan kepercayaan', icon: '🛡️' },
  { page: 'pelayanan', title: 'Empati', subtitle: 'Aspek PEKPPP — Perhatian individual kepada pengguna', icon: '❤️' },
  { page: 'pelayanan', title: 'Bukti Fisik', subtitle: 'Aspek PEKPPP — Fasilitas dan sarana prasarana', icon: '🏛️' },
  { page: 'pelayanan', title: 'Aksesibilitas', subtitle: 'Aspek PEKPPP — Kemudahan akses layanan', icon: '🔓' },
  { page: 'pelayanan', title: 'Perpustakaan', subtitle: 'Layanan baca dan peminjaman publikasi statistik', icon: '📚' },
  { page: 'pelayanan', title: 'Konsultasi', subtitle: 'Layanan konsultasi data dan metodologi statistik', icon: '💬' },
  { page: 'pelayanan', title: 'Produk Berbayar', subtitle: 'Layanan data dan publikasi statistik khusus', icon: '💳' },
  { page: 'pelayanan', title: 'Rekomendasi', subtitle: 'Layanan penerbitan rekomendasi statistik', icon: '📋' },
];

const pageLabels = {
  dashboard: 'Dashboard',
  dukungan: 'Dukungan Manajemen',
  pelayanan: 'Pelayanan Statistik Terpadu',
};

function renderSearchResults(query) {
  const results = document.getElementById('searchResults');
  const q = query.toLowerCase().trim();
  if (!q) { results.classList.remove('open'); results.innerHTML = ''; return; }

  const matches = searchIndex.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.subtitle.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    results.innerHTML = '<div class="search-result-empty">Tidak ditemukan hasil untuk "' + query + '"</div>';
    results.classList.add('open');
    return;
  }

  results.innerHTML = matches.slice(0, 15).map(m => `
    <div class="search-result-item" data-page="${m.page}">
      <div class="result-title">${m.icon} ${highlight(m.title, q)}</div>
      <div class="result-subtitle">${highlight(m.subtitle, q)} — ${pageLabels[m.page]}</div>
    </div>
  `).join('');
  results.classList.add('open');
}

function highlight(text, query) {
  if (!query) return text;
  const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
  return text.replace(re, '<mark style="background:#fed7aa;color:#c2410c;font-weight:600;border-radius:2px">$1</mark>');
}

function setupSearch() {
  const input = document.getElementById('searchInput');
  const clear = document.getElementById('searchClear');
  const bar = document.getElementById('headerSearch');
  const results = document.getElementById('searchResults');

  if (!input) return;

  input.addEventListener('input', () => {
    renderSearchResults(input.value);
    bar?.classList.toggle('has-text', input.value.length > 0);
    if (document.getElementById('page-dashboard')?.classList.contains('active')) {
      renderKPIs(input.value);
    }
  });

  clear?.addEventListener('click', () => {
    input.value = '';
    renderSearchResults('');
    bar?.classList.remove('has-text');
    if (document.getElementById('page-dashboard')?.classList.contains('active')) {
      renderKPIs('');
    }
    input.focus();
  });

  results?.addEventListener('click', e => {
    const item = e.target.closest('.search-result-item');
    if (!item) return;
    const page = item.dataset.page;
    input.value = '';
    renderSearchResults('');
    bar?.classList.remove('has-text');
    navigate(page);
    if (page === 'dashboard') renderKPIs('');
  });

  document.addEventListener('click', e => {
    if (!bar?.contains(e.target)) {
      results?.classList.remove('open');
    }
  });
}

let charts = {};

function initCharts() {
  const orange = '#f97316';
  const green = '#22c55e';
  const orangeLight = 'rgba(249,115,22,.2)';
  const greenLight = 'rgba(34,197,94,.2)';

  // Bar chart
  const ctxBar = document.getElementById('chartBar').getContext('2d');
  charts.bar = new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ['TW I', 'TW II', 'TW III', 'TW IV'],
      datasets: [
        {
          label: 'Target',
          data: [85, 87, 90, 92],
          backgroundColor: orangeLight,
          borderColor: orange,
          borderWidth: 2,
          borderRadius: 4,
        },
        {
          label: 'Realisasi',
          data: [82, 89, 91, 94],
          backgroundColor: greenLight,
          borderColor: green,
          borderWidth: 2,
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'top', labels: { boxWidth: 12, padding: 16 } } },
      scales: {
        y: { beginAtZero: true, max: 100, grid: { color: '#f3f4f6' } },
        x: { grid: { display: false } },
      },
    },
  });

  // Line chart
  const ctxLine = document.getElementById('chartLine').getContext('2d');
  charts.line = new Chart(ctxLine, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
      datasets: [
        {
          label: 'Pagu (Rp Miliar)',
          data: [120, 120, 120, 120, 120, 120],
          borderColor: orange,
          backgroundColor: 'transparent',
          borderDash: [6, 4],
          borderWidth: 2,
          pointRadius: 0,
          fill: false,
        },
        {
          label: 'Realisasi (Rp Miliar)',
          data: [45, 58, 72, 85, 96, 112],
          borderColor: green,
          backgroundColor: greenLight,
          borderWidth: 3,
          pointRadius: 4,
          pointBackgroundColor: green,
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'top', labels: { boxWidth: 12, padding: 16 } } },
      scales: {
        y: { beginAtZero: true, grid: { color: '#f3f4f6' } },
        x: { grid: { display: false } },
      },
    },
  });

  // Pie chart
  const ctxPie = document.getElementById('chartPie').getContext('2d');
  charts.pie = new Chart(ctxPie, {
    type: 'pie',
    data: {
      labels: ['SAKIP', 'RB', 'Keuangan', 'SDM', 'BMN', 'Lainnya'],
      datasets: [{
        data: [25, 20, 18, 15, 12, 10],
        backgroundColor: ['#f97316', '#fb923c', '#22c55e', '#4ade80', '#bbf7d0', '#fed7aa'],
        borderWidth: 2,
        borderColor: '#fff',
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 12, padding: 12 } },
      },
    },
  });

  // Doughnut chart
  const ctxDoughnut = document.getElementById('chartDoughnut').getContext('2d');
  charts.doughnut = new Chart(ctxDoughnut, {
    type: 'doughnut',
    data: {
      labels: ['Dukungan Manajemen', 'Internal', 'SDM', 'Manajemen Kinerja'],
      datasets: [{
        data: [88, 84, 92, 86],
        backgroundColor: ['#f97316', '#22c55e', '#fb923c', '#4ade80'],
        borderWidth: 2,
        borderColor: '#fff',
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 12, padding: 12 } },
      },
    },
  });
}

function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  const link = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (link) link.classList.add('active');
  document.getElementById('nav').classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
  renderKPIs();
  setupSearch();
  initCharts();

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigate(link.dataset.page);
    });
  });

  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('open');
  });
});
