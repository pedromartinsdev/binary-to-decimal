var buttonElement = document.querySelector('button')
var resultElement = document.querySelector('.result')
var binaryInputElement = document.querySelector('input')

function checkNumbers (numbers) {
  for(let i = 0; i < numbers.length; i++){
    if( numbers[i] != 1 && numbers[i] != 0){
      return false
    }
  }
  return true
}

buttonElement.onclick = function validation(){
  if(binaryInputElement.value === ''){
    alert('Please, type a binary number!')
  }else{
    let valide = checkNumbers(binaryInputElement.value.toString())
    if( valide === true){
      resultElement.innerHTML = converterBinaryToDecimal()
    } else {
      alert('Please, type a binary number!')
    }
  }
}

function converterBinaryToDecimal () {
  let number = parseInt(binaryInputElement.value, 2)
  return number
}
