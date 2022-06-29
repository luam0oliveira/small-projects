const numbers = document.querySelectorAll('button')
const visor = document.getElementById('visor')
let num1;
let num2;
let result;
let op;
const keys = {
  "1"(){addNumber(1)} ,
  "2"(){addNumber(2)},
  "3"(){addNumber(3)},
  "4"(){addNumber(4)},
  "5"(){addNumber(5)},
  "6"(){addNumber(6)},
  "7"(){addNumber(7)},
  "8"(){addNumber(8)},
  "9"(){addNumber(9)},
  "0"(){addNumber(0)},
  "-"(){takeNumber(); minus()},
  "/"(){takeNumber(); dividedBy()},
  "Enter"(){takeNumber(); setResult(op)},
  "+"(){takeNumber(); add()},
  "*"(){takeNumber(); times()},
  "."(){addDot()},
  ","(){addDot()},
  "Backspace"(){deleteLast()},
  "Delete"(){cleanVisor()}
}

document.addEventListener('keydown', event => {
  if(keys.hasOwnProperty(event.key)){
    if(result){
      result=null
      cleanVisor()
    }
    keys[event.key]()
  }
})

numbers.forEach(value => {
  value.addEventListener('click', event => {
    if(result){
      result=null
      cleanVisor()
    }
    keys[event.target.dataset.button]()
  })
})

const cleanVisor = () => {
  visor.value = ''
}

const addNumber = (number) => {
  visor.value += number
}

const addDot = () => {
  if(visor.value.search(/\./)==-1){
    visor.value += '.'
  }
}

const deleteLast = () => {
  visor.value =  visor.value.slice(0, -1) ;
}

const minus = () => {
  op = '-'
}

const add = () => {
  op = '+'
}

const times = () =>{
  op = '*'
}

const dividedBy = () => {
  op = '/'
}

const setResult = (op) => {
  switch(op) {
    case '-':
      result = (num1 - num2)
      break;
    case '+':
      result = (num1 + num2)
      break;
    case '*':
      result = (num1 * num2)
      break;
    case '/':
      result = (num1 / num2)
      break;
  }
  visor.value = result; 
  cleanVariables()
}

const takeNumber = () => {
  if(num1==null){
    num1 = Number(visor.value)
    cleanVisor()
  }else if(num2==null){
    num2 = Number(visor.value)
  }
}

const cleanVariables = () => {
  op=null
  num1 = null
  num2 = null
}