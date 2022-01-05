var addEl = document.querySelector("#add");
var nameInput = document.querySelector("#name");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  var response = nameInput.value;
  submissionResponseEl.textContent = response;
}

// Add listener to add element
addEl.addEventListener("click", showResponse);