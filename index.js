
function calc() {
    let display = document.querySelector("#display")
    let buttons = document.querySelectorAll('.item')
    let clear = document.querySelector('.item17')
    let equal = document.querySelector('.btn-equal')
    let btnDelete = document.querySelector('.item4')
    let sliderRound = document.querySelector('.sliderr')

buttons.forEach(function(button){
button.addEventListener('click', function(e) {
    let value = e.target.dataset.num;
    display.textContent += value;
})
})

equal.addEventListener('click', function(e){

    if (display.textContent === '') {
        display.textContent = ''
      } else {
        let answer = eval(display.textContent)
        display.textContent = answer
      }
  })

clear.addEventListener('click', function(e){

   display.textContent = ''
})

btnDelete.addEventListener('click', function(e){
display.textContent = display.textContent.slice(0,-1)

})


}
calc()

