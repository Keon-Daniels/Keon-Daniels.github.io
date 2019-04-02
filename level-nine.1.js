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
let taco5 = document.querySelector('#taco5')
let taco6 = document.querySelector('#taco6')
let taco7 = document.querySelector('#taco7')
let taco8 = document.querySelector('#taco8')
let taco9 = document.querySelector('#taco9')
let taco10 = document.querySelector('#taco10')

taco1.addEventListener('click', (e) => {
    taco5.classList.add('hidden')
    taco2.classList.add('active')
    taco10.classList.remove('hidden')
})

taco2.addEventListener('click', (e) => {
    taco5.classList.add('active')
    taco1.classList.remove('hidden')
    taco2.classList.remove('hidden')
})

taco3.addEventListener('click', (e) => {
    taco1.classList.add('active')
    taco4.classList.add('active')
    taco3.classList.add('hidden')
})

taco4.addEventListener('click', (e) => {
    taco3.classList.add('active')
    taco6.classList.remove('hidden')
    taco9.classList.remove('hidden')
})

taco5.addEventListener('click', (e) => {
    taco3.classList.remove('hidden')
    taco8.classList.remove('hidden')
    taco7.classList.add('active')
})

taco6.addEventListener('click', (e) => {
    taco8.classList.add('active')
    taco6.classList.add('hidden')
    taco9.classList.add('active')
})

taco7.addEventListener('click', (e) => {
    taco6.classList.add('active')
    taco6.classList.remove('hidden')
    taco7.classList.remove('hidden')
})

taco8.addEventListener('click', (e) => {
    taco5.classList.remove('hidden')
    taco4.classList.remove('hidden')
    taco10.classList.add('active')
})

taco9.addEventListener('click', (e) => {
    taco1.classList.add('hidden')
    taco2.classList.add('hidden')
    taco4.classList.add('hidden')
    taco5.classList.add('hidden')
    taco8.classList.add('hidden')
    taco7.classList.add('hidden')
    taco9.classList.add('hidden')
})

taco10.addEventListener('click', (e) => {
    taco10.classList.add('hidden')
    taco5.classList.add('active')
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
        if(counter == 10){
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
