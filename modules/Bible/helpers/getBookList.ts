import Config from "../config";

export const getBookList = () => {
  const books = Object.keys(Config) as unknown as Bible.Book[];

  return books.map((book) => {
    return {
      label: Config[book].label,
      key: book,
    };
  });
};
