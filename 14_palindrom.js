// Untuk mencoba, silakan copy/paste salah satu dari tiga versi ini
// di Developer Console, 
// seperti ditunjukkan di video Pintar Programming
// https://www.youtube.com/watch?v=uGoc9YWZNvo

// Versi 1: Dasar
function isPalindrome(kata) {
   var length = kata.length;
   for (var i = 0; i< length; i++) {
      var dariDepan = kata[i];
      var dariBelakang = kata[length - i - 1];
      if (dariDepan != dariBelakang) {
        return false;
      }       
   }
   return true;
}

// Versi 2: Tahan terhadap kapitalisasi
function isPalindrome(kata) {
   kata = kata.toLowerCase();
   var length = kata.length;
   for (var i = 0; i< length / 2; i++) {
      var dariDepan = kata[i];
      var dariBelakang = kata[length - i - 1];
      if (dariDepan != dariBelakang) {
        return false;
      }       
   }
   return true;
}

// Versi 3: Singkat, tanpa implementasi (bonus)
function isPalindrome(kata) {
  kata = kata.toLowerCase();
  var dibalik = kata.split('').reverse().join('');
  return kata == dibalik;
}


