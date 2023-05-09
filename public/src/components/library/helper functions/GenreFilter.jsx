const GenreFilter = (subjectArray) => {
  const validGenres = {
    'Fiction': 0,
    'Nonfiction': 0,
    'Art': 0,
    'Science fiction': 0,
    'Fantasy': 0,
    'Biography': 0,
    'Recipes': 0,
    'Romance': 0,
    'Textbook': 0,
    'Children': 0,
    'History': 0,
    'Medicine': 0,
    'Religion': 0,
    'Mystery': 0
  };
  // return the first valid, matching genre
  for (let i = 0; i < subjectArray.length; i++) {
    if (validGenres.hasOwnProperty(subjectArray[i].name)) {
      return subjectArray[i].name;
    }
  }
  return '';
};

export default GenreFilter;
