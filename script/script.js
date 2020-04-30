let myLibrary = [
    book1 = {
        name: "Title"
    }
];
const article = document.querySelector('article');

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // myLibrary.push()
}

function render() {
    myLibrary.forEach( book => {
        let bookName = document.createElement('H5');
        bookName.appendChild(document.createTextNode(book.name));
        article.appendChild(bookName);
    } )
}

render();