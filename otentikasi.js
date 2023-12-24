function validateLogin() {
    // Mendapatkan nilai input dari form
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    // Memeriksa apakah username dan password sesuai dengan yang ditentukan
    if (usernameInput === "ade" && passwordInput === "12345") {
        // Jika login sukses, arahkan ke halaman baru dan tampilkan pesan
        alert("Login Sukses");
        window.location.href = "halaman_baru.html";
    } else {
        // Jika login gagal, tampilkan pesan
        alert("Login Gagal");
    }
}
