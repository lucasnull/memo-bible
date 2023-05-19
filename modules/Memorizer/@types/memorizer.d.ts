declare namespace Memorizer {
  interface Props {
    mode: Mode;
    version: string;
    language: string;
    book: string;
    verseTo: number;
    verseFrom: number;
    chapter: number;
  }

  interface Verse {
    number: number;
    text: string;
  }

  interface ModeDefinition {
    label: string;
    component: React.Element;
  }

  type Mode = "simple" | "keyword" | "fragments" | "write" | "first-char";
  type Verses = Verse[];
}
