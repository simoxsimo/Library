// Book constructor
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

// Toggle read status
Book.prototype.changeReadStatus = () => {
  if (this.read === 'yes') {
    this.read = 'No';
  } else {
    this.read = 'yes';
  }
};