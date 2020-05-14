var buttonElement = document.querySelector('#button')
var decimalDivElement = document.querySelector('#response')
var binaryInputElement = document.querySelector('#binary')

buttonElement.onclick = function checkNumber(){
  if(binaryInputElement.value === ''){
    alert('Plese, type a binary number!')
  }else{
    console.log(converterBinaryToDecimal())
    decimalDivElement.innerHTML = converterBinaryToDecimal()
    //decimalInputElement.setAttribute('value', converterBinaryToDecimal())
  }
}

function converterBinaryToDecimal () {
  let result = parseInt(binaryInputElement.value, 2)
  return result
}
