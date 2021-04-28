const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

////////////////// SEE THE ASCII CODE TABLE FOR REFERENCE //////////////////

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e){
       
    const value= e.target.value;
    characterAmountNumber.value= value
    characterAmountRang.value= value
}


form.addEventListener('submit', e =>{
    e.preventDefault()
    // By doing so the page would not refresh on pressing the submit button which was the default action
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }

  function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
    // this will return the array as string
  }
