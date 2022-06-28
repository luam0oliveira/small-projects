const numbers = document.querySelectorAll('button')
const visor = document.getElementById('visor')
const keys = {
  "1"(){console.log(visor.value = "1")} ,
  "2"(){},
  "3"(){},
  "4"(){},
  "5"(){},
  "6"(){},
  "7"(){},
  "8"(){},
  "9"(){},
  "0"(){},
  "-"(){},
  "/"(){},
  "Enter"(){},
  "+"(){},
  "*"(){},
  "."(){},
  ","(){},
}



document.addEventListener('keydown', event => {
  if(event.key in Object.keys(keys)){
    keys[event.key]()  
  }
})

const cleanVisor = () => {
  visor.value = ''
}

