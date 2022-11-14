









       function filter(value){
        var value=document.getElementById('fltr').value;
        var sushi=document.getElementById('sushi');
        var maguro=document.getElementById('maguro');
        //var ahi=document.getElementsByClassName('ahi');
       
        if(value=='0'){
           sushi.style.display = "block"
           maguro.style.display = "block";
          
      }
       if(value=='1'){
           sushi.style.display = "block";
           maguro.style.display = "none";
         
       }
       if(value=='2'){
           sushi.style.display = "none";
           maguro.style.display = "block";
           
       }
       if(value=='3'){
           sushi.style.display = "none";
           maguro.style.display = "none";
           //ahi.style.display = "block";
       }
     
console.log(value);

}



// navbar toggler

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

console.log(menu);

menu.addEventListener('click', function() {
navbar.classList.toggle('hide')
})










// pannel toggler

let purchase = document.querySelector('.purchase');
let pannel = document.querySelector('.pannel');


purchase.addEventListener('click', function() {
pannel.classList.toggle('show-pannel')
})






// menu card

let addButtons = document.querySelectorAll('.add-button')

addButtons.forEach(function(button) {
button.addEventListener('click', function() {
let price =  button.parentElement.querySelector('p').textContent
let name = button.parentElement.parentElement.querySelector('p').textContent

let total = document.querySelector('#total')

let totalValue = Number.parseInt(total.textContent)
totalValue += Number.parseInt(price) 
total.textContent = totalValue


let pannel = document.querySelector('.pannel')


let nameElement = document.createElement('p')
let priceElement = document.createElement('p')
let div = document.createElement('div')
div.style.display = 'flex'
div.style.justifyContent = 'space-between'

nameElement.textContent = name
priceElement.textContent = price

div.append(nameElement, priceElement)
pannel.append(div)

})
})





