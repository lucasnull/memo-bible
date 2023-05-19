import Config from "../config";

export const getBookLabel = (bookName: Bible.Book) => {
  const definition = Config[bookName];
  return definition.label;
};
