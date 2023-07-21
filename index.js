let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.readStatus = function(value) {
    if (value) {
        this.read = "Done";
    } else {
        this.read = "In Progress";
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

    let bookReadStatus = document.createElement("h3");
    bookReadStatus.setAttribute("class", "read");

    let changeReadStatusButton = document.createElement("button")
    changeReadStatusButton.setAttribute("class", "read-status-button");

    let removeBookButton = document.createElement("button");
    removeBookButton.setAttribute("class", "remove-book-button");

    let bookCard = document.createElement("div");
    bookCard.setAttribute("class", "book-card");
    
    for (let book of library) {
        bookTitle.textContent = `Title: ${book.title}`;
        bookAuthor.textContent = `Author: ${book.author}`;
        bookPages.textContent = `Pages: ${book.pages}`;
        bookReadStatus.textContent = `Read Status: ${book.read}`;
        removeBookButton.textContent = "Remove";
        changeReadStatusButton.textContent = "Change Read Status";

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookReadStatus);
        bookCard.appendChild(changeReadStatusButton)
        bookCard.appendChild(removeBookButton);
        bookCard.setAttribute("data-book-index", library.indexOf(book))
        bookContainer.appendChild(bookCard);
    }
    changeReadStatus(changeReadStatusButton);
    removeBookCard(removeBookButton);
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

function removeBookCard(value) {
    value.addEventListener("click", function() {
        let index = this.parentElement.dataset.bookIndex;
        myLibrary.splice(index, 1);
        this.parentElement.remove();
    });
}

function changeReadStatus(value) {
    value.addEventListener("click", function() {
        let index = this.parentElement.dataset.bookIndex;
        if (myLibrary[index].read === "In Progress") {
            myLibrary[index].readStatus(myLibrary[index].read === "In Progress");
            this.previousElementSibling.textContent = `Read Status: ${myLibrary[index].read}`;
        } else {
            myLibrary[index].readStatus(myLibrary[index].read === "In Progress");
            this.previousElementSibling.textContent = `Read Status: ${myLibrary[index].read}`;
        }
    });
}
