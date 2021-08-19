let number =  5;
let min = 0;
let max = 15;
let plusButton = document.querySelector("#btn-count-increase");
let minusButton = document.querySelector("#btn-count-decrease");
let textCountElement = document.querySelector("#text-count");

function updateNumber() {
    textCountElement.textContent = number;
}
function checkValue(event){
	if(number < max && event.target == plusButton){
		number++;
        updateNumber();
		
	} else if(number > min && event.target == minusButton){
		number--;
		updateNumber();
	}

}
updateNumber();
plusButton.addEventListener("click", () =>{
	checkValue(event);
});
minusButton.addEventListener("click", () =>{
    checkValue(event);
});