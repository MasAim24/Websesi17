const menuIcon = document.querySelector('.menu-icon');
const menuPanel = document.querySelector('.menu-panel');

menuIcon.addEventListener('click', () => {
    menuPanel.style.left = '0';
    menuPanel.style.display = 'block'; // Tampilkan panel ketika ikon diklik
});

menuPanel.addEventListener('click', () => {
    menuPanel.style.left = '-300px'; // Kembalikan ke posisi semula
    menuPanel.style.display = 'none'; // Sembunyikan panel kembali setelah diklik
});
