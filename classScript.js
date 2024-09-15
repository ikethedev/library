const myLibrary = [];
const bookContainer = document.querySelector("#books");

// rendering side
class BookView {
  constructor() {
    this.bookNameEl = document.getElementById("book");
    this.authorEl = document.getElementById("author");
    this.pagesEl = document.getElementById("pages");
    this.readEl = document.getElementById("read");
    this.removeBook = this.removeBook.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleReadStatus = this.toggleReadStatus.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  // takes the data from the form and runs the addBookToLibrary function
  // This function is called when the submit button is clicked
  bookFormData(e) {
    e.preventDefault();
    const bookName = this.bookNameEl.value;
    const author = this.authorEl.value;
    const pages = this.pagesEl.value;
    const read = this.readEl.checked;
    const id = customID();
    return { bookName, author, pages, read, id };
  }

  // fucntion uses the createElement function to create the book card
  // the book card is then appended to the book container
  createBookCard(book) {
    const article = createElement("article", null, "book__item");
    article.setAttribute("data-id", book.id);
    const authorName = createElement("h3", book.author);
    const bookName = createElement("h2", book.bookName);
    const pages = createElement("p", `Length: ${book.pages}`);
    const read = createElement("p", `In progress`);
    const removeButton = createElement("button", "Remove", "remove");
    const completed = createElement("button", "Completed", "completed");

    // Add event listener to the "Completed" button
    completed.addEventListener("click", () => {
      this.toggleReadStatus();
      console.log(`Read status: ${this.read}`); // Debugging line
      read.textContent = this.read ? "Has read" : "In progress";
    });

    article.appendChild(bookName);
    article.appendChild(authorName);
    article.appendChild(pages);
    article.appendChild(read);
    article.appendChild(removeButton);
    article.appendChild(completed);
    return article;
  }

  renderBooks() {
    const bookContainer = document.querySelector("#books");
    myLibrary.forEach((bookData) => {
      bookContainer.appendChild(book.createBookCard(bookData));
    });
  }

  toggleReadStatus() {
    this.read = !this.read;
  }

  removeBook(e) {
    const bookElement = e.target.closest(".book__item");
    const bookId = bookElement.dataset.id;
    // const book = myLibrary.find((bookToRemove) => bookToRemove.id === bookId);
    const book = myLibrary.filter((bookToRemove) => bookToRemove.id === bookId);
    if (book) {
      //this removes the data from the array
      myLibrary.splice(book, 1);
      // this removes the data from the DOM
      bookElement.remove();
    }
  }

  resetForm() {
    this.authorEl.value = "";
    this.bookNameEl.value = "";
    this.pagesEl.value = "";
    this.readEl.checked = false;
  }

  displayBook(book) {
    const bookCard = book.createBookCard();
    document.querySelector("#books").appendChild(bookCard);
  }

  handleClick(e) {
    console.log("click");
    const bookElement = e.target.closest(".book__item");
    console.log(bookElement);
    if (!bookElement) return;
    const bookId = bookElement.dataset.id;
    console.log(bookId);
    const book = myLibrary.find((bookToRemove) => bookToRemove.id === bookId);
    console.log(book);
    if (book && e.target.classList.contains("remove")) {
      this.removeBook(e);
    }
  }
}

const book = new BookView();

// form data
class BookData {
  constructor(id, bookName, author, pages, read) {
    this.id = id;
    this.bookName = bookName;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  // This function is use the create a new instance of the book constructor
  // Pushes the new book to the my Library Array
  // Runs the displayBook function to display the new book
  addBookToLibrary = function (id, bookName, author, pages, read) {
    const book = new BookData(id, bookName, author, pages, read);
    myLibrary.push(book);
  };
}

const data = new BookData();
console.log(data);
console.log(book);

// This function is used as the template to create new elements
function createElement(element, textContent, className) {
  const elementCreated = document.createElement(element);
  if (textContent) elementCreated.textContent = textContent;
  if (className) elementCreated.classList.add(className);
  return elementCreated;
}

function customID() {
  return Math.random().toString(36).substr(2, 9);
}

bookContainer.addEventListener("click", function (e) {
  book.handleClick(e);

});

document.querySelector("#add").addEventListener("click", (e) => {
  const { bookName, author, pages, read, id } = book.bookFormData(e);
  data.addBookToLibrary(bookName, author, pages, read, id);
  book.renderBooks()
  book.resetForm()
});
