import React from "react";
import { Verse } from "./Verse";
import { removeKeywordTag } from "../helpers/removeKeywordTag";
type Props = { verses: Memorizer.Verses };

export const SimpleMode: React.FC<Props> = ({ verses }) => {
  const renderVerses = () => {
    const cleanVerses = removeKeywordTag<Memorizer.Verses>(verses);

    return cleanVerses.map((verse) => (
      <Verse key={Math.random()}>
        {verse.number}. {verse.text}
      </Verse>
    ));
  };

  return <React.Fragment>{renderVerses()}</React.Fragment>;
};
