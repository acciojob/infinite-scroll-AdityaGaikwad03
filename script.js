//your code here!
const infiList = document.getElementById("infi-list");

// Function to add new list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${infiList.children.length + 1}`;
    infiList.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Detect scroll event
infiList.addEventListener("scroll", () => {
  // Check if user reached (or nearly reached) the bottom
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight - 10) {
    addItems(2); // Add 2 new items when bottom is reached
  }
});

