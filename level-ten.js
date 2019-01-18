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

taco1.addEventListener('mouseover', (e) => {
    taco3.classList.add('active')
})

taco2.addEventListener('mouseover', (e) => {
    taco1.classList.add('active')
})

taco3.addEventListener('mouseover', (e) => {
    taco2.classList.add('active')
})

tacobutton.addEventListener('click', e => {
    counter = 0
    results.classList.remove('hidden');
    tacos.forEach(taco => {
        if (taco.classList.contains('active') && !(taco.classList.contains('hidden'))) {
            counter++
        }

        results.innerHTML = `You have ${counter} tacos selected`
    })

    tacos.forEach(taco => {
        if (counter == 3) {
            taco.classList.add('hide')
            results.innerHTML = "You Win! 🤬"
            newButton.classList.remove('hidden')
        }
        else if (counter == 0) {
            results.innerHTML = "Game Over"
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
