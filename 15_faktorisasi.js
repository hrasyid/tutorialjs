// Untuk mencoba, silakan tulis kode berikut ini 
// di Developer Console, 
// seperti ditunjukkan di video Pintar Programming

function faktorisasi (angka) {
  var faktor = [];
  while (angka != 1) {
    for (var i = 2; i <= angka; i++) {
       if (angka % i == 0) {
          faktor.push(i);
          angka = angka / i;
          break;
       }
    }
  }
  return faktor;
}

function formatFaktorisasi(angka) {  
  var faktor = faktorisasi(angka);
  return angka + ' = ' + faktor.join(' x '); 
}

// Kode di bawah ini untuk mengecek hasil:
faktorisasi(30);
formatFaktorisasi(30);
formatFaktorisasi(120);
formatFaktorisasi(2452000);
formatFaktorisasi(1123131411411312);
