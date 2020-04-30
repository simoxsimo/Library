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

const newBook = document.querySelector('#newBook')
newBook.addEventListener('click', ()=> {
  let visible = document.querySelector('.bookForm')
  visible.style.display = 'block';
})

render();