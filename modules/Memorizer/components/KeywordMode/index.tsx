import React from "react";
import { Verse } from "../Verse";
import { KeyWord, Word } from "./style";
import { removeKeywordTag } from "../../helpers/removeKeywordTag";
type Props = { verses: Memorizer.Verses };

export const KeywordMode: React.FC<Props> = ({ verses }) => {
  const highlightKeywords = (verse: string) => {
    const spaceRegex = /\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/g;
    const demarcatedVerse = verse.replace(spaceRegex, "[SPLITPOINT]");
    const words = demarcatedVerse.split(/\[SPLITPOINT]/g);

    return words.map((word) => {
      const keywordTagRegex = /'.*?'/g;
      const isKeyword = keywordTagRegex.test(word);

      if (isKeyword) {
        return (
          <KeyWord key={Math.random()} className="keyword">
            {removeKeywordTag(word)}
          </KeyWord>
        );
      }

      return <Word key={Math.random()}>{word}</Word>;
    });
  };

  const renderVerses = () => {
    return verses.map((verse) => (
      <Verse key={Math.random()}>
        {verse.number}. {highlightKeywords(verse.text)}
      </Verse>
    ));
  };

  return <React.Fragment>{renderVerses()}</React.Fragment>;
};
