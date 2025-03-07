const myLibrary = [];

function Book (title) {
    this.title = title;
    this.id = crypto.randomUUID()
}

function addBookToLibrary(a) {
    const name = new Book(a);
    myLibrary.push(name.title);
}

addBookToLibrary("Roma")
addBookToLibrary("Milo")
addBookToLibrary("Roma")

console.log(myLibrary)

