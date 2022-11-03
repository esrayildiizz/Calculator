const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');


let displayValue = '0';

updateDisplay();


//yazılan bir değeri tekrar görüntüle 
function updateDisplay() {
  display.value = displayValue;
}




// calculator key içinde bulunan herhangi butona tıklayınca 
keys.addEventListener('click', function(e) {
  const element = e.target;

  //tıklanan elementin buton olup olmadığını kontrol etmek için aşağıdaki komutları yazdık.
  //yani buton değilse işlem return olarak devam etsin yani bundan sonraki kodlar işletilmesin.
  if (!element.matches('button')) return;


  //tıklanan buton sayı butonu mu yoksa operatör butonu mu kontrol edelim.
  //eğer tıklanan buton operatör butonu ise.
  if (element.classList.constains('operatör')) {
    console.log('operatör', element.value);
    return;
  }
  if (element.classList.constains('decimal')) {
    //console.log('decimal', element.value);
    inputDecimal();
    updateDisplay();
    return;
  }
  if (element.classList.constains('clear')) {
    console.log('clear', element.value);
    return;
  }
  //tıklamış olduğumuz butonlar inputta gözükmesi için yazılan kodlar.
  //input a yansıyan değer sayı ise:
  inputNumber(element.value);
  updateDisplay();

});





function inputNumber(num){
  //girilen değerler yan yana yazılmasını istiyorum.
  displayValue=displayValue==='0' ? num:displayValue+num;
}





function inputDecimal() {
  //daha önceden nokta operatörüne tıklanmış mı diye kontrol edilmeli
  // aşağıdaki kod nokta operatörü içermiyorsa demek.
if(!displayValue.include('.')){
  //aşağıdaki kod,nokta içermiyorda tamamdır noktayı koyabilirsin demek .
   displayValue+='.';
}}
