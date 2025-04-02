function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books') // Make sure to return the Promise here
    .then(response => response.json())
    .then(data => {
      const books = data.books;
      renderBooks(books);
      console.log(books);
      return data; // Return the data so that the test can check it
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
