const names = ["Anders", "Fedtmule", "Mickey"];
const list = document.querySelector("#liste");
names.forEach((listItem)=>{
  let li = document.createElement("li");
  li.innerText = listItem;
  list.appendChild(li);
})