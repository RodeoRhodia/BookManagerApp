const BASE_API_URL = "http://localhost:8080/api/v1/books/";

document.addEventListener('DOMContentLoaded', function() {
    console.log('THIS WORKSSSS');
    const bookList = document.querySelector('#book-list ul');

    // Delete a Book
    bookList.addEventListener('click', function(event) {
        if (event.target.className == 'delete') {
            const bookItem = event.target.parentNode;
            const bookId = bookItem.getAttribute('bookid');
            console.log(bookId);

            deleteBook(bookId);

            bookList.removeChild(bookItem);
        }
    });

    // Add a Book
    const addBookForm = document.forms['add-book'];
    addBookForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const inputValue = addBookForm.querySelector('input[type="text"]').value;

        // add the actual book to the database
        const addBookRes = addBook(inputValue);

        addBookRes
            .then(function(response) {
            if(response.ok) {
                // Display new book in User Interface
                addBookForm.reset();

                const li = document.createElement('li');
                const bookTag = document.createElement('span');
                const deleteBtn = document.createElement('span');

                bookTag.textContent = inputValue;
                deleteBtn.textContent = 'delete';

                bookTag.classList.add('name');
                deleteBtn.classList.add('delete');

                li.appendChild(bookTag);
                li.appendChild(deleteBtn);
                bookList.appendChild(li);
            } else {
                alert('book already exists');
            }
        });
    });

    function deleteBook(bookId) {
        fetch(BASE_API_URL + bookId, {
            method: 'DELETE',
        })
            .then(response => console.log(response));
    }

    function addBook(bookTitle) {
        return fetch(BASE_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: bookTitle})
        });
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const bookList = document.querySelector('#book-list ul');
//
//     bookList.addEventListener('click', function(event) {
//         if (event.target.className == 'delete') {
//             const bookItem = event.target.parentNode;
//             const bookId = bookItem.getAttribute('bookid');
//
//             deleteBook(bookId);
//
//             // console.log(bookItem.getAttribute('bookid'));
//             // console.log(typeof bookItem.getAttribute('bookid'));
//         }
//     });
//
// });
//
// function deleteBook(bookId) {
//     fetch('/books/' + bookId, {
//         method: 'DELETE',
//     })
//         .then(res => res.text()) // or res.json()
//         .then(res => console.log(res));
// }