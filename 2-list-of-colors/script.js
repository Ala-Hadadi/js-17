function listOfColours(colours) {
  // Write your code here...

  const div = document.getElementById("content");
  const selectEl = document.createElement("select");
  const pEl = document.createElement("p");
  pEl.textContent = "You have selected: ";

  colours.forEach((colour) => {
    const option = document.createElement("option");
    option.value = colour;  
    option.textContent = colour;  
    selectEl.appendChild(option); 
  });

  selectEl.addEventListener("change", () => {
    const selectedColour = selectEl.value; 
    pEl.textContent = `You have selected: ${selectedColour}`; 
    pEl.style.color = selectedColour; 
  });

  div.appendChild(selectEl);
  div.appendChild(pEl);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
