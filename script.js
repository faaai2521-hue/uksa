// === Tema (light/dark) ===
function setTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// === Toggle Menu ===
function toggleMenu(menuId = 'navMenu') {
  const el = document.getElementById(menuId);
  if (el) el.classList.toggle('show');
}

// === Highlight halaman aktif ===
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  links.forEach(link => {
    link.classList.toggle('active', link.dataset.page === currentPage);
  });
}

// === Inisialisasi ===
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(savedTheme);

  // Tombol tema (opsional)
  ['themeToggle', 'themeToggle2', 'themeToggle3', 'themeToggle4', 'themeToggle5'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', toggleTheme);
  });

  // Tombol menu
  const menuButtons = [
    { btn: 'menuToggle', menu: 'navMenu' },
    { btn: 'menuToggle2', menu: 'navMenu2' },
    { btn: 'menuToggle3', menu: 'navMenu3' },
    { btn: 'menuToggle4', menu: 'navMenu4' },
    { btn: 'menuToggle5', menu: 'navMenu5' },
  ];

  menuButtons.forEach(({ btn, menu }) => {
    const button = document.getElementById(btn);
    if (button) button.addEventListener('click', () => toggleMenu(menu));
  });

  highlightActiveLink();

  // Tutup menu jika klik di luar
  document.addEventListener('click', e => {
    document.querySelectorAll('.nav-links.show').forEach(m => {
      if (!m.contains(e.target) && !e.target.closest('.menu-toggle')) {
        m.classList.remove('show');
      }
    });
  });
});
