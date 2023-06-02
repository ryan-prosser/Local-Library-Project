function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) => account1.name.last.toLowerCase() < account2.name.last.toLowerCase() ? -1 : 1) 
}

function getTotalNumberOfBorrows(account, books) {
  let {id} = account;
  return books.filter((book) => book.borrows.find((borrow) => borrow.id === id )).length
}


//Helper function to return author info
function getAuthorInfo(authors, book) {
  let authorInfo = {};
  authors.find(author => {
    if (author.id === book.authorId) {
        authorInfo = author}})
return authorInfo
}


function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  let checkedOut = books.filter((book) => book.borrows.filter((borrow) => {
    if (borrow.returned === false && borrow.id === account.id) {
       result.push({...book, 
      author: getAuthorInfo(authors, book)})}}))
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
