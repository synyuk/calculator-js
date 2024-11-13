let display = document.querySelector('.display');
let buttonsNumber = document.querySelectorAll('button.number');
let buttonsOperetor = document.querySelectorAll('button.operator');
let reset = document.querySelector('.reset');
let result = document.querySelector('.result');
let lastAction = null;

buttonsNumber.forEach(item => {
    item.addEventListener("click", () => {
        if(lastAction == 'result'){
            display.value = "0";
            lastAction = null;
        }
        let num = item.innerHTML;        
        if (display.value === "0") {
            display.value = num;
        } else {
            display.value += num;
        }               
    });    
});

buttonsOperetor.forEach(item => {
    item.addEventListener("click", () => {
        let num = item.value;        
        if (display.value === "0") {
            display.value = num;
        } else {
            display.value += num;
        }               
    });    
});

reset.addEventListener('click', () => {
    display.value = 0;
}) 

result.addEventListener("click", handler);    

function handler(){
    display.value = eval(display.value);
    lastAction = 'result';   
}

