const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID()
}

function addBookToLibrary(a) {
    const name = new Book(a);
    myLibrary.push(name.title);
    const card =  document.createElement("div")
    card.classList.add("card")
    main.appendChild(card)
}

main = document.querySelector(".main")

const Roma = new Book("Roma", "Dog", "100 pages", "Yes")
const Milo = new Book("Milo", "Dog", "100 pages", "Yes")

console.log(Roma)
console.log(Milo)

addBookToLibrary(Roma)
addBookToLibrary(Milo)

console.log(myLibrary)

console.log(myLibrary[0].title)
console.log(myLibrary[1].title)


