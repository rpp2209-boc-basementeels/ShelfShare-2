const getLibrary = () => {
  axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`)
    .then((bookInfo) => {
      const isbnString = `ISBN:${isbn}`;
      const bookData = bookInfo.data[isbnString];
      const authors = bookData.authors.map((author) => {
        return author.name;
      });
      const bookPostData = {
        authors: authors,
        title: bookData.title,
        genre: GenreFilter(bookData.subjects),
        pub_date: DateParser(bookData.publish_date),
        ISBN: parseInt(isbn)
      };
      if (Object.hasOwn(bookData, 'cover')) {
        bookPostData.image_url = bookData.cover.small;
      }
      setScanResults(prev => [...prev, bookPostData]);
    })
    .catch((error) => {
      console.log('Error getting book info: ', error);
    })
}

