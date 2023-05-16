
//books is all books
//option is either genre or pub
//parameter (type string) is the specific genre or year
//hook will be the updateGalleryBooks function
const filter = (books, option, parameterStr, hook) => {
  //create empty filtered array
  let filtered = [];
  //iterate over all the books
  books.forEach((book) => {
    //if option is genre
    if (option === 'genre') {
      //if parameter matches genre
      if (parameterStr === book.genre) {
        //push book to filtered array
        filtered.push(book);
      }
    }
    //if option is pub date
    if (option === 'pub') {
      //parse pub year
      let year = book.pub_date.slice(0, 4);
      //if parameter matches pub year
      if (parameterStr === year) {
        //push book to filtered array
        filtered.push(book);
      }
    }
  });
  //set gallery books
  hook(filtered);
};

module.exports = filter;