let display = document.querySelector('.display');
let buttons = document.querySelectorAll('button.number, button.operator');
let reset = document.querySelector('.reset');

buttons.forEach(item => {
    item.addEventListener("click", () => {
        let num = item.innerHTML;
        display.value = "";
        // if(!isNaN(num)){                    
            display.value += num;
        //}
        
    });    
});


reset.addEventListener('click', () => {
    display.value = 0;
})  