<!DOCTYPE html>
<html lang="pt-br">
  <head>
  <title>Calculadora</title>
    <meta charset="utf-8">
	<style>
.calculator__keys { 
  display: grid; 
  /* o resto do CSS necessário */ 
}
</style>
</head>
<body>
<div class=”calculator”>
  <div class=”calculator__display”>0</div>
  <div class=”calculator__keys”> … </div>
</div>
<div class="calculator__keys">
  <button class="key--operator" data-action="add">+</button>
  <button class="key--operator" data-action="subtract">-</button
  <button class="key--operator" data-action="multiply">&times;</button>
  <button class="key--operator" data-action="divide">÷</button
  <button>7</button>
  <button>8</button>
  <button>9</button>
  <button>4</button>
  <button>5</button>
  <button>6</button>
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>0</button>
  <button data-action="decimal">.</button>
  <button data-action="clear">AC</button>
  <button class="key--equal" data-action="calculate">=</button>
</div>
</body>

<script>
const calculator = document.querySelector(‘.calculator’)
const keys = calculator.querySelector(‘.calculator__keys’)

keys.addEventListener(‘click’, e => {
 if (e.target.matches(‘button’)) {
   // Fazer algo
 }
})
const key = e.target
const action = key.dataset.action
if (!action) {
  console.log('number key!')
}
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  console.log('operator key!')
}
if (action === 'decimal') {
  console.log('decimal key!')
}

if (action === 'clear') {
  console.log('clear key!')
}

if (action === 'calculate') {
  console.log('equal key!')
}
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // ...
  }
})
if (!action) {
  if (displayedNum === '0') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}
if (action === 'decimal') {
  display.textContent = displayedNum + '.'
}
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  key.classList.add('is-depressed')
}
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    // ...
    
    // Remove a classe .is-depressed de todas as teclas
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
  }
})
const calculator = document.querySelector('.calculator')
// ...

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    // ...
    
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed')
      // Adiciona um atributo personalizado
      calculator.dataset.previousKeyType = 'operator'
    }
  }
})
const previousKeyType = calculator.dataset.previousKeyType

if (!action) {
  if (displayedNum === '0' || previousKeyType === 'operator') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}
if (action === 'calculate') {
  const secondValue = displayedNum
  // ...
}
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  // ...
  calculator.dataset.firstValue = displayedNum
  calculator.dataset.operator = action
}
if (action === 'calculate') {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
  
  display.textContent = calculate(firstValue, operator, secondValue)
}
const calculate = (n1, operator, n2) => {
  // Realizar um cálculo e retornar o valor calculado
}
const calculate = (n1, operator, n2) => {
  let result = ''
  
  if (operator === 'add') {
    result = n1 + n2
  } else if (operator === 'subtract') {
    result = n1 - n2
  } else if (operator === 'multiply') {
    result = n1 * n2
  } else if (operator === 'divide') {
    result = n1 / n2
  }
  
  return result
}
const calculate = (n1, operator, n2) => {
  let result = ''
  
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  
  return result
}
// Exemplo do funcionamento de includes.
const string = 'The hamburgers taste pretty good!'
const hasExclamation = string.includes('!')
console.log(hasExclamation) // true
// Não fazer nada se a string já tiver um ponto
if (!displayedNum.includes('.')) {
  display.textContent = displayedNum + '.'
}
if (!action) {
  // ...
  calculator.dataset.previousKey = 'number'
}

if (action === 'decimal') {
  // ...
  calculator.dataset.previousKey = 'decimal'
}

if (action === 'clear') {
  // ...
  calculator.dataset.previousKeyType = 'clear'
}

if (action === 'calculate') {
 // ...
  calculator.dataset.previousKeyType = 'calculate'
}
if (action === 'decimal') {
  if (!displayedNum.includes('.')) {
    display.textContent = displayedNum + '.'
  } else if (previousKeyType === 'operator') {
    display.textContent = '0.'
  }
  
calculator.dataset.previousKeyType = 'decimal'
}
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
  
// Obs: basta verificar firstValue e o operador, pois o secondValue existe sempre
  if (firstValue && operator) {
    display.textContent = calculate(firstValue, operator, secondValue)
  }
  
key.classList.add('is-depressed')
  calculator.dataset.previousKeyType = 'operator'
  calculator.dataset.firstValue = displayedNum
  calculator.dataset.operator = action
  if (
  firstValue &&
  operator &&
  previousKeyType !== 'operator'
) {
  display.textContent = calculate(firstValue, operator, secondValue)
}
const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum

if (
  firstValue &&
  operator &&
  previousKeyType !== 'operator'
) {
  const calcValue = calculate(firstValue, operator, secondValue)
  display.textContent = calcValue
  
// Atualizar o valor calculado como firstValue
  calculator.dataset.firstValue = calcValue
} else {
  // Se não houver cálculo, definir displayedNum como o firstValue
  calculator.dataset.firstValue = displayedNum
}

key.classList.add('is-depressed')
calculator.dataset.previousKeyType = 'operator'
calculator.dataset.operator = action
if (action === 'calculate') {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
  
if (firstValue) {
    display.textContent = calculate(firstValue, operator, secondValue)
  }
  
calculator.dataset.previousKeyType = 'calculate'
}
if (action === 'calculate') {
  let firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
  
if (firstValue) {
    if (previousKeyType === 'calculate') {
      firstValue = displayedNum
    }
    
display.textContent = calculate(firstValue, operator, secondValue)
  }
  
calculator.dataset.previousKeyType = 'calculate'
}
if (action === 'calculate') {
  let firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
  
if (firstValue) {
    if (previousKeyType === 'calculate') {
      firstValue = displayedNum
    }
    
display.textContent = calculate(firstValue, operator, secondValue)
  }
  
// Definir o atributo modValue
  calculator.dataset.modValue = secondValue
  calculator.dataset.previousKeyType = 'calculate'
}
if (firstValue) {
  if (previousKeyType === 'calculate') {
    firstValue = displayedNum
    secondValue = calculator.dataset.modValue
  }
  
display.textContent = calculate(firstValue, operator, secondValue)
}
if (!action) {
  if (
    displayedNum === '0' ||
    previousKeyType === 'operator' ||
    previousKeyType === 'calculate'
  ) {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
  calculator.dataset.previousKeyType = 'number'
}

if (action === 'decimal') {
  if (!displayedNum.includes('.')) {
    display.textContent = displayedNum + '.'
  } else if (
    previousKeyType === 'operator' ||
    previousKeyType === 'calculate'
  ) {
    display.textContent = '0.'
  }
  
calculator.dataset.previousKeyType = 'decimal'
}
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  // ...
  
if (
    firstValue &&
    operator &&
    previousKeyType !== 'operator' &&
    previousKeyType !== 'calculate'
  ) {
    const calcValue = calculate(firstValue, operator, secondValue)
    display.textContent = calcValue
    calculator.dataset.firstValue = calcValue
  } else {
    calculator.dataset.firstValue = displayedNum
  }
  
// ...
}
if (action !== 'clear') {
  const clearButton = calculator.querySelector('[data-action=clear]')
  clearButton.textContent = 'CE'
}
if (action === 'clear') {
  display.textContent = 0
  key.textContent = 'AC'
  calculator.dataset.previousKeyType = 'clear'
}
if (action === 'clear') {
  if (key.textContent === 'AC') {
    calculator.dataset.firstValue = ''
    calculator.dataset.modValue = ''
    calculator.dataset.operator = ''
    calculator.dataset.previousKeyType = ''
  } else {
    key.textContent = 'AC'
  }
  
display.textContent = 0
  calculator.dataset.previousKeyType = 'clear'
}
const calculate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  
  return result
}
const calculate = (n1, operator, n2) => {
  if (operator === 'add') {
    return firstNum + parseFloat(n2)
  } else if (operator === 'subtract') {
    return parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    return parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    return parseFloat(n1) / parseFloat(n2)
  }
}
const calculate = (n1, operator, n2) => {
  if (operator === 'add') {
    return firstNum + parseFloat(n2)
  }
  
  if (operator === 'subtract') {
    return parseFloat(n1) - parseFloat(n2)
  }
  
  if (operator === 'multiply') {
    return parseFloat(n1) * parseFloat(n2)
  }
  
  if (operator === 'divide') {
    return parseFloat(n1) / parseFloat(n2)
  }
}
const calculate = (n1, operator, n2) => {
  if (operator === 'add') return parseFloat(n1) + parseFloat(n2)
  if (operator === 'subtract') return parseFloat(n1) - parseFloat(n2)
  if (operator === 'multiply') return parseFloat(n1) * parseFloat(n2)
  if (operator === 'divide') return parseFloat(n1) / parseFloat(n2)
}
const calculate = (n1, operator, n2) => {
  const firstNum = parseFloat(n1)
  const secondNum = parseFloat(n2)
  if (operator === 'add') return firstNum + secondNum
  if (operator === 'subtract') return firstNum - secondNum
  if (operator === 'multiply') return firstNum * secondNum
  if (operator === 'divide') return firstNum / secondNum
}
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
  
    if (!action) { /* ... */ }
    
    if (action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide') {
      /* ... */
    }
    
    if (action === 'clear') { /* ... */ }
    if (action !== 'clear') { /* ... */ }
    if (action === 'calculate') { /* ... */ }
  }
})
keys.addEventListener('click', e => {
  // Função pura
  const resultString = createResultString(/* ... */)
  
  // Cálculo "impuro"
  display.textContent = resultString
  updateCalculatorState(/* ... */)
})
// substitua o que temos acima por isso
return 'some value'
if (!action) {
  if (
    displayedNum === '0' ||
    previousKeyType === 'operator' ||
    previousKeyType === 'calculate'
  ) {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
  calculator.dataset.previousKeyType = 'number'
}
const createResultString = () => {
  if (!action) {
    if (
      displayedNum === '0' ||
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
    ) {
      return keyContent
    } else {
      return displayedNum + keyContent
    }
  }
}
const createResultString = () => {
  if (action!) {
    return displayedNum === '0' ||
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
      ? keyContent
      : displayedNum + keyContent
  }
}
const createResultString = () => {
  // As variáveis necessárias são:
  // 1. keyContent
  // 2. displayedNum
  // 3. previousKeyType
  // 4. action
  
  if (action!) {
    return displayedNum === '0' ||
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
      ? keyContent
      : displayedNum + keyContent
  }
}
if (action === 'decimal') {
  if (!displayedNum.includes('.')) {
    display.textContent = displayedNum + '.'
  } else if (
    previousKeyType === 'operator' ||
    previousKeyType === 'calculate'
  ) {
    display.textContent = '0.'
  }
  
  calculator.dataset.previousKeyType = 'decimal'
}
const createResultString = () => {
  // ...
  
  if (action === 'decimal') {
    if (!displayedNum.includes('.')) {
      return = displayedNum + '.'
    } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
      return = '0.'
    }
  }
}
const createResultString = () => {
  // ...
  
  if (action === 'decimal') {
    if (!displayedNum.includes('.')) return displayedNum + '.'
    if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.'
  }
}
const createResultString = () => {
  // ...
  
  if (action === 'decimal') {
    if (!displayedNum.includes('.')) return displayedNum + '.'
    if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.'
    return displayedNum
  }
}
const createResultString = () => {
  // As variáveis necessárias são:
  // 1. keyContent
  // 2. displayedNum
  // 3. previousKeyType
  // 4. action
}
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
  
  if (
    firstValue &&
    operator &&
    previousKeyType !== 'operator' &&
    previousKeyType !== 'calculate'
  ) {
    const calcValue = calculate(firstValue, operator, secondValue)
    display.textContent = calcValue
    calculator.dataset.firstValue = calcValue
  } else {
    calculator.dataset.firstValue = displayedNum
  }
  
  key.classList.add('is-depressed')
  calculator.dataset.previousKeyType = 'operator'
  calculator.dataset.operator = action
}
const createResultString = () => {
  // ...
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
    
    if (
      firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
    ) {
      return calculate(firstValue, operator, secondValue)
    }
  }
}
const createResultString = () => {
  // ...
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
    
    if (
      firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
    ) {
      return calculate(firstValue, operator, secondValue)
    } else {
      return displayedNum
    }
  }
}
const createResultString = () => {
  // ...
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
    
    return firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
      ? calculate(firstValue, operator, secondValue)
      : displayedNum
  }
}
const createResultString = () => {
  // ...
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    
    return firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
      ? calculate(firstValue, operator, displayedNum)
      : displayedNum
  }
}
const createResultString = () => {
  // As variáveis e propriedades necessárias são:
  // 1. keyContent
  // 2. displayedNum
  // 3. previousKeyType
  // 4. action
  // 5. calculator.dataset.firstValue
  // 6. calculator.dataset.operator
}
if (action === 'clear') {
  if (key.textContent === 'AC') {
    calculator.dataset.firstValue = ''
    calculator.dataset.modValue = ''
    calculator.dataset.operator = ''
    calculator.dataset.previousKeyType = ''
  } else {
    key.textContent = 'AC'
  }
  
  display.textContent = 0
  calculator.dataset.previousKeyType = 'clear'
}
const createResultString = () => {
  // ...
  if (action === 'clear') return 0
}
if (action === 'calculate') {
  let firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  let secondValue = displayedNum
  
  if (firstValue) {
    if (previousKeyType === 'calculate') {
      firstValue = displayedNum
      secondValue = calculator.dataset.modValue
    }
    
    display.textContent = calculate(firstValue, operator, secondValue)
  }
  
  calculator.dataset.modValue = secondValue
  calculator.dataset.previousKeyType = 'calculate'
}
if (action === 'calculate') {
  let firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  let secondValue = displayedNum
  
  if (firstValue) {
    if (previousKeyType === 'calculate') {
      firstValue = displayedNum
      secondValue = calculator.dataset.modValue
    }
    display.textContent = calculate(firstValue, operator, secondValue)
  }
}
const createResultString = () => {
  // ...
  
  if (action === 'calculate') {
    let firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    let secondValue = displayedNum
    
    if (firstValue) {
      if (previousKeyType === 'calculate') {
        firstValue = displayedNum
        secondValue = calculator.dataset.modValue
      }
      return calculate(firstValue, operator, secondValue)
    } else {
      return displayedNum
    }
  }
}
const createResultString = () => {
  // ...
  
  if (action === 'calculate') {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const modValue = calculator.dataset.modValue
    
    if (firstValue) {
      return previousKeyType === 'calculate'
        ? calculate(displayedNum, operator, modValue)
        : calculate(firstValue, operator, displayedNum)
    } else {
      return displayedNum
    }
  }
}
const createResultString = () => {
  // ...
  
  if (action === 'calculate') {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const modValue = calculator.dataset.modValue
    
    return firstValue
      ? previousKeyType === 'calculate'
        ? calculate(displayedNum, operator, modValue)
        : calculate(firstValue, operator, displayedNum)
      : displayedNum
  }
}
const createResultString = () => {
  // As variáveis e propriedades necessárias são:
  // 1. keyContent
  // 2. displayedNum
  // 3. previousKeyType
  // 4. action
  // 5. calculator.dataset.firstValue
  // 6. calculator.dataset.operator
  // 7. calculator.dataset.modValue
}
const createResultString = (key, displayedNum, state) => {
  const keyContent = key.textContent
  const action = key.dataset.action
  const firstValue = state.firstValue
  const modValue = state.modValue
  const operator = state.operator
  const previousKeyType = state.previousKeyType
  // ... Refatore conforme seja necessário
}

// Usando createResultString
keys.addEventListener('click', e => {
  if (e.target.matches('button')) return
  const displayedNum = display.textContent
  const resultString = createResultString(e.target, displayedNum, calculator.dataset)
  
  // ...
})
const createResultString = (key, displayedNum, state) => {
  const keyContent = key.textContent
  const { action } = key.dataset
  const {
    firstValue,
    modValue,
    operator,
    previousKeyType
  } = state
  
  // ...
}
// Se a tecla for numérica
if (!action) { /* ... */ }

// Se a tecla for decimal
if (action === 'decimal') { /* ... */ }

// Se a tecla for um operador
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) { /* ... */}

// Se a tecla for a de limpar
if (action === 'clear') { /* ... */ }

// Se a tecla for um calcular
if (action === 'calculate') { /* ... */ }
if (keyType === 'number') { /* ... */ }
if (keyType === 'decimal') { /* ... */ }
if (keyType === 'operator') { /* ... */}
if (keyType === 'clear') { /* ... */ }
if (keyType === 'calculate') { /* ... */ }
const createResultString = (key, displayedNum, state) => {
  const keyType = getKeyType(key)
  
  if (keyType === 'number') { /* ... */ }
  if (keyType === 'decimal') { /* ... */ }
  if (keyType === 'operator') { /* ... */}
  if (keyType === 'clear') { /* ... */ }
  if (keyType === 'calculate') { /* ... */ }
}
const updateCalculatorState = (key) => {
  const keyType = getKeyType(key)
  
  if (keyType === 'number') { /* ... */ }
  if (keyType === 'decimal') { /* ... */ }
  if (keyType === 'operator') { /* ... */}
  if (keyType === 'clear') { /* ... */ }
  if (keyType === 'calculate') { /* ... */ }
}
const updateCalculatorState = (key, calculator) => {
  const keyType = getKeyType(key)
  
  if (!action) {
    // ...
    calculator.dataset.previousKeyType = 'number'
  }
  
  if (action === 'decimal') {
    // ...
    calculator.dataset.previousKeyType = 'decimal'
  }
  
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    // ...
    calculator.dataset.previousKeyType = 'operator'
  }
  
  if (action === 'clear') {
    // ...
    calculator.dataset.previousKeyType = 'clear'
  }
  
  if (action === 'calculate') {
    calculator.dataset.previousKeyType = 'calculate'
  }
}
const updateCalculatorState = (key, calculator) => {
  const keyType = getKeyType(key)
  calculator.dataset.previousKeyType = keyType
    
  if (keyType === 'number') { /* ... */ }
  if (keyType === 'decimal') { /* ... */ }
  if (keyType === 'operator') { /* ... */}
  if (keyType === 'clear') { /* ... */ }
  if (keyType === 'calculate') { /* ... */ }
}
const updateCalculatorState = (key, calculator) => {
  const keyType = getKeyType(key)
  calculator.dataset.previousKeyType = keyType
  
  Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
}
if (keyType === 'operator') {
  if (firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
  ) {
    calculator.dataset.firstValue = calculatedValue
  } else {
    calculator.dataset.firstValue = displayedNum
  }
  
  key.classList.add('is-depressed')
  calculator.dataset.operator = key.dataset.action
}
if (keyType === 'operator') {
  key.classList.add('is-depressed')
  calculator.dataset.operator = key.dataset.action
  calculator.dataset.firstValue = firstValue &&
    operator &&
    previousKeyType !== 'operator' &&
    previousKeyType !== 'calculate'
    ? calculatedValue
    : displayedNum
}
const updateCalculatorState = (key, calculator) => {
  // Variáveis e propriedades necessárias
  // 1. key
  // 2. calculator
  // 3. calculatedValue
  // 4. displayedNum
}
if (action === 'clear') {
  if (key.textContent === 'AC') {
    calculator.dataset.firstValue = ''
    calculator.dataset.modValue = ''
    calculator.dataset.operator = ''
    calculator.dataset.previousKeyType = ''
  } else {
    key.textContent = 'AC'
  }
}

if (action !== 'clear') {
  const clearButton = calculator.querySelector('[data-action=clear]')
  clearButton.textContent = 'CE'
}
if (action === 'calculate') {
  let firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  let secondValue = displayedNum
  
  if (firstValue) {
    if (previousKeyType === 'calculate') {
      firstValue = displayedNum
      secondValue = calculator.dataset.modValue
    }
    
    display.textContent = calculate(firstValue, operator, secondValue)
  }
  
  calculator.dataset.modValue = secondValue
  calculator.dataset.previousKeyType = 'calculate'
}
if (action === 'calculate') {
  let secondValue = displayedNum
  
  if (firstValue) {
    if (previousKeyType === 'calculate') {
      secondValue = calculator.dataset.modValue
    }
  }
  
  calculator.dataset.modValue = secondValue
}
if (keyType === 'calculate') {
  calculator.dataset.modValue = firstValue && previousKeyType === 'calculate'
    ? modValue
    : displayedNum
}
const updateCalculatorState = (key, calculator) => {
  // Variáveis e propriedades necessárias
  // 1. key
  // 2. calculator
  // 3. calculatedValue
  // 4. displayedNum
  // 5. modValue
}
const updateCalculatorState = (key, calculator, calculatedValue, displayedNum) => {
  // ...
}

keys.addEventListener('click', e => {
  if (e.target.matches('button')) return
  
  const key = e.target
  const displayedNum = display.textContent
  const resultString = createResultString(key, displayedNum, calculator.dataset)
  
  display.textContent = resultString
  
  // Passe os valores necessários
  updateCalculatorState(key, calculator, resultString, displayedNum)
})
const updateVisualState = (key, calculator) => {
  const keyType = getKeyType(key)
  Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
  
  if (keyType === 'operator') key.classList.add('is-depressed')
  
  if (keyType === 'clear' && key.textContent !== 'AC') {
    key.textContent = 'AC'
  }
  
  if (keyType !== 'clear') {
    const clearButton = calculator.querySelector('[data-action=clear]')
    clearButton.textContent = 'CE'
  }
}
keys.addEventListener('click', e => {
  if (e.target.matches('button')) return
  const key = e.target
  const displayedNum = display.textContent
  
  // Funções puras
  const resultString = createResultString(key, displayedNum, calculator.dataset)
  
  // Estados (states) atualizados
  display.textContent = resultString
  updateCalculatorState(key, calculator, resultString, displayedNum)
  updateVisualState(key, calculator)
})

</script>
</html>
