const myLibrary = [];

function Book (title) {
    this.title = title;
}

function addBookToLibrary(a) {
    const name = new Book(a);
    myLibrary.push(name.title);
}

addBookToLibrary("Roma")
addBookToLibrary("Milo")

console.log(myLibrary)