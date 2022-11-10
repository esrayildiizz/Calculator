const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');


let displayValue = '0';

//atanan ilk değer
let firstValue = null;

let operator = null;

//atanan ikinci sayi
let waitingForSecondValue = false;

updateDisplay();


//yazılan bir değeri tekrar görüntüle 
function updateDisplay() {
  display.value = displayValue;
}




// calculator key içinde bulunan herhangi butona tıklayınca 
keys.addEventListener('click', function(e) {
  const element = e.target;
  const value = element.value;

  //tıklanan elementin buton olup olmadığını kontrol etmek için aşağıdaki komutları yazdık.
  //yani buton değilse işlem return olarak devam etsin yani bundan sonraki kodlar işletilmesin.
  if (!element.matches('button')) return;

  switch (value) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
      handleOperator(value);
      break;
    case '.':
      inputDecimal();
      break;
    case 'AC':
      clear();
      break;
    default:
      inputNumber(element.value);

  }
  updateDisplay();
});



function handleOperator(nextOperator) {
  const value = parseFloat(displayValue);

  if (operator && waitingForSecondValue) {
    operator = nextOperator;
    return;
  }

  if (firstValue == null) {
    firstValue = value;
  } else if (operator) {
    const result = calculate(firstValue, value, operator);

    displayValue = `${parseFloat(result.toFixed(7))}`;
    firstValue = result;
  }
  waitingForSecondValue = true;
  operator = nextOperator;
  console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

//toplama işlemi için
function calculate(first, second, operator) {
  if (operator === '+') {
    return first + second;
  }
  else if (operator === '-') {
    return first - second;
  }
  else if (operator === '*') {
    return first * second;
  }
  else if (operator === '/') {
    return first / second;
  }

  return second;
}

//Sayılar için oluşturduğumuz fonksiyon.
function inputNumber(num) {
  if (waitingForSecondValue) {
    displayValue = num;
    waitingForSecondValue = false;
  }
  else {
    //girilen değerler yan yana yazılmasını istiyorum.
    displayValue = displayValue === '0' ? num : displayValue + num;
  }

}


//nokta için oluşturduğumuz fonksiyon.
function inputDecimal() {
  //daha önceden nokta operatörüne tıklanmış mı diye kontrol edilmeli
  // aşağıdaki kod nokta operatörü içermiyorsa demek.
  if (!displayValue.includes('.')) {
    //aşağıdaki kod,nokta içermiyorda tamamdır noktayı koyabilirsin demek .
    displayValue += '.';
  }
}

//silme için fonksiyon.
function clear() {
  displayValue = '0';
}

