// var addEl = document.querySelector("#add");
// var nameInput = document.querySelector("#name");
// var submissionResponseEl = document.querySelector("#response");
// var name = localStorage.getItem("name")

// // Action to be performed on click store in named function
// function showResponse(event) {
//   // Prevent default action
//   event.preventDefault();
//   console.log(event);
//   var response = nameInput.value;
//   submissionResponseEl.textContent = response;
//   localStorage.setItem("name");
// }

// // Add listener to add element
// addEl.addEventListener("click", showResponse);

var bookInput = document.querySelector("#book-text");
var bookForm = document.querySelector("#book-form");
var bookList = document.querySelector("#book-list");
var bookCountSpan = document.querySelector("#book-count");

var books = [];

// The following function renders items in a book list as <li> elements
function renderBooks() {
  // Clear bookList element and update bookCountSpan
  bookList.innerHTML = "";
  bookCountSpan.textContent = books.length;

  // Render a new li for each book
  for (var i = 0; i < books.length; i++) {
    var book = books[i];

    var li = document.createElement("li");
    li.textContent = book;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Remove 🗑";

    li.appendChild(button);
    bookList.appendChild(li);
  }
}

// This function is being called below and will run when the page loads.
function init() {
  // Get stored books from localStorage
  var storedBooks = JSON.parse(localStorage.getItem("books"));

  // If books were retrieved from localStorage, update the books array to it
  if (storedBooks !== null) {
    books = storedBooks;
  }

  // This is a helper function that will render books to the DOM
  renderBooks();
}

function storeBooks() {
  // Stringify and set key in localStorage to books array
  localStorage.setItem("books", JSON.stringify(books));
}

// Add submit event to form
bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var bookText = bookInput.value.trim();

  // Return from function early if submitted bookText is blank
  if (bookText === "") {
    return;
  }

  // Add new bookText to books array, clear the input
  books.push(bookText);
  bookInput.value = "";

  // Store updated books in localStorage, re-render the list
  storeBooks();
  renderBooks();
});

// Add click event to bookList element
bookList.addEventListener("click", function (event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the book element from the list
    var index = element.parentElement.getAttribute("data-index");
    books.splice(index, 1);

    // Store updated books in localStorage, re-render the list
    storeBooks();
    renderBooks();
  }
});

// Calls init to retrieve data and render it to the page on load
init()
