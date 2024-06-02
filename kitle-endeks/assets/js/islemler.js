let btn = document.querySelector('#endex');
let boy = document.querySelector('#boy');
let kilo = document.querySelector('#kg');
let toplamaSonuc = document.querySelector('#toplamaSonuc');

function hesaplaEndeks() {
  let boyDeger = Number(boy.value); 
  let kiloDeger = Number(kilo.value);
  
  let boyToplam = boyDeger * boyDeger;
  let endeksHesaplama = kiloDeger / boyToplam;

  if (endeksHesaplama >= 40) {
    toplamaSonuc.innerText = endeksHesaplama.toFixed(2) + ' : İdeal kilonun çok üstünde (morbid obez)';
  } else if (endeksHesaplama > 30) {
    toplamaSonuc.innerText = endeksHesaplama.toFixed(2) + ' : İdeal kilonun çok üstünde (obez)';
  } else if (endeksHesaplama > 25) {
    toplamaSonuc.innerText = endeksHesaplama.toFixed(2) + ' : İdeal kilonun üstünde';
  } else if (endeksHesaplama > 18.5) {
    toplamaSonuc.innerText = endeksHesaplama.toFixed(2) + ' : İdeal kiloda';
  } else {
    toplamaSonuc.innerText = endeksHesaplama.toFixed(2) + ' : İdeal kilonun altında';
  }
}

btn.addEventListener('click', hesaplaEndeks);
