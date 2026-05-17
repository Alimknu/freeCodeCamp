const books = [
  { title: "title", authorName: "author", releaseYear: 2000 },
  { title: "title2", authorName: "author2", releaseYear: 2001 },
  { title: "title3", authorName: "author3", releaseYear: 2002 },
];

const sortByYear = (bookOne, bookTwo) => {
  const diff = bookOne.releaseYear - bookTwo.releaseYear;
  if (diff > 0) return 1;
  if (diff < 0) return -1;
  return 0;
};

const filteredBooks = books.filter((book) => book.releaseYear <= 2001);

filteredBooks.sort(sortByYear);
