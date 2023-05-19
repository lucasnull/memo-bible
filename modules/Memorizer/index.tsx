/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import Bible from "@/modules/Bible";
import { Container } from "./style";
import { Ads } from "./components/Ads";
import { getModeComponent } from "./helpers";

const Memorizer: React.FC<Memorizer.Props> = ({
  mode,
  language,
  version,
  book,
  chapter,
  verseFrom,
  verseTo,
}) => {
  const [randomKey, setRandomKey] = React.useState(Math.random());
  const resetComponent = () => setRandomKey(Math.random());

  const getVerses = () => {
    const BibleDefinitions = Bible as any;
    const fullChapter = BibleDefinitions[language][version][book][chapter];
    const filterRule = ({ number: n }: any) => n >= verseFrom && n <= verseTo;
    return fullChapter.filter(filterRule);
  };

  const renderComponent = () => {
    const verses = getVerses();
    const ModeComponent = getModeComponent(mode);

    return (
      <ModeComponent
        mode={mode}
        verses={verses}
        resetComponent={resetComponent}
      />
    );
  };

  return (
    <Container key={randomKey}>
      <Ads />
      {renderComponent()}
      <Ads />
    </Container>
  );
};

export default Memorizer;
