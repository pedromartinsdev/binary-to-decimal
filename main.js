var buttonElement = document.querySelector('#button')
var decimalDivElement = document.querySelector('#response')
var binaryInputElement = document.querySelector('#binary')

function checkNumbers (numbers) {
  for(let i = 0; i < numbers.length; i++){
    if( numbers[i] != 1 && numbers[i] != 0){
      console.log("ops!")
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
      decimalDivElement.innerHTML = converterBinaryToDecimal()
    } else {
      alert('Please, type a binary number!')
    }
  }
}

function converterBinaryToDecimal () {
  let number = parseInt(binaryInputElement.value, 2)
  return number
}
