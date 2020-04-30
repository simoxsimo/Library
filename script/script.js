let myLibrary = [];
const openForm = document.querySelector('.open-form');
const closeForm = document.querySelector('.close-form');
const submitForm = document.querySelector('.submit-form');
let section = document.querySelector('section');
const form = document.querySelector('.book-form');
const params = document.querySelectorAll('.params');

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function render() {
    const book = myLibrary[myLibrary.length - 1];
    let article = document.createElement('article');
    let remove = document.createElement('button')
    let newBook = {
      author:  document.createElement('H4'),
      title: document.createElement('H5'),
      pages: document.createElement('P'),
      read: document.createElement('P')
    }

    // putting text inside created elements & put the newly created elements inside article
    for(props in newBook){
        newBook[props].appendChild(document.createTextNode(`${props}: ${book[props]}`));
        article.appendChild(newBook[props]);
    }
    remove.appendChild(document.createTextNode("Delete Book"));
    remove.setAttribute('id', 'deleteInfo');
    article.appendChild(remove);
    // putting article inside section
    section.appendChild(article);

    // deleting articles
    document.querySelectorAll("#deleteInfo").forEach(i=>i.addEventListener('click', ()=>{
      removeBook(i.getAttribute('id'));
    } )
    )
    
}

function removeBook(index) {
  myLibrary.splice(index,1);
  render();  
}

function addBook(event) {
    let _ = undefined;
    let newBook = new Book(_,_,_, false);
    event.preventDefault(); // prevent page reload
    params.forEach( input => {
        if(input.name === 'author' || input.name === 'title'){
            newBook[input.name] = input.value;
        }
        else if(input.name === 'pages'){
            newBook[input.name] = parseInt(input.value);
        }
        else if(input.name === 'read' && input.checked === true){
            newBook[input.name] = true;
        }
    });
    addBookToLibrary(newBook);
    render();
    form.reset();
    close(event);
}

function close(event) {
    event.preventDefault();
    form.style.display = 'none';
}

openForm.addEventListener('click', (e)=> {
  e.preventDefault();
  form.style.display = 'block';
});

closeForm.addEventListener('click', close)

submitForm.addEventListener('click', addBook);