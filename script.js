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
    
    const card =  document.createElement("div");
    card.classList.add("card");
    main.appendChild(card);

    const title = document.createElement("div");
    title.innerHTML = "Title: " + JSON.stringify(myLibrary[myLibrary.length-1].title);
    const author = document.createElement("div");
    author.innerHTML = "author: " + JSON.stringify(myLibrary[myLibrary.length-1].author);
    const pages = document.createElement("div");
    pages.innerHTML = "Number of pages: " + JSON.stringify(myLibrary[myLibrary.length-1].pages);
    const read = document.createElement("div");
    read.innerHTML = "Finished: " + JSON.stringify(myLibrary[myLibrary.length-1].read);
    console.log(myLibrary[myLibrary.length-1]);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    const remove = document.createElement("button");
    remove.addEventListener("click", () =>
        main.removeChild(card)
    );
    card.appendChild(remove)
}

main = document.querySelector(".main");

const Roma = new Book("Roma", "Dog", "100", "Yes");
const Milo = new Book("Milo", "Dog", "100", "Yes");


console.log(Roma);
console.log(Milo);

addBookToLibrary(Roma);
addBookToLibrary(Milo);


console.log(myLibrary);

console.log(myLibrary[0].title);
console.log(myLibrary[1].title);


