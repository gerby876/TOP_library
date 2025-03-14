const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = document.getElementById("finished").value.charAt(0).toUpperCase() + document.getElementById("finished").value.slice(1);;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(a) {
    myLibrary.push(a);
    
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

    const bottom = document.createElement("div");
    bottom.classList.add("bottom");
    card.appendChild(bottom)

    const finished = document.createElement("button");
    finished.textContent = "Finished";
    finished.classList.add("cbutton");
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
    bottom.appendChild(finished);

    const remove = document.createElement("button");
    remove.textContent = "Delete";
    remove.classList.add("cbutton");
    remove.addEventListener("click", () => {
            main.removeChild(card);
                for (i=0; i<myLibrary.length; i++) {
                    if (myLibrary[i].id == id) {
                        myLibrary.splice(i, 1);
                };
            };
    });
    bottom.appendChild(remove);
}

main = document.querySelector(".main");

dialog = document.querySelector("dialog");
const add = document.getElementById("add");
const submit = document.getElementById("submit");

add.addEventListener("click", () => {
    dialog.showModal();
});

submit.addEventListener("click", () => {
    if(document.getElementById("name").value == "" || document.getElementById("writer").value == "" || document.getElementById("length").value == "") {
        alert("Please fill out all fields.");
    } else if (document.getElementById("length").value<1) {
        alert("Please enter a page number of 1 or more.")
    } else {
    const next = new Book(document.getElementById("name").value, document.getElementById("writer").value, document.getElementById("length").value, document.getElementById("finished".value));
    addBookToLibrary(next);
    dialog.close();
    };
});

