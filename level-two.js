console.log('juicey pears')
let tacos = document.querySelectorAll('.taco')
console.log(tacos)
let tacobutton = document.querySelector('.button')
console.log('pears')
let counter = 0
let results = document.querySelector('#result')
let newButton = document.querySelector('#nextLVL')
let taco1 = document.querySelector('#taco1')
let taco2 = document.querySelector('#taco2')
let taco3 = document.querySelector('#taco3')
tacos.forEach(taco => {
    // console.log(taco.id)
    taco.addEventListener('click', e => {
        taco.classList.toggle('active')
    })
})
taco1.addEventListener('click', (e) => {
    taco3.classList.toggle('hidden')
})
taco2.addEventListener('click', (e) => {
    taco3.classList.toggle('hidden')
})
tacobutton.addEventListener('click', e=> {
    counter=0
    results.classList.remove('hidden');
    tacos.forEach(taco =>{
        if (taco.classList.contains('active')){
            counter ++ 
        }
       
        results.innerHTML=`You have ${counter} tacos highlighted.`
    })
    
    tacos.forEach(taco =>{
        if(counter == 3){
            taco.classList.add('hide')
            results.innerHTML = "¡You win!"
            newButton.classList.remove('hidden')
            
        }
        else{
            taco.classList.remove('hide')
            newButton.classList.add('hidden')
        }
    })
    // console.log('buttonclicked')
    // counter += 1
    // console.log(`You have pressed the button ${counter} times`)
    // results.innerHTML=`You have pressed the button ${counter} times`
})
