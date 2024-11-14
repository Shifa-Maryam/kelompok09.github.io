// Menambahkan event listener untuk tombol "Kembali"
document.getElementById('backBtn').addEventListener('click', function() {
    // Fungsi ini akan membawa pengguna kembali ke halaman sebelumnya dalam browser
    window.history.back(); // Navigasi kembali ke halaman sebelumnya
    
    // Jika Anda ingin mengarahkan ke halaman tertentu, Anda bisa menggunakan:
    // window.location.href = 'halamansebelumnya.html';
  });