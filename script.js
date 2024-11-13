let display = document.querySelector('.display');
let buttons = document.querySelectorAll('button.number, button.operator');
let reset = document.querySelector('.reset');

buttons.forEach(item => {
    item.addEventListener("click", () => {
        let num = item.innerHTML;
        if (display.value === "0") {
            display.value = num;
        } else {
            display.value += num;
        }               
    });    
});

document.addEventListener("click", () => {
   
})

reset.addEventListener('click', () => {
    display.value = 0;
})  