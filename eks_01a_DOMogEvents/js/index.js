let number =  5;
let plusButton = document.querySelector("#btn-count-decrease");
let minusButton = document.querySelector("#btn-count-increase");
let textCountElement = document.querySelector("#text-count")

function updateNumber() {
    textCountElement.textContent = number;
}

updateNumber();

plusButton.addEventListener("click", () =>{
    if(number < 10){
        number++
        updateNumber();
    }
});

minusButton.addEventListener("click", () =>{
    if(number > 0){
        number--
        updateNumber();
    }
});