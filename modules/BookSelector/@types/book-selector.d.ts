namespace BookSelector {
  interface Props {
    book: Bible.Book;
    chapter: number;
    verseFrom: number;
    verseTo: number;
    setBook: (name: Bible.Book) => void;
    setChapter: (chapter: number) => void;
    setVerseRange: (from: number, to: number) => void;
  }
}