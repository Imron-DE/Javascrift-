// to uppercase
// Metode ini mengubah semua karakter dalam string menjadi huruf besar.
let text = "hello";
console.log(text.toUpperCase()); // Output: "HELLO"

// to lowercase
// Metode ini mengubah semua karakter dalam string menjadi huruf kecil.
let text1 = "HELLO";
console.log(text1.toLowerCase()); // Output: "hello"

// charAt(index)
// Metode ini mengembalikan karakter pada posisi indeks tertentu.
let text3 = "JavaScript";
console.log(text3.charAt(4)); // Output: "S"

// indexOf(searchValue)
// Metode ini mengembalikan indeks pertama dari kemunculan string yang dicari. Jika tidak ditemukan, mengembalikan -1.
let text4 = "JavaScript";
console.log(text4.indexOf("Script")); // Output: 4
console.log(text4.indexOf("pt")); // Output: 0
console.log(text4.indexOf("Python")); // Output: -1

//  slice(start, end)
// Metode ini mengembalikan bagian dari string yang dimulai pada indeks start dan berakhir pada indeks end (tidak termasuk indeks end).
let text5 = "JavaScript";
console.log(text5.slice(0, 3)); // Output: "Jav"
console.log(text5.slice(4, 7)); // Output: "Script"

// substring(start, end)
// Metode ini hampir sama dengan slice, tetapi tidak menerima nilai negatif dan hanya menerima dua argumen.
let text6 = "JavaScript";
console.log(text6.substring(0, 4)); // Output: "Jav"
console.log(text6.substring(4, 7)); // Output: "Script"

// replace(searchValue, newValue)
// Metode ini menggantikan bagian dari string yang ditemukan dengan nilai baru. Hanya menggantikan kemunculan pertama yang ditemukan. Untuk mengganti semua kemunculan, kita bisa menggunakan regular expression dengan global flag (/g).
let text7 = "JavaScript is fun ";
console.log(text7.replace("fun", "awesome")); // Output: "JavaScript is awesome"

// // split(separator)
// Metode ini membagi string menjadi array berdasarkan separator yang ditentukan.
let text8 = "JavaScript, Java, Golang";
let words = text8.split(", ");
console.log(words); // Output: ["JavaScript", "Java", "Golang"]

// //  trim()
// Metode ini menghapus spasi di awal dan akhir string.
let text9 = "   JavaScript   ";
console.log(text9.trim()); // Output: "JavaScript"

//  startsWith(searchValue)
// Metode ini mengembalikan true jika string dimulai dengan searchValue, dan false jika tidak.
let text10 = "JavaScript";
console.log(text10.startsWith("Java")); // Output: true
console.log(text10.startsWith("Scrift")); // Output: false

// endsWith(searchValue)
// Metode ini mengembalikan true jika string berakhir dengan searchValue, dan false jika tidak.
let text11 = "JavaScript";
console.log(text11.endsWith("pt")); // Output: true
console.log(text11.endsWith("Java")); // Output: false

// includes(searchValue)
// Metode ini mengembalikan true jika string mengandung searchValue, dan false jika tidak.
let text12 = "JavaScript";
console.log(text12.includes("Script")); // Output: true
console.log(text12.includes("go")); // Output: false

// repeat(count)
// Metode ini mengulang string sebanyak count yang ditentukan.
let text13 = "JavaScript";
console.log(text13.repeat(3)); // Output: "JavaScriptJavaScriptJavaScript"
