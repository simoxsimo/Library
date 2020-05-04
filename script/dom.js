const myLibrary = [];
const openForm = document.querySelector('.open-form');
const closeForm = document.querySelector('.close-form');
const submitForm = document.querySelector('.submit-form');
const section = document.querySelector('section');
const form = document.querySelector('.book-form');
const params = document.querySelectorAll('.params');

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// reload section tag
function reload() {
  section.innerHTML = '';
}

function render() {
  myLibrary.forEach(book => {
    const article = document.createElement('article');
    const newBook = {
      author: document.createElement('H4'),
      title: document.createElement('H5'),
      pages: document.createElement('P'),
      read: document.createElement('P'),
    };
    const removeBook = document.createElement('button');
    const readStatus = document.createElement('button');
    // Adding class attribute to remove & read buttons for selections
    removeBook.setAttribute('class', 'remove-book');
    readStatus.setAttribute('class', 'read-status');

    // Creating Text Inside Html Tags
    // putting text inside created elements & put the newly created elements inside article
    Object.entries(newBook).forEach(keyValue => {
      keyValue[1].appendChild(document.createTextNode(`${keyValue[0]}: ${book[keyValue[0]]}`));
      article.appendChild(keyValue[1]);
    });
    // the read status button
    readStatus.appendChild(document.createTextNode('Read?'));
    article.appendChild(readStatus);
    // remove Book button
    removeBook.appendChild(document.createTextNode('Delete'));
    article.appendChild(removeBook);

    // putting article inside section
    section.appendChild(article);
  });
  // we listen on book delete & read toggle after every render
  remove();
  readStatus(myLibrary);
}

function remove() {
  const removeBtns = document.querySelectorAll('.remove-book');
  removeBtns.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      myLibrary.splice(i, 1);
      // we reload the section tag and render myLibrary array again
      reload();
      render();
    });
  });
  return true;
}

function readStatus(library) {
  const readBtns = document.querySelectorAll('.read-status');
  readBtns.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      library[i].changeReadStatus();
      // we reload the section tag and render myLibrary array again
      reload();
      render();
    });
  });
  return true;
}

function close(event) {
  event.preventDefault();
  form.style.display = 'none';
}

function clearCloseForm() {
  form.reset(); // empty form fields after submit
  close(event);
}

function addBook(event) {
  let _; // undefined
  const newBook = new Book(_, _, _, 'No');
  event.preventDefault(); // prevent page reload
  params.forEach(input => {
    if (input.name === 'author' || input.name === 'title') {
      newBook[input.name] = input.value;
    } else if (input.name === 'pages') {
      newBook[input.name] = parseInt(input.value, 10);
    } else if (input.id === 'read-1' && input.checked === true) {
      newBook[input.name] = 'Yes';
    }
  });
  // pushing newBook to mylibrary
  addBookToLibrary(newBook);
  // reload section tag and render again(re-render)
  reload();
  render();
  // clear form fields and close form
  clearCloseForm();
}

// form event listening
// open form when 'New Book' clicked
openForm.addEventListener('click', (e) => {
  e.preventDefault();
  form.style.display = 'flex';
});
// close form when 'close' clicked
closeForm.addEventListener('click', close);
// call 'addBook' function when submit clicked
submitForm.addEventListener('click', addBook);
