// Obtenemos una variable declarada en :root
//var color = getComputedStyle(document.documentElement).getPropertyValue('--Red-key-background-toggle-');


const rb1 = document.getElementById('cb1')
rb1.addEventListener('click', ()=>{
    document.documentElement.style.setProperty('--Very-dark-desaturated-blue-main-background', 'hsl(222, 26%, 31%)');
    document.documentElement.style.setProperty('--Very-dark-desaturated-blue-toggle-background-keypad-background', 'hsl(223, 31%, 20%)');
    document.documentElement.style.setProperty('--Very-dark-desaturated-blue-screen-background-', 'hsl(224, 36%, 15%)');
    document.documentElement.style.setProperty('--Desaturated-dark-blue-key-background', 'hsl(225, 21%, 49%)');
    document.documentElement.style.setProperty('--Desaturated-dark-blue-key-shadow', 'hsl(224, 28%, 35%)');
    document.documentElement.style.setProperty('--Red-key-background-toggle-', 'hsl(6, 63%, 50%)');
    document.documentElement.style.setProperty('--Dark-red-key-shadow', 'hsl(6, 70%, 34%)');
    document.documentElement.style.setProperty('--Light-grayish-orange-key-background-', 'hsl(30, 25%, 89%)');
    document.documentElement.style.setProperty('--Grayish-orange-key-shadow-', 'hsl(28, 16%, 65%)');
    document.documentElement.style.setProperty('--Very-dark-grayish-blue', 'hsl(221, 14%, 31%)');
    document.documentElement.style.setProperty('--White-text', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--hover-del-reset', '#A2B3E1');
    document.documentElement.style.setProperty('--hover-equal', '#F96C5B');
    document.documentElement.style.setProperty('--hover-number', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--hover-equal-simbol', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--fondo', '#3B4664');
})


const rb2 = document.getElementById('cb2')
rb2.addEventListener('click', ()=>{
    document.documentElement.style.setProperty('--Very-dark-desaturated-blue-main-background', 'hsl(0, 0%, 90%)');
    document.documentElement.style.setProperty('--Very-dark-desaturated-blue-toggle-background-keypad-background', 'hsl(0, 5%, 81%)');
    document.documentElement.style.setProperty('--Very-dark-desaturated-blue-screen-background-', 'hsl(0, 0%, 93%)');
    document.documentElement.style.setProperty('--Desaturated-dark-blue-key-background', 'hsl(185, 42%, 37%)');
    document.documentElement.style.setProperty('--Desaturated-dark-blue-key-shadow', 'hsl(185, 58%, 25%)');
    document.documentElement.style.setProperty('--Red-key-background-toggle-', 'hsl(25, 98%, 40%)');
    document.documentElement.style.setProperty('--Dark-red-key-shadow', 'hsl(25, 99%, 27%)');
    document.documentElement.style.setProperty('--Light-grayish-orange-key-background-', 'hsl(45, 7%, 89%)');
    document.documentElement.style.setProperty('--Grayish-orange-key-shadow-', 'hsl(35, 11%, 61%)');
    document.documentElement.style.setProperty('--Very-dark-grayish-blue', 'hsl(60, 10%, 19%)');
    document.documentElement.style.setProperty('--White-text', 'hsl(60, 10%, 19%)');
    document.documentElement.style.setProperty('--hover-del-reset', '#62B5BD');
    document.documentElement.style.setProperty('--hover-equal', '#FF8B38');
    document.documentElement.style.setProperty('--hover-number', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--hover-equal-simbol', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--fondo', '#E6E6E6');
})

const rb3 = document.getElementById('cb3')
rb3.addEventListener('click', ()=>{

    document.documentElement.style.setProperty('--Very-dark-desaturated-blue-main-background', 'hsl(268, 75%, 9%)');
    document.documentElement.style.setProperty('--Very-dark-desaturated-blue-toggle-background-keypad-background', 'hsl(268, 71%, 12%)');
    document.documentElement.style.setProperty('--Very-dark-desaturated-blue-screen-background-', 'hsl(268, 71%, 12%)');
    document.documentElement.style.setProperty('--Desaturated-dark-blue-key-background', 'hsl(281, 89%, 26%)');
    document.documentElement.style.setProperty('--Desaturated-dark-blue-key-shadow', 'hsl(285, 91%, 52%)');
    document.documentElement.style.setProperty('--Red-key-background-toggle-', 'hsl(176, 100%, 44%)');
    document.documentElement.style.setProperty('--Dark-red-key-shadow', 'hsl(177, 92%, 70%)');
    document.documentElement.style.setProperty('--Light-grayish-orange-key-background-', 'hsl(268, 47%, 21%)');
    document.documentElement.style.setProperty('--Grayish-orange-key-shadow-', 'hsl(290, 70%, 36%)');
    document.documentElement.style.setProperty('--Very-dark-grayish-blue', 'hsl(52, 100%, 62%)');
    document.documentElement.style.setProperty('--White-text', 'hsl(52, 100%, 62%)');
    document.documentElement.style.setProperty('--hover-del-reset', '#8631B0');
    document.documentElement.style.setProperty('--hover-equal', '#94FFF9');
    document.documentElement.style.setProperty('--hover-number', '#6B34AC');
    document.documentElement.style.setProperty('--hover-equal-simbol', 'black');
    document.documentElement.style.setProperty('--fondo', '#17062A');

})

let result = document.querySelector(".result")
let numbers = document.querySelectorAll(".number")

let del = document.querySelector(".del")
let reset = document.querySelector(".reset")
let equal = document.querySelector(".equal")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let divide = document.querySelector(".divide")
let mul = document.querySelector(".mul")
let dot = document.querySelector(".dot")
let sumaDot = 0


numbers.forEach((number)=>{
    number.addEventListener('click', ()=>{
        result.textContent == '0' ? result.innerHTML = number.textContent : result.innerHTML += number.textContent
    })
})

del.addEventListener('click', ()=>{
    result.textContent.length == 1 ? result.textContent = 0 : result.textContent = result.textContent.slice(0,-1)

})

reset.addEventListener('click', ()=>{
    result.textContent = 0
    sumaDot = 0
})

equal.addEventListener('click', ()=>{

    result.textContent = parseFloat(eval(result.textContent).toFixed(5))
    console.log(result.textContent)

    if(result.textContent.includes('.')){
        sumaDot = 1
    }

    console.log(sumaDot)
    
})

plus.addEventListener('click', ()=>{
    if(result.textContent.endsWith('+')){
        result.textContent += ''
    }else if(result.textContent.endsWith('-')){
        result.textContent = result.textContent.replace('-','+')
    }else if(result.textContent.endsWith('/')){
        result.textContent = result.textContent.replace('/','+')
    }else if(result.textContent.endsWith('*')){
        result.textContent = result.textContent.replace('*','+')
    }else{
        result.textContent = parseFloat(eval(result.textContent).toFixed(5))
        result.textContent += '+'
    }
    sumaDot = 0
})

minus.addEventListener('click', ()=>{
    if (result.textContent.endsWith('-') ) {
        result.textContent += ''
    }else if(result.textContent.endsWith('+')){
        result.textContent = result.textContent.replace('+','-')
    }else if(result.textContent.endsWith('/')){
        result.textContent = result.textContent.replace('/','-')
    }else if(result.textContent.endsWith('*')){
        result.textContent = result.textContent.replace('*','-')
    } else{
        result.textContent = parseFloat(eval(result.textContent).toFixed(5))
        result.textContent += '-'
    }
    sumaDot = 0
})

divide.addEventListener('click', ()=>{
    if (result.textContent.endsWith('/')) {
        result.textContent += ''
    }else if(result.textContent.endsWith('-')){
        result.textContent = result.textContent.replace('-','/')
    }else if(result.textContent.endsWith('+')){
        result.textContent = result.textContent.replace('+','/')
    }else if(result.textContent.endsWith('*')){
        result.textContent = result.textContent.replace('*','/')
    } else {
        result.textContent = parseFloat(eval(result.textContent).toFixed(5))
        result.textContent += '/'
    }
    sumaDot = 0
})

mul.addEventListener('click', ()=>{
    if (result.textContent.endsWith('*')) {
        result.textContent += ''
    }else if(result.textContent.endsWith('-')){
        result.textContent = result.textContent.replace('-','*')
    }else if(result.textContent.endsWith('+')){
        result.textContent = result.textContent.replace('+','*')
    }else if(result.textContent.endsWith('/')){
        result.textContent = result.textContent.replace('/','*')
    } else {
        result.textContent = parseFloat(eval(result.textContent).toFixed(5))
        result.textContent += '*'
    }
    sumaDot = 0
})

dot.addEventListener('click', ()=>{

    if( (sumaDot == 0 && !result.textContent.endsWith('+')) 
    && (sumaDot == 0 && !result.textContent.endsWith('-'))  
    && (sumaDot == 0 && !result.textContent.endsWith('/')) 
    && (sumaDot == 0 && !result.textContent.endsWith('*'))){
        result.textContent += '.'
        sumaDot = 1
    }

})
