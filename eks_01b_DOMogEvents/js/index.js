let number =  5;
let min = 0;
let mid = 10;
let max = 15;
let plusButton = document.querySelector("#btn-count-increase");
let minusButton = document.querySelector("#btn-count-decrease");
let textCountElement = document.querySelector("#text-count")

function updateNumber() {
    textCountElement.textContent = number;
}

updateNumber();

plusButton.addEventListener("click", () =>{
    if(number < max){
        number++
        updateNumber();
    }
});

minusButton.addEventListener("click", () =>{
    if(number > min){
        number--
        updateNumber();
    }
});