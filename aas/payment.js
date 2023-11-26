 // Fungsi yang akan dijalankan saat Anda menekan CTRL + P
 function readyPayment() {
    bayar(); // Panggil fungsi pembayaran saat tombol ditekan
  }

  // Mengatur shortcut keyboard Ctrl + P untuk memanggil fungsi pembayaran
  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'p') {
      event.preventDefault(); // Menghentikan fungsi default (mencetak halaman)
      readyPayment(); // Panggil fungsi pembayaran saat Ctrl + P ditekan
    }
  });
