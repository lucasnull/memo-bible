import Config from "../config";

export const getChapterVersesList = (bookName: Bible.Book, chapter: number) => {
  const definition = Config[bookName];
  const versesNumber = definition.verses[chapter];

  const array = Array(versesNumber).fill(null);
  return array.map((_, i) => i + 1);
};
