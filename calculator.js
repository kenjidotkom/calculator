let display = document.getElementById('display');
let currentInput = '';
let resultDisplayed = false;

function input(value) {
  if (resultDisplayed) {
    currentInput = '';
    resultDisplayed = false;
  }

  if (value === '.' && currentInput.endsWith('.')) return;

  currentInput += value;
  updateDisplay();
}

function updateDisplay() {
  hasilDisplay.textContent = currentInput || '0';
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function toggleSign() {
  if (!currentInput) return;
  if (currentInput.startsWith('-')) {
    currentInput = currentInput.slice(1);
  } else {
    currentInput = '-' + currentInput;
  }
  updateDisplay();
}

function hasil() {
  try {
    let result = eval(currentInput.replace('%', '/100'));
    currentInput = result.toString();
    updateDisplay();
    resultDisplayed = true;
  } catch (e) {
    display.textContent = 'Error';
    currentInput = '';
  }
}