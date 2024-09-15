// const myLibrary = [];
// const bookContainer = document.querySelector("#books");
// const book = new BookView()
// const data = new BookData()

// // rendering side
// function BookView() {
//      this.bookNameEl = document.getElementById("book")
//      this.authorEl = document.getElementById("author")
//      this.pagesEl = document.getElementById("pages")
//      this.readEl = document.getElementById("read")
// };

// // form data
// function BookData(id, bookName, author, pages, read){
//     this.id = id
//     this.bookName = bookName;
//     this.author = author;
//     this.pages = pages;
//     this.read = read
// }

// // This function is use the create a new instance of the book constructor
// // Pushes the new book to the my Library Array 
// // Runs the displayBook function to display the new book
// BookData.prototype.addBookToLibrary = function(id, bookName, author, pages, read){
//     const book = new BookData(id, bookName, author, pages, read);
//     myLibrary.push(book);
// }

// // takes the data from the form and runs the addBookToLibrary function
// // This function is called when the submit button is clicked
// BookView.prototype.bookFormData = function(e){
//     e.preventDefault();
//     const bookName = this.bookNameEl.value
//     const author = this.authorEl.value
//     const pages = this.pagesEl.value
//     const read = this.readEl.checked
//     const id = customID()
//     return {bookName, author, pages, read, id}
// }

// // This function is used as the template to create new elements
// function createElement (element, textContent, className) {
//     const elementCreated = document.createElement(element);
//     if (textContent) elementCreated.textContent = textContent;
//     if (className) elementCreated.classList.add(className);
//     return elementCreated;
// }

// // fucntion uses the createElement function to create the book card
// // the book card is then appended to the book container
// BookView.prototype.createBookCard = function(book) {
//     const article = createElement('article', null, 'book__item',);
//     article.setAttribute('data-id', book.id);
//     const authorName = createElement('h3', book.author);
//     const bookName = createElement('h2', book.bookName);
//     const pages = createElement('p', `Length: ${book.pages}`);
//     const read = createElement('p', `In progress` );    
//     const removeButton = createElement('button', 'Remove', 'remove');
//     const completed = createElement('button', 'Completed', 'completed');

//      // Add event listener to the "Completed" button
//     completed.addEventListener('click', () => {
//         BookData.toggleReadStatus();
//         console.log(`Read status: ${BookData.read}`); // Debugging line
//         read.textContent = book.read ? 'Has read' : 'In progress';
//     });
    
//     article.appendChild(bookName);
//     article.appendChild(authorName);
//     article.appendChild(pages);
//     article.appendChild(read);
//     article.appendChild(removeButton);
//     article.appendChild(completed);
//     return article;
// }

// function customID() {
//     return Math.random().toString(36).substr(2, 9);
// }

// BookView.prototype.renderBooks = function () {
//     const bookContainer = document.querySelector("#books")
//     myLibrary.forEach(bookData => {
//         bookContainer.appendChild(book.createBookCard(bookData))
//     })
// }

// BookView.prototype.toggleReadStatus = function(){
//     this.read = !this.read;
// }

// BookData.prototype.removeBook = function (e) {
//     const bookId = bookElement.dataset.id;
//     const book = myLibrary.find(bookToRemove => bookToRemove.id === bookId);
//     if(book){
//         myLibrary.splice(book, 1)
//     }
// }

// BookView.prototype.resetForm = function() {
//    this.authorEl.value = ""; 
//    this.bookNameEl.value = "";
//    this.pagesEl.value = "";
//    this.readEl.checked = false
// }

// BookView.prototype.displayBook = function(book){
//        const bookCard = book.createBookCard()
//        document.querySelector("#books").appendChild(bookCard)
// }


// BookView.prototype.handleClick = function(e){
//    const bookElement = e.target.closest('.book__item');
//    if(!bookElement) return;

//    const bookId = bookElement.dataset.id;
//    const book = myLibrary.find(bookToRemove => bookToRemove.id === bookId);
//    if(book && e.target.classList.contains('remove')){
//        book.removeBook(e)
//    } 
// }

// bookContainer.addEventListener("click",  function(e) {
//     Book.prototype.handleClick.call(this, e);
// })

// document.querySelector("#add").addEventListener("click", (e) => {
//     const {bookName, author, pages, read, id} = book.bookFormData(e)
//     data.addBookToLibrary(bookName, author, pages, read, id)
//     book.renderBooks()
// } )