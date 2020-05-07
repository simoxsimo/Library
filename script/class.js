// Book constructor
export default function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

// Toggle read status
/* eslint func-names: ["error", "never"] */
Book.prototype.changeReadStatus = function () {
  if (this.read === 'Yes') {
    this.read = 'No';
  } else {
    this.read = 'Yes';
  }
};