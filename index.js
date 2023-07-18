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
        bookTitle.textContent = book.title;

        bookAuthor = document.createElement("h3");
        bookAuthor.setAttribute("class", "author");
        bookAuthor.textContent = book.author;
        
        bookPages = document.createElement("h3");
        bookPages.setAttribute("class", "pages");
        bookPages.textContent = book.pages;
        
        bookRead = document.createElement("h3");
        bookRead.setAttribute("class", "read");
        bookRead.textContent = book.read; 

        bookCard = document.createElement("div");
        bookCard.setAttribute("class", "book-card");

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);
        bookContainer.appendChild(bookCard);
    }
}

// this is for testing 
addBookToLibrary("book1", "author1", 11, true);
addBookToLibrary("book2", "author2", 12, false);

displayBook(myLibrary);