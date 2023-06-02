function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => book.borrows.some(borrow => borrow.returned === false)).length
}

// Helper function for the following function that need to return an array length of 5
function limitToFive(array) {
  return array.length = 5
}

//Helper function to count how many of each genre there is
function genreCounter(genre, books) {
  let counter = 0;
  books.filter((book) => {
  if (book.genre === genre) {
    counter = counter + 1}})
  return counter
}

function getMostCommonGenres(books) {
let allGenres = [];
books.reduce((result, book) => 
             {allGenres.push({name: book.genre,
             count: genreCounter(book.genre, books)})})

  let genresSorted = allGenres.sort((genre1, genre2) => genre1.count > genre2.count ? -1 : 1);
  
  const uniqueGenres = [];
const unique = genresSorted.filter(genre => {
  const isDuplicate = uniqueGenres.includes(genre.name);

  if (!isDuplicate) {
    uniqueGenres.push(genre.name);
    return true;
  }
  return false;
});
  
  limitToFive(unique);
return unique
}


function getMostPopularBooks(books) {
  let bookArray = []
  
  books.reduce((result, book) => 
  { bookArray.push({name: book.title,
    count: book.borrows.length})})

  let booksSorted = bookArray.sort((book1, book2) => book1.count > book2.count ? -1 : 1);
  limitToFive(booksSorted);
  return booksSorted
}

// creating function to use in the next function
function authorBorrows(books, author) {
  let counter = 0;
  books.filter((book) => {
  if (book.authorId === author.id) {
    counter = counter + book.borrows.length}})
return counter
}


function getMostPopularAuthors(books, authors) {
let resultArray = [];

authors.reduce((result, author) => 
  { resultArray.push({name: author.name.first + " " + author.name.last,
    count: authorBorrows(books, author)})})

let authorsSorted = resultArray.sort((author1, author2) => author1.count > author2.count ? -1 : 1);
limitToFive(authorsSorted);
return authorsSorted
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
