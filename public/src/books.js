function findAuthorById(authors, id) {
  for (let author in authors) {
    if (authors[author].id === id) {
      return authors[author]
    }
  }
}

function findBookById(books, id) {
  for (let book in books) {
    if (books[book].id === id) {
      return books[book]
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  return [books.filter((book) => book.borrows.some(borrow => borrow.returned === false)),
    books.filter((book) => book.borrows.every(borrow => borrow.returned === true ))]
}

function getBorrowersForBook(book, accounts) {
   let lastBorrowersAccountInfo = [];

   book.borrows.filter(borrow =>
    {accounts.filter((account) => {
      if (account.id === borrow.id) {
        lastBorrowersAccountInfo.push({...account,
          returned: borrow.returned})}})});

lastBorrowersAccountInfo.length = 10;
return lastBorrowersAccountInfo
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
