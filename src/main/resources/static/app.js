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