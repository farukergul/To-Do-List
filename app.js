const input = document.getElementById("input");
const button = document.querySelector("#button");
const list = document.getElementsByClassName("list")[0];

// ADD butonuna özellik atadım

button.addEventListener("click", addToList);
function addToList() {
  if (input.value != "") {
    let element = document.createElement("div");
    element.classList.add("altDiv");
    element.innerHTML = `<input type="checkbox" />
    <p>${input.value}</p> <button class=removeButton> REMOVE </button> `;

    list.appendChild(element);
    input.value = "";
  } else {
    alert("Enter a to do!");
  }
}

// Remove butonuna özellik verme

list.addEventListener("click", (e) => {
  if (e.target.innerText == "REMOVE") {
    e.target.parentElement.remove();
  }
});

// Entera basıldığında add yapma

input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    addToList();
  }
});
