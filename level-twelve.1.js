console.log('juicy pears')
let tacos = document.querySelectorAll('.taco')
// console.log(tacos)
let tacobutton = document.querySelector('.button')
console.log('pears')
let counter = 0
let results = document.querySelector('#result')
let newButton = document.querySelector('#nextLVL')
let taco1 = document.querySelector('#taco1')
let taco2 = document.querySelector('#taco2')
let taco3 = document.querySelector('#taco3')
let taco4 = document.querySelector('#taco4')

taco1.addEventListener('mouseover', (e) => {
    taco3.classList.add('active')
    taco2.classList.add('hidden')
    taco4.classList.remove('hidden')
})

taco2.addEventListener('mouseover', (e) => {
    taco1.classList.add('active')
    taco4.classList.toggle('active')
})

taco3.addEventListener('mouseover', (e) => {
    taco2.classList.add('active')
    taco2.classList.toggle('hidden')
})

taco4.addEventListener('mouseover', (e) => {
    taco4.classList.add('hidden')
})

tacobutton.addEventListener('click', e => {
    counter = 0
    results.classList.remove('hidden');
    tacos.forEach(taco => {
        if (taco.classList.contains('active') && !(taco.classList.contains('hidden'))) {
            counter++
        }

        results.innerHTML=`Tienes ${counter} tacos resaltado.`
    })
    
    tacos.forEach(taco =>{
        if(counter == 4){
            taco.classList.add('hide')
            results.innerHTML = "¡Has ganado! 🤬"
            newButton.classList.remove('hidden')
            
        }
        else if (counter == 0) {
            results.innerHTML = "Fin del juego 🤣"
        }

        else {
            taco.classList.remove('hide')
            newButton.classList.add('hidden')
        }
    })
    // console.log('buttonclicked')
    // counter += 1
    // console.log(`You have pressed the button ${counter} times`)
    // results.innerHTML=`You have pressed the button ${counter} times`
})
