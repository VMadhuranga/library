// book objects should stored in array
let myLibrary = [];

// create constructor to create book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// create a function to create a new book using book constructor and store in my library array
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// create a function that loops through the my library array and displays each book on the page
let bookContainer = document.querySelector(".book-container");

function displayBook(library) {
    for (let book of library) {
        bookTitle = document.createElement("h3");
        bookTitle.setAttribute("class", "title");
        bookTitle.textContent = `Title: ${book.title}`;

        bookAuthor = document.createElement("h3");
        bookAuthor.setAttribute("class", "author");
        bookAuthor.textContent = `Author: ${book.author}`;
        
        bookPages = document.createElement("h3");
        bookPages.setAttribute("class", "pages");
        bookPages.textContent = `Pages: ${book.pages}`;
        
        bookRead = document.createElement("h3");
        bookRead.setAttribute("class", "read");
        bookRead.textContent = `Read: ${book.read}`; 

        bookCard = document.createElement("div");
        bookCard.setAttribute("class", "book-card");

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);
        bookContainer.appendChild(bookCard);
    }
}

// create a “NEW BOOK” button that brings up a form allowing users to input the details for the new book
let newBookButton = document.querySelector(".header-container .button-new-book");
let formModal = document.querySelector(".form-modal");

newBookButton.addEventListener("click", () => {
    formModal.showModal();
});

// this is for testing 
addBookToLibrary("book1", "author1", 11, true);
addBookToLibrary("book2", "author2", 12, false);

displayBook(myLibrary);