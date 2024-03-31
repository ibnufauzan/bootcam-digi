// let loginuser = prompt("masukan username");
// let loginpass = prompt("masukan password");

// let login = loginuser == "admin" && loginpass == "admin";

// if (login) {
//     window.location.href = "admin.html";
// } else {
//     Window.location.href = "homepage.html";
// }

// function login() {
//     console.log("fungsi login dipanggil")
//     let username = document.forms["login"]["username"].value;
//     let password = document.forms["login"]["password"].value;

//     if (username == "admin" && password == "admin") {
//         window.location.href = "admin.html";
//     } else {
//         window.location.href = "homepage.html";
//     }

//     return false
// }

// function login() {
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;

//     if (username === "admin" && password === "admin") {
//         window.location.href = "admin.html";
//     } else {
//         window.location.href = "homepage.html";
//     }
//     return false;
// }

// console.log("why");

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan pengiriman form secara default

    // Mendapatkan nilai dari input username dan password
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let admin = username === 'admin' && password === 'admin';


    // Memeriksa jika username adalah 'admin' dan password sesuai
    if (username == "" || password == "") {
        // Redirect ke halaman admin jika login berhasil
        alert("harap masukkan username dan password");

    } else if (admin) {
        // Redirect ke halaman homepage jika login gagal
        window.location.href = 'admin.html';
       
    } else {
        window.location.href = 'homepage.html';
    }
    
});

