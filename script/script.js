const myLibrary = [];
const openForm = document.querySelector('.open-form');
const closeForm = document.querySelector('.close-form');
const submitForm = document.querySelector('.submit-form');
const section = document.querySelector('section');
const form = document.querySelector('.book-form');
const params = document.querySelectorAll('.params');

// Book constructor
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}
book1 = new Book();

// Toggle read status
Book.prototype.changeReadStatus = function () {
  this.read === 'Yes' ? this.read = 'No' : this.read = 'Yes';
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function render() {
    myLibrary.forEach( book => {
      const article = document.createElement('article');
      const newBook = {
        author:  document.createElement('H4'),
        title: document.createElement('H5'),
        pages: document.createElement('P'),
        read: document.createElement('P')
      }
      const removeBook = document.createElement('button');
      const readStatus = document.createElement('button');

      // Adding class attribute to remove & read buttons for selections
      removeBook.setAttribute('class', 'remove-book');
      readStatus.setAttribute('class', 'read-status');

      // Creating Text Inside Html Tags
      // putting text inside created elements & put the newly created elements inside article
      for(props in newBook){
          newBook[props].appendChild(document.createTextNode(`${props}: ${book[props]}`));
          article.appendChild(newBook[props]);
      }
      // the read status button
      readStatus.appendChild(document.createTextNode('Read?'));
      article.appendChild(readStatus);
      // remove Book button
      removeBook.appendChild(document.createTextNode('Delete'));
      article.appendChild(removeBook);
      // putting article inside section
      section.appendChild(article);
    } )
    // we listen on book delete & read toggle after every render
    remove();
    readStatus(myLibrary);
}

function close(event) {
    event.preventDefault();
    form.style.display = 'none';
}

// reload section tag
function reload() {
  section.innerHTML = "";
}

function reloadRender() {
  reload();
  render();
}

function remove() {
  const removeBtns = document.querySelectorAll('.remove-book');
  removeBtns.forEach( (btn, i) => {
      btn.addEventListener('click', (e) => {
          e.preventDefault();
          myLibrary.splice(i, 1);
          reloadRender(); // we reload the section tag and render myLibrary array again
      });
  })
  return true;
}

function readStatus(library) {
  const readBtns = document.querySelectorAll('.read-status');
  readBtns.forEach( (btn, i) => {
      btn.addEventListener('click', (e) => {
          e.preventDefault();
          library[i].changeReadStatus();
          reloadRender(); // we reload the section tag and render myLibrary array again;
      });
  })
  return true;
}

function clearCloseForm() {
  form.reset(); // empty form fields after submit
  close(event);
}

function addBook(event) {
    let _ = undefined;
    let newBook = new Book(_,_,_, 'No');
    event.preventDefault(); // prevent page reload
    params.forEach( input => {
        if(input.name === 'author' || input.name === 'title'){
            newBook[input.name] = input.value;
        }
        else if(input.name === 'pages'){
            newBook[input.name] = parseInt(input.value);
        }
        else if(input.id === 'read-1' && input.checked === true){
            newBook[input.name] = 'Yes';
        }
    });
    // pushing newBook to mylibrary
    addBookToLibrary(newBook);
    // reload section tag and render again(re-render)
    reloadRender();
    // clear form fields and close form
    clearCloseForm();
}

openForm.addEventListener('click', (e)=> {
  e.preventDefault();
  form.style.display = 'block';
});

closeForm.addEventListener('click', close)

submitForm.addEventListener('click', addBook);

