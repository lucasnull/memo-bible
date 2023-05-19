import Config from "../config";

export const getBookChaptersList = (bookName: Bible.Book) => {
  const definition = Config[bookName];
  const array = Array(definition.chapters).fill(null);
  return array.map((_, i) => i + 1);
};
