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
    title.textContent = "Title: " + JSON.stringify(myLibrary[myLibrary.length-1].title);
    const author = document.createElement("div");
    author.textContent = "author: " + JSON.stringify(myLibrary[myLibrary.length-1].author);
    const pages = document.createElement("div");
    pages.textContent = "Number of pages: " + JSON.stringify(myLibrary[myLibrary.length-1].pages);
    const read = document.createElement("div");
    read.textContent = "Finished: " + JSON.stringify(myLibrary[myLibrary.length-1].read);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    const id = myLibrary[myLibrary.length-1].id;

    const finished = document.createElement("button");
    finished.textContent = "Finished";
    finished.addEventListener("click", () => {
        for (i=0; i<myLibrary.length; i++) {
            if (myLibrary[i].id == id) {
                if (myLibrary[i].read == "Yes") {
                    myLibrary[i].read = "No";
                    read.textContent = "Finished: " + JSON.stringify(myLibrary[i].read);
                } else {
                    myLibrary[i].read = "Yes"
                    read.textContent = "Finished: " + JSON.stringify(myLibrary[i].read);
                }
            };
        }
    });
    card.appendChild(finished);

    const remove = document.createElement("button");
    remove.textContent = "Delete";
    remove.addEventListener("click", () => {
            main.removeChild(card);
                for (i=0; i<myLibrary.length; i++) {
                    if (myLibrary[i].id == id) {
                        myLibrary.splice(i, 1);
                };
            };
    });
    card.appendChild(remove);
}

main = document.querySelector(".main");

const Roma = new Book("Roma", "Dog", "100", "Yes");
const Milo = new Book("Milo", "Dog", "100", "Yes");
const Nora = new Book("Nora", "Dog", "100", "Yes");


addBookToLibrary(Roma);
addBookToLibrary(Milo);
addBookToLibrary(Nora);



console.log(myLibrary);

console.log(myLibrary[0].title);
console.log(myLibrary[1].title);


