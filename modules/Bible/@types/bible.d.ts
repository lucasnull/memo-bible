declare namespace Bible {
  type Book = "psalms";

  interface BookDefinition {
    label: string;
    chapters: number;
    verses: Record<number, number>;
  }
}
