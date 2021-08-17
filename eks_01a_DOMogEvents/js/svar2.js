var pTagNumber = document.getElementById("text-count").innerHTML = parseInt(5);
var pTag = document.getElementById("text-count");
function inc() {
	if(parseInt(pTag.innerHTML) < 10){
		pTag.innerHTML = parseInt(pTag.innerHTML)+ +1;
	}
}
function de() {
	if(parseInt(pTag.innerHTML) > 0){
		pTag.innerHTML = parseInt(pTag.innerHTML)+ -1;
	}
}