console.log("hello web");

// Menyimpan data kondisi
const Calculator = {
  displayNumber: '0',
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false
};

// Update display
function UpdateDisplayNumbers(){
  document.querySelector("#displayNumber").innerText = Calculator.displayNumber;
};

// Clear Calculator
function ClearCalculator() {
  Calculator.displayNumber = '0',
  Calculator.operator = null,
  Calculator.firstNumber = null,
  Calculator.waitingForSecondNumber = false
};

// Update Angka
function inputDigit(digit) {
  if(Calculator.displayNumber === '0') {
    Calculator.displayNumber = digit;
  } else {
    Calculator.displayNumber += digit;
  }
};

// Melakukan Aksi Apakah displayNumber atau firstNumber negatif dan dapat melakukan inverse
function inverseNumber(){
  if(Calculator.displayNumber === '0'){
    return;
  }
  Calculator.displayNumber = Calculator.displayNumber * -1;
};

// Melakukan Fungsi Operasi + atau - dan Menjumlahkan atau Mengurangi
function performCalculation() {
  if(Calculator.firstNumber == null || Calculator.operator == null){
    alert("Silahkan pilih operator terlebih dahulu")
    return;
  }

  let result;
  if(Calculator.operator === "+"){
    result = parseInt(Calculator.firstNumber) + parseInt(Calculator.displayNumber);
  } else {
    result = parseInt(Calculator.firstNumber) - parseInt(Calculator.displayNumber);
  }

  Calculator.displayNumber = result;
};

function handleOperator(operator) {
  if(!Calculator.waitingForSecondNumber){
    Calculator.operator = operator;
    Calculator.waitingForSecondNumber = true;
    Calculator.firstNumber = Calculator.displayNumber;

    Calculator.displayNumber = '0'
  } else {
    alert('Operator sudah ditetapkan')
  }
};

// Operator Button
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener('click', function(event) {
    const target = event.target;

    if(target.classList.contains('clear')) {
      ClearCalculator();
      UpdateDisplayNumbers();
      return;
    }
    if(target.classList.contains('negative')) {
      inverseNumber();
      UpdateDisplayNumbers();
      return;
  }
    if(target.classList.contains('equals')) {
      performCalculation();
      UpdateDisplayNumbers();
      return;
    }
    if(target.classList.contains('operator')) {
      handleOperator(target.innerText);
      return;
    }
    inputDigit(target.innerText);
    UpdateDisplayNumbers();
  });
};