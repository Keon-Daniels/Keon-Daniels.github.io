let tacoOne = document.querySelector('#taco1')
let tacoTwo = document.querySelector('#taco2')
let tacoThree = document.querySelector('#taco3')

let snackOne = document.querySelector('#pizza')
let snackTwo = document.querySelector('#burger')
let snackThree = document.querySelector('#chickenwing')
tacoOne.addEventListener('click', (e) => {
    console.log(tacoOne.classList)
    tacoOne.classList.toggle('active')
    snackOne.classList.toggle('special')
    console.log('You clicked the first Taco! Go to Chipotle Next to Claim your free carne asada tostada with free guac. You also get one free chimichanga.')
});
tacoTwo.addEventListener('click', (e) => {
    console.log(tacoTwo.classList)
    tacoTwo.classList.toggle('active')
    snackThree.classList.toggle('active')
    console.log('You clicked the second Taco! Go to Chipotle Next to Claim your free carne asada tostada with free guac. You also get one free chimichanga.')
})   
tacoThree.addEventListener('click', (e) => {
    console.log(tacoThree.classList)
    tacoThree.classList.toggle('active')
     snackTwo.classList.toggle('special')
    console.log('You clicked the third Taco! Go to Chipotle Next to Claim your free carne asada tostada with free guac. You also get one free chimichanga.')
})
snackOne.addEventListener('click', (e) => {
    snackOne.classList.toggle('special')
    tacoTwo.classList.toggle('active')
    tacoThree.classList.toggle('active')
    snackTwo.classList.toggle('active')
})
snackTwo.addEventListener('click', (e) => {
    snackTwo.classList.toggle('special')
    tacoThree.classList.toggle('active')
})
snackThree.addEventListener('click', (e) => {
    tacoOne.classList.toggle('active')
    snackTwo.classList.toggle('active')
})
// Hard Mode
snackOne.addEventListener('mouseover', (e) => {
    snackOne.classList.toggle('special')
    tacoTwo.classList.toggle('special')
})
tacoOne.addEventListener('mouseover', (e) => {
    tacoThree.classList.toggle('active')
    snackOne.classList.toggle('active')
})
snackTwo.addEventListener('mouseover', (e) => {
    tacoOne.classList.toggle('special')
    tacoThree.classList.toggle('active')
})
tacoTwo.addEventListener('mouseover', (e) => {
    snackTwo.classList.toggle('special')
})
snackThree.addEventListener('mouseover', (e) => {
    tacoThree.classList.toggle('active')
})
tacoThree.addEventListener('mouseover', (e) => {
    snackOne.classList.toggle('special')
    snackThree.classList.toggle('active')
})
let counter = 0
let result = document.querySelector('#result')
let tacoButton = document.querySelector('.button')
tacoButton.addEventListener('click', (e) => {
    // console.log(tacoButton)
    counter = counter + 1
    console.log(`You have pressed the button ${counter} times!`)
    result.classList.remove('hidden')
    result.innerHTML= `You have pressed the button ${counter} times!`
})