// Dialog Constructor    
function Dialog(content = '', options = {}) {
    options = {
        title: "Dialog",
        submitLabel: "Submit",
        cancelLabel: "Cancel",
        allowClickOut: true,
        ...options
    }

    const dialog = document.createElement("div");
    dialog.className = "dialog";
    dialog.innerHTML = `
    <div class="dialog-container">
            ${options.title 
                ? `
                <header class="dialog-container_heading">
                    <h3>${options.title}</h3>
                </header>
                `
                : ''
            }
            <section class="dialog-container_body ">
                ${content}
            </section>
            <section class="dialog-container_footer">
            <button class="btn btn-outline cancel-btn">${options.cancelLabel || 'Cancel'}</button>
            ${options.submitLabel 
                ? `<button type="button" class="btn btn-primary submit-btn">${options.submitLabel}</button>`
                : ''}
            </section>
        </div>
    `;

    const submitBtn = dialog.querySelector('.submit-btn');
    const cancelBtn = dialog.querySelector('.cancel-btn');
    const htmlContent = dialog.querySelector('.dialog-content');
    

    if(submitBtn) {
        submitBtn.addEventListener('click', () => {
            dialog.dispatchEvent(new Event('dialog-submit'));
            this.close();
        });
    }

    cancelBtn.addEventListener('click', () => {
        dialog.dispatchEvent(new Event('dialog-cancel'));
        this.close();
    });     

    const handleCLickOut = (e) => {
        if(e.target === dialog) {
            this.close();
        }
    };  

    if(options.allowClickOut) {
        document.addEventListener('click', handleCLickOut);
    };

    this.content = htmlContent;
    
    this.open = () => {
        document.body.appendChild(dialog);
    }

    this.close = () => {
        dialog.remove()
        document.removeEventListener('click', handleCLickOut);
        dialog.dispatchEvent(new Event("dialog-closed"))
    };


    this.onClose = cb => {
        dialog.addEventListener('dialog-closed', cb)
    };

    this.onCancel = cb => {
        dialog.addEventListener('dialog-cancel', cb)
    };

    this.onSubmit= cb => {
        dialog.addEventListener('dialog-submit', cb)
    };
}

const addBtn = document.querySelector(".container_heading-add-btn");
const searchBox = document.querySelector('.container_heading-search');

// Add Button
addBtn.addEventListener("click", handleAddBtn);
// Search Button
searchBox.addEventListener('input', handleSearchBook);

// Funtions
function start() {
    const data = [
        {
            name: "Refactoring",
            author: "Martin Fowler",
            topic: "Programming"
        },
        {
            name: "Design Data-Intensive Applications",
            author: "Martin Kleppmann",
            topic: "Database"
        },
        {
            name: "The Phoenix Project",
            author: "Gene Kim",
            topic: "DevOps"
        }
    ]
    localStorage.setItem('bookList',JSON.stringify(data));
    renderBooks(getBooks())
}
start();

function renderBooks(data) {
    const tableBody = document.querySelector('.table_body')
    
     let tableRow = data.map((book,index) => {
        return  `
            <tr class="table_row">
                <td class="table_data">${book.name}</td>
                <td class="table_data">${book.author}</td>
                <td class="table_data">${book.topic}</td>
                <td class="table_data">
                    <button onclick="handleEditBtn(${index})" class="btn btn-text btn-text--warn btn--small table-btn_edit data-index="${index}">
                        Edit
                    </button>
                    <button  onclick="handleDeleteBtn(${index})" class="btn btn-text btn-text--danger btn--small table-btn_delete data-index="${index}">Delete</button>
                </td>
            </tr>
        `
   })

   tableBody.innerHTML = tableRow.join("");

}

function getBooks() {
    const booksList = JSON.parse(localStorage.getItem('bookList')) || [];
    return booksList;
}

function saveBook(data) {
    localStorage.setItem('bookList', JSON.stringify(data))
}

// Handler Functions 
function handleAddBtn() {
    const addForm = `
    <form action="" class="dialog-form">
        <div class="dialog-form_field">
            <label for="name" class="dialog-form_field-label">Name</label>
            <input id="name" type="text" class="dialog-form_field-input" placeholder="Enter book name">
        </div>
        <div class="dialog-form_field">
            <label for="author" class="dialog-form_field-label">Author</label>
            <input id="author" type="text" class="dialog-form_field-input" placeholder="Enter book author">
        </div>
        <div class="dialog-form_field">
        <label for="topic" class="dialog-form_field-label">Topic</label>
        <select id="topic" class="dialog-form_field-select">
            <option class="dialog-form_select-options" value="" selected disabled hidden>Choose topic here</option>
            <option class="dialog-form_select-options" value="programing">Programing</option>
            <option class="dialog-form_select-options" value="database">Database</option>
            <option class="dialog-form_select-options" value="network">Network</option>
            <option class="dialog-form_select-options" value="finance">Finance</option>
            <option class="dialog-form_select-options" value="devOps">DevOps</option>
        </select>
        </div>
    </form>
    `;

    const addDialog = new Dialog(addForm, {
        title: "Add book",
        submitLabel: "Create",
        cancelLabel: null,
    });
    addDialog.open()

    addDialog.onSubmit(()=> {
        const inputNameValue = document.querySelector("input#name").value;
        const inputAuthorValue = document.querySelector("input#author").value;
        const selectTopic = document.querySelector("select#topic");
        const optionsTopic =  selectTopic.options[selectTopic.selectedIndex].text;

        const bookList = getBooks();
        const newBook = {
            name: inputNameValue,
            author: inputAuthorValue,
            topic: optionsTopic
        }
        bookList.push(newBook);

        saveBook(bookList);
        renderBooks(getBooks());

        addDialog.close();
    });

}

function handleEditBtn(index) {
        const booksList = getBooks()
        const bookToEdit = booksList[index];
        const editForm = `
            <form action="" class="dialog-form">
                <div class="dialog-form_field">
                    <label for="edit-name" class="dialog-form_field-label">Name</label>
                    <input id="edit-name" type="text" class="dialog-form_field-input" value="${bookToEdit.name}">
                </div>
                <div class="dialog-form_field">
                    <label for="edit-author" class="dialog-form_field-label">Author</label>
                    <input id="edit-author" type="text" class="dialog-form_field-input" value="${bookToEdit.author}">
                </div>
                <div class="dialog-form_field">
                    <label for="edit-topic" class="dialog-form_field-label">Topic</label>
                    <select id="edit-topic" class="dialog-form_field-select">
                        <option value="programming" ${bookToEdit.topic.toLowerCase() === "programming" ? "selected" : ""}>Programming</option>
                        <option value="database" ${bookToEdit.topic.toLowerCase() === "database" ? "selected" : ""}>Database</option>
                        <option value="network" ${bookToEdit.topic.toLowerCase() === "network" ? "selected" : ""}>Network</option>
                        <option value="finance" ${bookToEdit.topic.toLowerCase() === "finance" ? "selected" : ""}>Finance</option>
                        <option value="finance" ${bookToEdit.topic.toLowerCase() === "devops" ? "selected" : ""}>DevOps</option>
                    </select>
                </div>
            </form> 
        `;

        const editDialog = new Dialog(editForm, {
            title: "Edit Book",
            submitLabel: "Save",
            cancelLabel: "Cancel",
        });

        editDialog.open();

        editDialog.onSubmit(() => {
            const editedName = document.querySelector("#edit-name").value;
            const editedAuthor = document.querySelector("#edit-author").value;
            const selectTopic = document.querySelector("select#edit-topic");
            const optionsTopic =  selectTopic.options[selectTopic.selectedIndex].text;

            bookToEdit.name = editedName;
            bookToEdit.author = editedAuthor;
            bookToEdit.topic = optionsTopic;

            saveBook(booksList);

            renderBooks(booksList);

            editDialog.close();
        });
}

function handleDeleteBtn(index) {
        const bookList = getBooks();
        const content = `<p class="dialog-container_body-content">Do you want delete <span>${bookList[index].name}</span> book?</p>`;
        const dialog = new Dialog(content, {
            title: "Delete book",
            submitLabel: "Delete",
            cancelLabel: "Cancel",
        });
        dialog.open();
    
        dialog.onSubmit(() => {
            bookList.splice(index, 1);

            saveBook(bookList);
            renderBooks(getBooks());

            dialog.close();
        });
}

function handleSearchBook(e) {
    const bookList = getBooks();
    const searchValue = e.target.value;
    const searchResults = []
    bookList.forEach(book => {
        const match = book.name.toLowerCase().includes(searchValue.toLowerCase()) || 
            book.author.toLowerCase().includes(searchValue.toLowerCase());
        if (match) {
            searchResults.push(book);
        }

    });

    renderBooks(searchResults);
}