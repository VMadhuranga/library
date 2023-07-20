let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// check read status
Book.prototype.readStatus = function(value) {
    if (value) {
        this.read = "Read";
    } else {
        this.read = "Not Read";
    }
}

function addBookToLibrary(title, author, pages, read) {
    if (title && author && pages) {
        let newBook = new Book(title, author, pages);
        newBook.readStatus(read)
        myLibrary.push(newBook);
    } 
}

let bookContainer = document.querySelector(".book-container");

function displayBook(library) {
    let bookTitle = document.createElement("h3");
    bookTitle.setAttribute("class", "title");

    let bookAuthor = document.createElement("h3");
    bookAuthor.setAttribute("class", "author");

    let bookPages = document.createElement("h3");
    bookPages.setAttribute("class", "pages");

    let bookRead = document.createElement("h3");
    bookRead.setAttribute("class", "read");

    let bookCard = document.createElement("div");
    bookCard.setAttribute("class", "book-card");
    
    for (let book of library) {
        bookTitle.textContent = `Title: ${book.title}`;
        bookAuthor.textContent = `Author: ${book.author}`;
        bookPages.textContent = `Pages: ${book.pages}`;
        bookRead.textContent = `Read: ${book.read}`; 

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);
        bookContainer.appendChild(bookCard);
    }
}

let newBookButton = document.querySelector(".header-container .button-new-book");
let cancelBookButton = document.querySelector(".form-add-book #cancel-book");
let formModal = document.querySelector(".form-modal");

newBookButton.addEventListener("click", showFormModal);
cancelBookButton.addEventListener("click", closeFormModal);

function showFormModal() {
    formModal.showModal();
}

function closeFormModal() {
    formModal.close();
}

let getBookTitle = document.querySelector(".form-add-book #title");
let getBookAuthor = document.querySelector(".form-add-book #author");
let getBookPages = document.querySelector(".form-add-book #pages");
let getBookRead = document.querySelector(".form-add-book #read");
let addBookButton = document.querySelector(".form-add-book #add-book");

addBookButton.addEventListener("click", getBookData);

function getBookData() {
    let setTitle = getBookTitle.value;
    let setAuthor = getBookAuthor.value;
    let setPages = Number(getBookPages.value);
    let setRead = getBookRead.checked;

    addBookToLibrary(setTitle, setAuthor, setPages, setRead);
    displayBook(myLibrary);
    closeFormModal();
}